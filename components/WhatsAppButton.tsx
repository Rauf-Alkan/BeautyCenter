"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905518234130?text=Merhaba,%20randevu%20hakkında%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-end"
      aria-label="WhatsApp ile İletişime Geç"
    >
      {/* Tooltip (Yazı Balonu) */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg text-sm font-bold whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block border border-slate-100">
        Hızlı Randevu
      </span>

      {/* Buton Kapsayıcı */}
      <div className="relative flex items-center justify-center">
        
        {/* Arkadaki Yavaş Nefes Alan Halka (Sakin Efekt) */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-pulse scale-110 group-hover:scale-125 transition-transform duration-500"></div>

        {/* Butonun Kendisi */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)]">
          <MessageCircle size={32} fill="white" className="relative z-10" />
        </div>
      </div>
    </a>
  );
}