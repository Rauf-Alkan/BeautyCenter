"use server";

import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM_EMAIL;
const resendTo = process.env.RESEND_TO_EMAIL;

if (!resendApiKey) {
  throw new Error("RESEND_API_KEY tanımlı değil");
}

const resend = new Resend(resendApiKey);

export async function sendEmail(formData: FormData) {
  const name = (formData.get("name") as string) || "";
  const surname = (formData.get("surname") as string) || "";
  const fullName = [name, surname].filter(Boolean).join(" ").trim() || "İsim belirtilmedi";
  const phone = (formData.get("phone") as string) || "Telefon belirtilmedi";
  const source = (formData.get("source") as string) || "Kaynak belirtilmedi";
  const message = (formData.get("message") as string) || "Mesaj yok";
  const service = (formData.get("service") as string) || "Belirtilmedi";

  if (!name || !phone) {
    return { success: false, error: "Lütfen zorunlu alanları doldurun." };
  }

  if (!resendFrom || !resendTo) {
    console.error("Mail ayarları eksik: RESEND_FROM_EMAIL veya RESEND_TO_EMAIL bulunamadı");
    return { success: false, error: "Mail ayarları eksik" };
  }

  try {
    await resend.emails.send({
      from: resendFrom,
      to: resendTo,
      subject: `🔔 Yeni Talep: ${fullName}`,
      html: `
        <h2>Yeni Bir Müşteri Talebi Var!</h2>
        <p><strong>Kaynağı:</strong> ${source}</p>
        <hr />
        <p><strong>Ad Soyad:</strong> ${fullName}</p>
        <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>İlgilendiği Hizmet:</strong> ${service}</p>
        <p><strong>Mesaj/Not:</strong> ${message}</p>
        <br />
        <p><em>Bu mail web sitenizden otomatik gönderilmiştir.</em></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return { success: false };
  }
}
