"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Yıllık Tecrübe", value: "12+", icon: <Clock /> },
  { label: "Mutlu Danışan", value: "15k+", icon: <Users /> },
  { label: "Sertifikalı Uzman", value: "8", icon: <Award /> },
  { label: "Müşteri Memnuniyeti", value: "%99", icon: <Star /> },
];

export default function About() {
  const PRIMARY_IMAGE =
    "https://images.unsplash.com/photo-1582719478171-2f2df54b40b8?auto=format&fit=crop&w=1600&q=80";
  const FALLBACK_IMAGE =
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80";
  const [imageSrc, setImageSrc] = useState(PRIMARY_IMAGE);

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden" id="about">
      {/* Dekoratif Arka Plan */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-gold-500 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Taraf: Görsel Kompozisyon */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src={imageSrc}
                alt="Elif Kaya Güzellik Merkezi salonu" 
                width={1200}
                height={800}
                onError={() => setImageSrc(FALLBACK_IMAGE)}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Arkadaki Çerçeve Efekti */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-500/30 rounded-2xl -z-0 hidden md:block" />
          </motion.div>

          {/* Sağ Taraf: İçerik */}
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold-400 font-bold tracking-widest uppercase text-sm"
            >
              Hikayemiz
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6"
            >
              Güzelliğinizi <span className="text-gold-400 italic">Sanata</span> Dönüştürüyoruz
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 leading-relaxed mb-8 text-lg"
            >
              2012 yılından beri Ankara'nın kalbinde, dünya standartlarında estetik ve güzellik hizmeti sunuyoruz. Amacımız sadece dış görünüşünüzü değiştirmek değil, kendinizi en iyi versiyonunuzda hissetmenizi sağlamak.
            </motion.p>

            {/* İstatistikler Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-gold-500/30 transition-colors"
                >
                  <div className="text-gold-400 mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
