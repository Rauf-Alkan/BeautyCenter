"use client";

import { motion } from "framer-motion";
import { Search, FileText, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  { icon: <Search />, title: "Ücretsiz Analiz", desc: "Uzmanlarımız cildinizi detaylıca inceler." },
  { icon: <FileText />, title: "Kişisel Planlama", desc: "Size özel tedavi haritası çıkarılır." },
  { icon: <Sparkles />, title: "Uygulama", desc: "Son teknoloji cihazlarla işlem yapılır." },
  { icon: <CheckCircle />, title: "Kontrol & Sonuç", desc: "İşlem sonrası memnuniyet takibi yapılır." },
];

export default function Process() {
  return (
    <section className="py-24 bg-dark-900 border-t border-white/5 relative overflow-hidden">
      {/* Arka Plan Efekti */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">Nasıl Çalışıyoruz?</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-3">4 Adımda <span className="text-gold-400 italic">Mükemmellik</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Adımları Birleştiren Çizgi (Sadece Masaüstü) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              {/* İkon Kutusu */}
              <div className="w-24 h-24 mx-auto bg-dark-800 border border-white/10 group-hover:border-gold-500 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] rounded-full flex items-center justify-center text-gold-400 mb-6 transition-all duration-300 relative z-10">
                <div className="w-8 h-8 md:w-10 md:h-10">{step.icon}</div>
              </div>
              
              <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-400 transition-colors">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
