"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* ARKA PLAN (Görsel veya Video) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-900 z-10" />
        {/* Optimize edilmiş arka plan görseli */}
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
          alt="Güzellik Merkezi Arka Plan"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* İÇERİK */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold-400 tracking-[0.2em] text-sm md:text-base uppercase font-bold mb-4 block"
        >
          Ankara'nın En Prestijli Estetik Merkezi
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight"
        >
          Doğal Güzelliğinizi <br />
          <span className="italic text-gold-400">Ortaya Çıkarın</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto"
        >
          En son teknoloji cihazlar ve uzman kadromuzla, hayalinizdeki görünüme kavuşmanız için yanınızdayız.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#contact"
            className="w-full md:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-gold-500/20 text-center"
          >
            Randevu Oluştur
          </Link>
          <Link
            href="#services"
            className="w-full md:w-auto px-8 py-4 border border-white/30 hover:border-white text-white rounded-full transition-all hover:bg-white/5 backdrop-blur-sm text-center"
          >
            Hizmetleri İncele
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
