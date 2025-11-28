"use client";

import { ShieldCheck, Sparkles, Wind } from "lucide-react";

export default function Hygiene() {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-dark-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          {/* Arka Plan Süsü */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <span className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6 border border-green-500/20">
                    <ShieldCheck size={14} /> %100 Güvenli Alan
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                    Hijyen ve Sterilizasyon <br/> Protokolümüz
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Sizin sağlığınız, bizim güzelliğimizden önce gelir. Merkezimizde hastane standartlarında sterilizasyon uygulanmakta olup, tüm başlıklar kişiye özeldir.
                </p>
            </div>

            <div className="md:w-1/2 grid gap-4">
                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">
                        <Sparkles size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Kişiye Özel Başlıklar</h4>
                        <p className="text-gray-500 text-xs">Her danışan için tek kullanımlık veya sterilize edilmiş uçlar.</p>
                    </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center shrink-0">
                        <Wind size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold">Hepa Filtreli Havalandırma</h4>
                        <p className="text-gray-500 text-xs">Klinik ortamındaki hava sürekli olarak temizlenir.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
