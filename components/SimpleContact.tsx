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
    <section className="relative border-y border-gold-500/20 bg-neutral-900 py-14" id="contact">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-white">Sizi Arayalım</h3>
                <p className="text-sm text-gray-300">
                  Numaranızı bırakın, 15 dakika içinde dönüş yapalım.
                </p>
              </div>
            </div>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid items-center gap-4 rounded-2xl border border-green-500/25 bg-green-500/10 p-4 text-sm text-green-100 md:grid-cols-[1fr_auto]"
            >
              <div className="flex items-center gap-3">
                <span className="font-semibold">✓ Numaranız ulaştı.</span>
                <span className="text-green-100/70">En kısa sürede arayacağız.</span>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-xs font-semibold text-white underline underline-offset-4"
              >
                Yeni
              </button>
            </motion.div>
          ) : (
            <form
              id="footer-simple-form"
              action={handleSubmit}
              className="grid items-center gap-4 md:grid-cols-[1fr_1fr_1fr_auto]"
            >
              {status === "error" && (
                <div className="col-span-full rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-100">
                  Bir şeyler ters gitti. Lütfen tekrar deneyin.
                </div>
              )}

              <div className="relative w-full">
                <input
                  name="name"
                  type="text"
                  placeholder="Adınız"
                  className="w-full rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#E5C469] focus:shadow-[0_0_15px_rgba(229,196,105,0.4)]"
                />
              </div>

              <div className="relative w-full">
                <input
                  name="surname"
                  type="text"
                  placeholder="Soyadınız (opsiyonel)"
                  className="w-full rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#E5C469] focus:shadow-[0_0_15px_rgba(229,196,105,0.4)]"
                />
              </div>

              <div className="relative w-full">
                <input
                  name="phone"
                  required
                  type="tel"
                  inputMode="tel"
                  placeholder="Telefon Numaranız"
                  className="w-full rounded-full border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-[#E5C469] focus:shadow-[0_0_15px_rgba(229,196,105,0.4)]"
                />
              </div>

              <button
                disabled={status === "loading"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#E5C469] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d8b45a] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              >
                {status === "loading" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    Beni Arayın
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>

              <p className="col-span-full text-center text-xs text-gray-500 md:text-left">
                Bilgileriniz üçüncü kişilerle paylaşılmaz.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
