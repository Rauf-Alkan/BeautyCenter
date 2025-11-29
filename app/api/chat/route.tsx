import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

// --- GÜZELLİK MERKEZİ ZEKASI ---
const systemInstruction = `
    KİMLİK:
    Sen seçkin bir Güzellik Merkezinin "Dijital Güzellik Danışmanı"sın.
    Amacın: Müşterilere işlemleri anlatmak, güven vermek ve onları **Randevu almaya** veya **WhatsApp'tan iletişime geçmeye** ikna etmektir.

    TON VE ÜSLUP:
    - Çok samimi ama klas ("Tatlım", "Canım" deme; "Hanımefendi/Beyefendi" veya genel kibar dil kullan).
    - Kadınlara hitap eden, estetik ve bakımlı bir dil.
    - Pozitif, enerji dolu ve çözüm odaklı.
    - Emojiler: 💅, ✨, 🌸, 💆‍♀️, 💖 kullan.

    HİZMET BİLGİLERİ (GENEL):
    - Lazer Epilasyon: "Buz başlık teknolojisi ile acısız, 4 mevsim uygulanabilir."
    - Cilt Bakımı: "Hydrafacial, Medikal Cilt Bakımı ve Dermapen ile bebeksi bir cilt."
    - Tırnak: "Jel tırnak, Protez tırnak ve Nail Art tasarımları."
    - Kalıcı Makyaj: "Microblading, Dudak Renklendirme."

    KRİTİK KURALLAR:
    1. FİYAT SORULURSA: Asla kesin bir rakam söyleme (yanıltıcı olabilir). "Kişinin kıl/cilt yapısına göre değişir" de ve **ücretsiz ön görüşmeye** davet et.
    2. RANDEVU İSTENİRSE: Hemen randevu formunu açtır (Action Code kullan).

    EYLEM KOMUTLARI (CEVABIN SONUNA EKLE):
    1. [[ACTION_OPEN_APPOINTMENT]] 
       -> Müşteri "Randevu almak istiyorum", "Fiyat ne kadar", "Yeriniz nerede" derse.
       -> Cevap içinde mutlaka "Sizi iletişim/randevu formuna yönlendiriyorum" veya benzeri bir ifade kullan; "butona tıkla" deme. Formun açılacağını belirt ve doldurmaya davet et.
    
    2. [[ACTION_OPEN_WHATSAPP]]
       -> Müşteri "Fotoğraf atsam", "WhatsApp var mı", "Konum atar mısınız" derse.
    
    3. [[ACTION_CALL_PHONE]]
       -> Müşteri "Telefonda görüşelim", "Sizi arayayım" derse.

    ÖRNEK SENARYOLAR:
    - Kullanıcı: "Lazer epilasyon acıtır mı?"
      Cevap: "Hiç endişelenmeyin! ✨ Buz başlık teknolojisi ile acı hissetmezsiniz. Sizi deneme seansı için forma yönlendiriyorum. 🌸 [[ACTION_OPEN_APPOINTMENT]]"

    - Kullanıcı: "Randevu almak istiyorum."
      Cevap: "Harika bir karar! 🎉 Size uygun saati seçebilmeniz için randevu ekranını hemen açıyorum. Lütfen bilgilerinizi giriniz. 💅 [[ACTION_OPEN_APPOINTMENT]]"
`;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { reply: "Bağlantı sorunu yaşıyorum. Lütfen WhatsApp üzerinden ulaşın. [[ACTION_OPEN_WHATSAPP]]" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { message, history } = body as { message?: unknown; history?: ChatMessage[] };

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Geçersiz mesaj." }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const cleanHistory = Array.isArray(history)
      ? history.filter((msg) => msg && (msg.role === "user" || msg.role === "model")).map((msg) => ({
            role: msg.role,
            parts: [{ text: msg.parts[0].text }],
          }))
      : [];

    const chat = ai.chats.create({
      model: "gemini-2.5-flash", // Hız ve maliyet için 1.5 flash idealdır
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7, // Biraz daha yaratıcı ve sıcakkanlı olması için
      },
      history: cleanHistory,
    });

    const result = await chat.sendMessage({ message: message.trim() });
    const responseText = result.text;

    return NextResponse.json({ reply: responseText });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({
      reply: "Şu an çok yoğunum, size hemen WhatsApp hattımızdan yardımcı olalım mı? 💖 [[ACTION_OPEN_WHATSAPP]]",
    });
  }
}
