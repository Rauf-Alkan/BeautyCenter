import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// fs ve path yerine Cloudinary'yi import ediyoruz
import { v2 as cloudinary } from "cloudinary";

// 1. Cloudinary Konfigürasyonu
// Bu bilgileri .env dosyasından çekecek
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  // 2. Güvenlik Kontrolü (Sadece Admin)
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Yetkisiz Erişim" }, { status: 401 });

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Dosya bulunamadı" }, { status: 400 });
    }

    // 3. Dosya Tip Kontrolü
    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Sadece resim dosyası yüklenebilir" }, { status: 400 });
    }

    // 4. Dosyayı Buffer'a Çevirme
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 5. Cloudinary'ye Yükleme İşlemi (Stream ile)
    // Bu işlem asenkron olduğu için bir Promise içine alıyoruz
    const uploadResult: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "rauf-alkan-gallery", // Cloudinary'de dosyaların duracağı klasör adı
          resource_type: "image", // Sadece resim olduğunu belirtiyoruz
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error Details:", error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(buffer); // Buffer'ı gönderiyoruz
    });

    // 6. Başarılı Sonuç: Cloudinary'den gelen güvenli URL'i döndür
    // Örn: https://res.cloudinary.com/deneme/image/upload/v123456/rauf-alkan-gallery/resim.jpg
    return NextResponse.json({ url: uploadResult.secure_url });

  } catch (error) {
    console.error("General Upload Error:", error);
    // Hata mesajını daha genel tutuyoruz ki kullanıcı teknik detay görmesin
    return NextResponse.json({ error: "Resim yüklenirken bir sorun oluştu." }, { status: 500 });
  }
}