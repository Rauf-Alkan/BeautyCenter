// Dosya: components/Services.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services"; // Veriyi buradan çekiyoruz
import { Sparkles, Zap, Flower2, Gem, Palette, Activity, ArrowRight } from "lucide-react";

// Slug'a göre ikon eşleştirmesi
const iconMap: Record<string, any> = {
  "lazer-epilasyon": Zap,
  "cilt-bakimi": Sparkles,
  "bolgesel-incelme": Activity,
  "kalici-makyaj": Palette,
  "protez-tirnak": Gem,
  "anti-aging": Flower2,
  // Eğer slug eşleşmezse varsayılan ikon
  "default": Sparkles
};

export default function Services() {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-16 bg-neutral-950 relative border-t border-white/5" id="services">
      {/* Arka plan süslemesi */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Başlık */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-400 tracking-widest uppercase text-sm font-bold"
          >
            Özel Hizmetlerimiz
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif mt-3 text-white"
          >
            Kendinizi <span className="text-gold-400 italic">Şımartın</span>
          </motion.h2>
        </div>

        {/* Kartlar Grid Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // İkonu slug'a göre bul
            const IconComponent = iconMap[service.slug] || iconMap["default"];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/hizmetler/${service.slug}`} className="group block h-full">
                  <div className="relative h-full bg-dark-900 hover:bg-dark-800 border border-white/10 hover:border-white/20 rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[0_0_35px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-[1.02] flex flex-col">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 brightness-105 contrast-105 saturate-[1.1]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur text-white text-xs border border-white/10">
                        <IconComponent className="w-4 h-4 text-gold-400" />
                        <span className="font-medium">Premium</span>
                      </div>
                    </div>

                    {/* Metin */}
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#E5C469] mt-2 mb-3 rounded-full" />
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 flex-grow">
                      {service.description}
                    </p>

                    {/* İncele Butonu (Görsel Efekt) */}
                    <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-[#E5C469] text-black font-medium shadow-lg hover:bg-[#D8B45A] transition-all">
                      İncele <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
