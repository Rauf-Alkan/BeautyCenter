"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronsLeftRight } from "lucide-react";
import Image from "next/image";

// Bileşenin dışarıdan alacağı verilerin tip tanımı
interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string; // Opsiyonel başlık
  subtitle?: string; // Opsiyonel alt başlık
  id?: string; // Link vermek için opsiyonel ID
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  title,
  subtitle,
  id
}: BeforeAfterProps) {
  const fallbackImage = "/uploads/507ebb02-4296-479e-92e3-e1dd994d8338.jpg";
  const [beforeSrc, setBeforeSrc] = useState(beforeImage || fallbackImage);
  const [afterSrc, setAfterSrc] = useState(afterImage || fallbackImage);
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const heading = title || "Öncesi / Sonrası";
  const kicker = subtitle || "Gerçek Sonuçlar";
  const subheading = "Gerçek danışanlarımızın gerçek sonuçları";

  // Fare veya parmak hareketini yakala (Optimize edildi)
  const handleMove = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ("touches" in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    // Slider'ın % kaçta olduğunu hesapla
    let position = ((clientX - containerRect.left) / containerRect.width) * 100;
    
    // Sınırları belirle (0 ile 100 arasında kalsın)
    position = Math.max(0, Math.min(100, position));
    
    setSliderPosition(position);
  }, []);

  return (
    <section
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-r from-black via-[#080808] to-black py-16 md:py-20"
      id={id}
    >
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gold-500/10 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-gold-500/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-gold-400 tracking-[0.2em] uppercase text-xs md:text-sm font-bold block mb-3">
            {kicker}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-3">{heading}</h2>
          <p className="text-gray-400 text-base">
            {subheading}
          </p>
        </div>

        {/* SLIDER ALANI */}
        <div className="mx-auto flex w-full justify-center">
          <div 
            className="group relative w-full max-w-5xl aspect-[16/9] sm:aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_0_45px_rgba(0,0,0,0.7)] cursor-col-resize touch-none select-none"
            ref={containerRef}
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseDown={(e) => { setIsDragging(true); handleMove(e); }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={(e) => { setIsDragging(true); handleMove(e); }}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* 1. Resim (SONRASI - Altta duran, renkli ve net) */}
            <Image
              src={afterSrc}
              alt="Uygulama Sonrası"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
              onError={() => setAfterSrc((prev) => (prev === fallbackImage ? prev : fallbackImage))}
            />
            <div className="absolute top-3 right-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs uppercase tracking-wide text-white backdrop-blur-md z-20">
              SONRASI
            </div>

            {/* 2. Resim (ÖNCESİ - Üstte duran, kesilen) */}
            <div 
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={beforeSrc}
                alt="Uygulama Öncesi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
                onError={() => setBeforeSrc((prev) => (prev === fallbackImage ? prev : fallbackImage))}
              />
              <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs uppercase tracking-wide text-white backdrop-blur-md z-20">
                ÖNCESİ
              </div>
            </div>

            {/* SÜRÜKLEME ÇUBUĞU */}
            <div
              className="absolute top-0 bottom-0 w-px bg-white/70 backdrop-blur cursor-col-resize z-30 transition-all group-hover:bg-gold-300"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Ortadaki Yuvarlak Tutamaç */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5C469] border-4 border-white/40 shadow-lg flex items-center justify-center transition-all duration-200 w-14 h-14 ${
                  isDragging ? "scale-110 drop-shadow-[0_0_10px_#E5C469]" : ""
                }`}
              >
                <ChevronsLeftRight className="text-black w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Görseller tamamen gerçek danışan uygulamalarından alınmıştır.
        </p>
      </div>
    </section>
  );
}
