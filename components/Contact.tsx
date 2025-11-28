"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/app/actions";
import { Loader2, CheckCircle, AlertCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    formData.append("source", "Ana İletişim Formu");
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="relative min-h-screen bg-neutral-950 py-24 lg:py-32" id="contact">
      {/* Arka Plan Efektleri */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#384B70]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* SOL TARAF: İletişim Bilgileri & Metin */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Güzelliğinize <br />
                <span className="text-gold-400">Değer Katın</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Uzman kadromuzla tanışmak, detaylı bilgi almak veya ücretsiz ön görüşme planlamak için formu doldurun veya bize ulaşın.
              </p>
            </div>

            {/* İletişim Kartları */}
            <div className="space-y-8">
              {/* Adres */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:border-gold-500/50 transition-colors">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Klinik Adresi</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Çankaya Mahallesi, Atatürk Bulvarı No:123 <br />
                    Ankara, Türkiye
                  </p>
                </div>
              </div>

              {/* Telefon & Email */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:border-gold-500/50 transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">İletişim</h4>
                  <p className="text-gray-400">+90 (555) 123 45 67</p>
                  <p className="text-gray-400">info@raufalkan.com</p>
                </div>
              </div>

              {/* Çalışma Saatleri */}
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:border-gold-500/50 transition-colors">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-400">Pzt - Cmt: 09:00 - 19:00</p>
                  <p className="text-gray-500 text-sm">Pazar günleri kapalıyız.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Büyük Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 lg:p-14 shadow-2xl">
            
            <div className="mb-10">
              <h3 className="text-2xl font-serif text-white mb-2">Randevu Formu</h3>
              <p className="text-gray-400">Formu doldurun, sizi 15 dakika içinde arayalım.</p>
            </div>

            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-500/10 border border-green-500/20 rounded-2xl p-10 text-center py-20"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Talebiniz Alındı!</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Uzmanlarımız bilgilerinizi inceliyor. En kısa sürede belirttiğiniz numaradan dönüş yapacağız.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-gold-400 hover:text-gold-300 underline underline-offset-4"
                >
                  Yeni bir form gönder
                </button>
              </motion.div>
            ) : (
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Adınız</label>
                    <input 
                      name="name"
                      required
                      type="text" 
                      className="w-full h-14 bg-black/20 border border-white/10 rounded-xl px-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all"
                      placeholder="Adınız"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Soyadınız</label>
                    <input 
                      name="surname"
                      required
                      type="text" 
                      className="w-full h-14 bg-black/20 border border-white/10 rounded-xl px-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Telefon Numaranız</label>
                  <input 
                    name="phone"
                    required
                    type="tel" 
                    className="w-full h-14 bg-black/20 border border-white/10 rounded-xl px-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    placeholder="05XX XXX XX XX"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">İlgilendiğiniz İşlem</label>
                  <div className="relative">
                    <select 
                      name="service"
                      className="w-full h-14 bg-black/20 border border-white/10 rounded-xl px-5 text-white appearance-none focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all"
                    >
                      <option className="bg-neutral-900" value="Seçim Yapılmadı">Lütfen Seçiniz</option>
                      <option className="bg-neutral-900" value="Buz Lazer">Buz Lazer Epilasyon</option>
                      <option className="bg-neutral-900" value="Hydrafacial">Hydrafacial Cilt Bakımı</option>
                      <option className="bg-neutral-900" value="Dermapen">Dermapen Tedavisi</option>
                      <option className="bg-neutral-900" value="Genel Bilgi">Genel Bilgi Almak İstiyorum</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Mesajınız (Opsiyonel)</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all resize-none"
                    placeholder="Sormak istediğiniz özel bir durum veya notunuz varsa buraya yazabilirsiniz..."
                  />
                </div>

                <button 
                  disabled={status === "loading"}
                  className="w-full h-16 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black text-lg font-bold rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" /> Gönderiliyor...
                    </>
                  ) : (
                    "Randevu Oluştur"
                  )}
                </button>
                
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3">
                    <AlertCircle size={20} /> 
                    <span>Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
