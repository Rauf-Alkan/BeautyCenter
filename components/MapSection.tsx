"use client";

export default function MapSection() {
  return (
    <section className="h-[450px] w-full relative bg-dark-900 border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
      {/* Google Maps Iframe (Ankara Keçiören Koordinatlı) */}
      <iframe 
        src="https://maps.google.com/maps?q=K%C4%B1z%C4%B1lay+Meydan%C4%B1+Ankara&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="opacity-80 hover:opacity-100 transition-opacity"
      ></iframe>

      {/* Sol Alttaki Bilgi Kutusu */}
      <div className="absolute bottom-8 left-8 md:left-20 bg-dark-900/95 backdrop-blur-md p-6 border border-gold-500/20 rounded-xl shadow-2xl max-w-xs hidden md:block">
        <h4 className="text-gold-400 font-serif font-bold mb-2 text-lg">Bizi Ziyaret Edin</h4>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Örnek Mah. Anadolu Cad. No:12 Kat:3 <br/> Çankaya / ANKARA
        </p>
        <a 
          href="https://maps.google.com/maps?q=K%C4%B1z%C4%B1lay+Meydan%C4%B1+Ankara" 
          target="_blank" 
          className="inline-flex items-center text-xs font-bold text-white bg-gold-500/20 px-4 py-2 rounded hover:bg-gold-500 hover:text-black transition-all"
        >
          Yol Tarifi Al →
        </a>
      </div>
    </section>
  );
}
