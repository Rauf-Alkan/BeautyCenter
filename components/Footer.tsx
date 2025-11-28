import Link from "next/link";
import { Instagram, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 text-gray-400 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* 1. Kolon: Marka & Hakkında */}
          <div>
            <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-white block mb-6">
              RAUF <span className="text-gold-400">ALKAN</span>
            </Link>
            <p className="leading-relaxed mb-6">
              Ankara'nın en prestijli güzellik merkezinde, uzman kadromuz ve son teknoloji cihazlarımızla kendinizi yeniden keşfedin.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-colors">
                <Instagram size={20} />
              </Link>
              {/* Diğer sosyal medya ikonları buraya eklenebilir */}
            </div>
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

        {/* Alt Çizgi & Telif & Yasal Linkler */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2025 Rauf Alkan Güzellik. Tüm hakları saklıdır.</p>
          
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
    </footer>
  );
}
