import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Lazer Epilasyon & Cilt Bakımı",
  description:
    "Son teknoloji Lazer Epilasyon, Hydrafacial Cilt Bakımı, Bölgesel İncelme ve Kalıcı Makyaj hizmetlerimizi keşfedin.",
};

export default function ServicesPage() {
  return (
    <main className="bg-dark-900 min-h-screen pb-20">
      <PageHeader title="Hizmetlerimiz" subtitle="Size Özel Çözümler" />
      
      <div className="container mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111111] shadow-[0_0_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.02] hover:border-white/15"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl mb-4">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>

              <div className="p-8 flex flex-1 flex-col">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300 line-clamp-3">
                  {service.description}
                </p>

                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group inline-flex mt-6 w-full items-center justify-center gap-2 rounded-full bg-[#E5C469] px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-[1px] hover:bg-[#d8b45a] hover:shadow-lg"
                >
                  {service.title} Detayları
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
