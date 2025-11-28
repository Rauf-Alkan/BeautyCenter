"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions";
import { motion } from "framer-motion";
import { Loader2, ArrowRight, Phone } from "lucide-react";

export default function SimpleContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    formData.append("source", "Alt Şerit Hızlı Form");
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("success");
      const form = document.getElementById("footer-simple-form") as HTMLFormElement;
      form?.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    // Üst ve alta ince altın rengi çizgi (border-y) ve koyu zemin
    <section className="relative py-12 bg-neutral-900 border-y border-gold-500/20" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* SOL: Başlık ve Açıklama */}
          <div className="text-center lg:text-left lg:w-1/3">
            <h3 className="text-2xl font-serif text-white mb-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400">
                <Phone size={20} />
              </div>
              Sizi Arayalım
            </h3>
            <p className="text-gray-400 text-sm">
              Numaranızı bırakın, uzmanlarımız 15 dk içinde size dönüş yapsın.
            </p>
          </div>

          {/* SAĞ: Yatay Form */}
          <div className="w-full lg:w-2/3">
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓ Numaranız İletildi.</span>
                  <span className="text-green-200/60 text-sm">En kısa sürede arayacağız.</span>
                </div>
                <button onClick={() => setStatus("idle")} className="text-xs text-white underline">Yeni</button>
              </motion.div>
            ) : (
              <form 
                id="footer-simple-form"
                action={handleSubmit} 
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="relative flex-1">
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500/50 focus:bg-black/50 transition-all"
                  />
                </div>
                
                <div className="relative flex-1">
                  <input
                    name="phone"
                    required
                    type="tel"
                    placeholder="Telefon (05XX...)"
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-gold-500/50 focus:bg-black/50 transition-all"
                  />
                </div>

                <button
                  disabled={status === "loading"}
                  className="bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-3 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-gold-500/10"
                >
                  {status === "loading" ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <>
                      Gönder <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}