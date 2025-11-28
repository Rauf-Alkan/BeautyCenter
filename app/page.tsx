import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Reviews from "@/components/Reviews";
import SimpleContact from "@/components/SimpleContact";
import TechGrid from "@/components/TechGrid";
import GallerySection from "@/components/GallerySection";
import { prisma } from "@/lib/db";
import HomeBlogSection from "./_components/HomeBlogSection";

const homeBeforeAfter = {
  id: "home-before-after",
  title: "Gerçek Sonuçlar",
  subtitle: "Öncesi & Sonrası",
  beforeImage: "/before.webp",
  afterImage: "/after.webp",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const galleryItems = await prisma.galleryItem.findMany({
    orderBy: { createdAt: "desc" },
    take: 8,
  });

  return (
    <main className="bg-dark-900">
      <Hero />
      <TechGrid />
      <Services />
      <BeforeAfter
        id={homeBeforeAfter.id}
        title={homeBeforeAfter.title}
        subtitle={homeBeforeAfter.subtitle}
        beforeImage={homeBeforeAfter.beforeImage}
        afterImage={homeBeforeAfter.afterImage}
      />
      <Reviews />
      <div className="border-t border-white/5">
        <GallerySection items={galleryItems} />
      </div>
      <HomeBlogSection />
      <SimpleContact />
    </main>
  );
}
