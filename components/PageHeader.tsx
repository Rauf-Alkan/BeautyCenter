"use client";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-20 bg-dark-800 border-b border-white/10 overflow-hidden">
      {/* Arka Plan Dekoru */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4 block">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-6xl font-serif text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}