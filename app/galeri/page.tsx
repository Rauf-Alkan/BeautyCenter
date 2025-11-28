import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BeforeAfter from "@/components/BeforeAfter";
import GallerySection from "@/components/GallerySection";
import SimpleContact from "@/components/SimpleContact";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Galeri & Gerçek Sonuçlar | Elif Kaya Güzellik",
  description:
    "Danışanlarımızın HydraFacial, Lazer Epilasyon ve Anti-Aging uygulamaları sonrası gerçek değişim hikayelerini ve klinik atmosferimizi inceleyin.",
};

export const dynamic = "force-dynamic";

// ÖNCESİ / SONRASI VERİLERİ
const beforeAfterData = [
  {
    id: "degisim",
    subtitle: "Cilt Yenileme",
    title: "Gerçek Öncesi / Sonrası",
    beforeImage: "/before.webp",
    afterImage: "/after.webp",
  },
];

export default async function GalleryPage() {
  const galleryItems = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="bg-dark-900 min-h-screen">
      <PageHeader title="Değişim Hikayeleri" subtitle="Gerçek Danışanlar, Gerçek Sonuçlar" />

      <div className="divide-y divide-white/5 bg-neutral-950">
        {beforeAfterData.map((item, index) => (
          <BeforeAfter
            key={index}
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            beforeImage={item.beforeImage}
            afterImage={item.afterImage}
          />
        ))}
      </div>

      <div className="border-t border-white/10">
        <GallerySection items={galleryItems} />
      </div>

      <section className="py-20 text-center container mx-auto px-6 bg-dark-900">
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">
          Siz de kendi değişim hikayenizi yazmak ister misiniz?
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Uzmanlarımızla yapacağınız ücretsiz ön görüşme ile cildinizin ihtiyaçlarını belirleyin ve
          değişime bugün başlayın.
        </p>
      </section>

      <div id="contact">
        <SimpleContact />
      </div>
    </main>
  );
}
