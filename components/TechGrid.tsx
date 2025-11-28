"use client";

import { Zap, Activity, Droplets, Shield } from "lucide-react";

const technologies = [
  {
    name: "Soprano Ice Platinum",
    category: "Lazer Epilasyon",
    desc: "3 Dalga boylu dünyanın en iyi lazer teknolojisi.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    name: "Hydrafacial MD",
    category: "Cilt Yenileme",
    desc: "Vortex teknolojisi ile derinlemesine temizlik.",
    icon: <Droplets className="w-8 h-8" />,
  },
  {
    name: "G5 & Lenf Drenaj",
    category: "Bölgesel İncelme",
    desc: "Selülit tedavisinde kanıtlanmış mekanik güç.",
    icon: <Activity className="w-8 h-8" />,
  },
  {
    name: "Dermapen 4",
    category: "Anti-Aging",
    desc: "Mikro iğneleme ile kolajen üretimini tetikler.",
    icon: <Shield className="w-8 h-8" />,
  },
];

export default function TechGrid() {
  return (
    <section className="py-20 bg-black border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">Teknolojik Güç</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mt-2">
                    Dünya Markalarıyla <br/> Çalışıyoruz
                </h2>
            </div>
            <p className="text-gray-500 max-w-sm mt-4 md:mt-0 text-sm">
                Kliniğimizde sadece FDA onaylı, orijinal ve kanıtlanmış medikal cihazlar kullanılmaktadır.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="bg-dark-900 p-6 rounded-2xl border border-white/5 hover:border-gold-500/50 transition-all group">
              <div className="w-14 h-14 bg-dark-800 rounded-full flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                {tech.icon}
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase">{tech.category}</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
