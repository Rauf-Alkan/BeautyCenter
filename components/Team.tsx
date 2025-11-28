"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Uzm. Elif Kaya",
    role: "Kurucu & Estetisyen",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Dr. Aylin Yılmaz",
    role: "Medikal Estetik Hekimi",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Selin Demir",
    role: "Cilt Bakım Uzmanı",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Berna Kaya",
    role: "Kalıcı Makyaj Uzmanı",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">Profesyonel Ekibimiz</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mt-3">
            Güzelliğiniz <span className="italic text-gold-400">Emin Ellerde</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-4">
                {/* Resim */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gold-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="#" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>

              {/* İsim & Unvan */}
              <div className="text-center">
                <h3 className="text-xl font-serif text-white font-bold">{member.name}</h3>
                <p className="text-gold-400 text-sm mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
