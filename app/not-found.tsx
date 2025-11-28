import Link from "next/link";
import { MoveLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* Arka Plan Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />

      {/* Dev 404 Yazısı */}
      <h1 className="text-[120px] md:text-[180px] font-serif font-bold text-white/5 leading-none select-none">
        404
      </h1>

      <div className="relative z-10 -mt-16 md:-mt-24">
        <div className="inline-flex items-center justify-center p-4 bg-dark-800 rounded-full mb-6 border border-gold-500/20 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
          <Sparkles className="text-gold-500 w-8 h-8" />
        </div>

        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
          Olamaz! Sayfa Bulunamadı
        </h2>
        
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-8 leading-relaxed">
          Aradığınız sayfa şu anda <span className="text-gold-400 italic">güzellik uykusuna</span> yatmış olabilir. Lütfen ana sayfaya dönüp tekrar deneyin.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
        >
          <MoveLeft size={20} />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
