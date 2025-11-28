import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import MapSection from "@/components/MapSection";

export const metadata: Metadata = {
  title: "İletişim & Randevu | Elif Kaya Güzellik Ankara",
  description:
    "Ücretsiz ön görüşme randevusu alın. Ankara Keçiören'deki merkezimize ulaşım bilgileri ve iletişim formu.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeader title="İletişim" subtitle="Bize Ulaşın" />
      <Contact />
      <MapSection />
    </main>
  );
}
