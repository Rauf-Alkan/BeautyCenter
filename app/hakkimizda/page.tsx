import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Hygiene from "@/components/Hygiene";

export const metadata: Metadata = {
  title: "Hakkımızda | Elif Kaya Güzellik Merkezi",
  description:
    "Ankara'nın öncü güzellik merkezi Elif Kaya hakkında bilgi alın. Uzman kadromuz ve 12 yıllık tecrübemizle hizmetinizdeyiz.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader title="Hakkımızda" subtitle="Hikayemiz & Ekibimiz" />
      <About />
      <Team />
      <Hygiene />
      <Reviews />
    </main>
  );
}
