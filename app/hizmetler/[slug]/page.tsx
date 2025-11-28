import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import SimpleContact from "@/components/SimpleContact"; // İletişim bileşenin nerede kayıtlıysa oradan çek (örn: app/_components/Contact)
import {
  Clock,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  CalendarCheck,
} from "lucide-react";

// Next.js 15 için params tipi (Promise)
type Props = {
  params: Promise<{ slug: string }>;
};

// 1. SEO METADATA (Otomatik Başlık ve Açıklama)
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Hizmet Bulunamadı" };

  return {
    title: `${service.title} Ankara | Elif Kaya Güzellik`,
    description: service.description,
  };
}

// 2. STATİK SAYFA ÜRETİMİ (Performans İçin)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// 3. SAYFA BİLEŞENİ
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  // Eğer geçersiz bir link ise 404 sayfasına at
  if (!service) {
    notFound();
  }

  return (
    <main className="bg-neutral-950 min-h-screen text-white">
      {/* --- HERO BÖLÜMÜ (Kapak Resmi) --- */}
      <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gold-400 mb-6 hover:text-white transition-colors font-medium"
            >
              <ArrowLeft size={20} /> Ana Sayfaya Dön
            </Link>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* --- İÇERİK & ÖZELLİKLER --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* SOL: Açıklama ve Özellikler */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-white mb-6">
                Hizmet <span className="text-gold-400">Detayları</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>

            {/* Özellikler Listesi */}
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-gold-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Teknoloji / Cihaz Bilgisi */}
            <div className="bg-neutral-900 rounded-3xl p-8 border border-white/5 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                    Kullandığımız Teknoloji
                  </span>
                  <h3 className="text-2xl font-serif text-white mb-4">
                    {service.device.name}
                  </h3>
                  <p className="text-gray-400">{service.device.desc}</p>
                </div>
                <div className="md:w-1/2 relative h-48 w-full rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={service.device.image}
                    alt={service.device.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: Hızlı Bilgi & Randevu CTA */}
          <div className="space-y-6">
            <div className="bg-neutral-900 rounded-2xl p-6 border border-white/5 space-y-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-4">Hızlı Bakış</h3>

              <div className="flex items-center gap-4 text-gray-300">
                <Clock className="text-gold-400 w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Ortalama Süre</p>
                  <p className="font-medium">45 - 60 Dakika</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <ShieldCheck className="text-gold-400 w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Güvenlik</p>
                  <p className="font-medium">FDA Onaylı & Steril</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <Sparkles className="text-gold-400 w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Sonuç</p>
                  <p className="font-medium">İlk Seansta Etki</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl transition-all"
                >
                  <CalendarCheck size={20} />
                  Randevu Oluştur
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SÜREÇ (ADIM ADIM) --- */}
      <section className="py-20 bg-neutral-900 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Uygulama <span className="text-gold-400 italic">Süreci</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Çizgi Efekti (Sadece Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

            {service.process.map((step, i) => (
              <div key={i} className="text-center relative pt-8 md:pt-0 group">
                <div className="w-16 h-16 mx-auto bg-neutral-950 border-2 border-gold-500/50 group-hover:border-gold-500 rounded-full flex items-center justify-center text-gold-400 font-bold text-xl mb-6 relative z-10 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                  {i + 1}
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{step.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SIKÇA SORULAN SORULAR --- */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white">
              Sıkça Sorulan <span className="text-gold-400">Sorular</span>
            </h2>
            <p className="text-gray-500 mt-3">
              Merak edilenleri kısaca yanıtladık, aklınıza takılan başka bir şey olursa bize ulaşın.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {service.faq.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-gold-500/30 transition-colors"
              >
                <h5 className="text-white font-bold mb-2 flex items-start gap-3">
                  <span className="text-gold-400">Q.</span> {item.q}
                </h5>
                <p className="text-gray-400 text-sm pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM FORMU (Sayfanın Altında) --- */}
      <div id="contact">
        <SimpleContact />
      </div>
    </main>
  );
}
