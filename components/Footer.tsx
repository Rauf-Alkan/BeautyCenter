'use client';

import Link from "next/link";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useName } from "@/context/NameContext";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M44.8 20.9c3 2.2 6.5 3.6 10.2 3.9v8.2c-3.9-.1-7.6-1.3-10.9-3.3v12.9c0 8-6.5 14.4-14.4 14.4-3 0-5.8-.9-8.1-2.4-3.7-2.4-6.2-6.6-6.2-11.4 0-7.4 6-13.4 13.4-13.4.8 0 1.7.1 2.5.2v8.7c-.7-.4-1.5-.6-2.4-.6-2.5 0-4.5 2.1-4.5 4.6s2 4.6 4.5 4.6c2.5 0 4.5-2.1 4.5-4.6V7h8.3c.2 4 2.4 7.5 5.6 9.5z" />
    </svg>
  );
}

export default function Footer() {
  const { name } = useName();
  const nameParts = name.trim().split(" ");
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : name;

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-gray-400 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Kolon: Marka & Hakkında */}
          <div>
            <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-white block mb-6">
              {firstName.toUpperCase()}{" "}
              {lastName ? <span className="text-gold-400">{lastName.toUpperCase()}</span> : null}
            </Link>
            <p className="leading-relaxed mb-6">
              Ankara'nın en prestijli güzellik merkezinde, uzman kadromuz ve son teknoloji cihazlarımızla kendinizi yeniden keşfedin.
            </p>
          </div>

          {/* 2. Kolon: Hızlı Linkler */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Hızlı Erişim</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="hover:text-gold-400 transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="#gallery" className="hover:text-gold-400 transition-colors">Öncesi & Sonrası</Link></li>
              <li><Link href="#about" className="hover:text-gold-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="#contact" className="hover:text-gold-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. Kolon: İletişim */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold-400 shrink-0" size={20} />
                <span>Örnek Mah. Anadolu Cad. No:12 Kat:3 Çankaya, Ankara</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold-400 shrink-0" size={20} />
                <a href="tel:+905550000000" className="hover:text-white transition-colors">+90 (555) 000 00 00</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold-400 shrink-0" size={20} />
                <a href="mailto:info@example.com" className="hover:text-white transition-colors">info@example.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-gold-400 shrink-0" size={20} />
                <span>Her gün: 09.00 - 19.00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 mt-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h4 className="text-white font-serif font-bold text-lg">Bizi Takip Edin</h4>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-[#E5C469] hover:bg-white/5 hover:text-[#E5C469]"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://wa.me/905550000000"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-[#E5C469] hover:bg-white/5 hover:text-[#E5C469]"
              >
                <MessageCircle size={18} />
              </Link>
              <Link
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-[#E5C469] hover:bg-white/5 hover:text-[#E5C469]"
              >
                <TikTokIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; 2025 {name} Güzellik. Tüm hakları saklıdır.</p>
            
            <div className="flex gap-6">
              <Link href="/yasal/aydinlatma-metni" className="hover:text-gold-400 transition-colors">
                KVKK Aydınlatma Metni
              </Link>
              <Link href="/yasal/cerez-politikasi" className="hover:text-gold-400 transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
