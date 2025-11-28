export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-900">
      {/* Dış Halka (Sabit) */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
        
        {/* Dönen Altın Halka (Animasyonlu) */}
        <div className="absolute inset-0 border-4 border-gold-500 rounded-full border-t-transparent animate-spin"></div>
        
        {/* Ortadaki Logo veya İkon (Opsiyonel) */}
        <div className="absolute inset-0 flex items-center justify-center font-serif text-gold-400 font-bold text-xl animate-pulse">
          GK
        </div>
      </div>

      {/* Yükleniyor Yazısı */}
      <p className="mt-6 text-gold-400/80 text-sm tracking-[0.3em] uppercase animate-pulse">
        Yükleniyor...
      </p>
    </div>
  );
}
