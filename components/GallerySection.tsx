"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X } from "lucide-react";

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
  label: string;
};

type GallerySectionProps = {
  items: GalleryItem[];
};

// KATEGORİ LİSTESİ
const categories = [
  { id: "all", label: "Tümü" },
  { id: "lazer", label: "Lazer Epilasyon" },
  { id: "cilt", label: "Cilt Bakımı" },
  { id: "zayiflama", label: "Zayıflama" },
  { id: "kalici", label: "Kalıcı Makyaj" },
  { id: "klinik", label: "Klinik Atmosferi" },
];

export default function GallerySection({ items }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const safeItems = items || [];
  const filteredItems =
    activeFilter === "all"
      ? safeItems
      : safeItems.filter((item) => item.category === activeFilter);

  if (safeItems.length === 0) {
    return (
      <section className="py-24 bg-neutral-950 relative" id="gallery">
        <div className="container mx-auto px-6 text-center text-white/70">
          Henüz galeriye fotoğraf eklenmemiş.
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-neutral-950 relative" id="gallery">
      <div className="container mx-auto px-6">
        
        {/* Üst Başlık */}
        <div className="text-center mb-12">
          <span className="text-gold-400 tracking-widest uppercase text-sm font-bold">
            Görsel Galeri
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3 text-white">
            İlham Veren <span className="text-gold-400 italic">Kareler</span>
          </h2>
        </div>

        {/* FİLTRE BUTONLARI */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeFilter === cat.id 
                  ? "bg-gold-500 border-gold-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
                  : "bg-transparent border-white/10 text-gray-400 hover:border-gold-500/50 hover:text-white"}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* MASONRY (Pinterest Tarzı) GRID */}
        <motion.div 
          layout 
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-dark-900 border border-white/5"
                onClick={() => setSelectedImage(item)}
              >
                {/* Resim */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-gold-400 text-xs font-bold uppercase tracking-wider mb-1 block">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h4 className="text-white font-serif text-lg">{item.label}</h4>
                  </div>
                  
                  {/* Zoom İkonu */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur p-2 rounded-full text-white">
                    <ZoomIn size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* LIGHTBOX (MODAL) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md p-4 text-center">
                 <h3 className="text-white font-serif text-xl">{selectedImage.label}</h3>
                 <p className="text-gray-300 text-sm">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
