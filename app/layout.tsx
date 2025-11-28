import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";          // <--- Eklendi
import Footer from "@/components/Footer";          // <--- Eklendi
import WhatsAppButton from "@/components/WhatsAppButton"; // <--- Eklendi
import GoogleBadge from "@/components/GoogleBadge";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elif Kaya Güzellik | Ankara Estetik ve Lazer",
  description: "Ankara'nın en prestijli güzellik merkezi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${lato.variable} antialiased bg-dark-900 text-white font-sans selection:bg-gold-500 selection:text-black`}>
        <Navbar />        {/* Her sayfada sabit */}
        {children}        {/* Sayfa içeriği buraya gelecek */}
        <Footer />        {/* Her sayfada sabit */}
        <GoogleBadge />
        <WhatsAppButton />{/* Her sayfada sabit */}
      </body>
    </html>
  );
}
