import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// GALERİ GETİR (Public ve Admin kullanır)
// Hata olsa bile boş dizi dönerek ön yüzün patlamasını engelliyoruz.
export async function GET() {
  try {
    const items = await prisma.galleryItem.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(items);
  } catch (error) {
    // Veritabanı bağlantı hatası vs. olursa boş dizi dön.
    return NextResponse.json([], { status: 200 });
  }
}

// YENİ FOTOĞRAF BİLGİSİNİ KAYDET (Sadece Admin)
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  try {
    const body = await req.json();
    
    // Basit bir validasyon
    if (!body.src || !body.label) {
       return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
    }

    const newItem = await prisma.galleryItem.create({
      data: {
        src: body.src, // Buraya artık Cloudinary URL'i gelecek
        alt: body.alt,
        label: body.label,
        category: body.category,
      },
    });
    return NextResponse.json(newItem);
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ error: "Veritabanı kayıt hatası" }, { status: 500 });
  }
}

// SİLME İŞLEMİ (Sadece Admin)
export async function DELETE(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "ID gerekli" }, { status: 400 });

    // Not: Buradan sildiğimizde sadece veritabanından kaydı siliyoruz.
    // Cloudinary'deki asıl resmi silmiyoruz (Bu daha karmaşık bir işlem, şimdilik gerek yok).
    await prisma.galleryItem.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json({ error: "Silme hatası" }, { status: 500 });
  }
}