// Dosya: lib/gallery-data.ts

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "lazer" | "cilt" | "zayiflama" | "klinik" | "kalici";
  label: string; // Resmin üzerindeki kısa etiket
};

export const galleryItems: GalleryItem[] = [
  // CİLT BAKIMI
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    alt: "Hydrafacial Uygulaması",
    category: "cilt",
    label: "Hydrafacial Glow"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop",
    alt: "Cilt Analizi",
    category: "cilt",
    label: "Detaylı Analiz"
  },
  
  // KLİNİK
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    alt: "Bekleme Salonu",
    category: "klinik",
    label: "VIP Lounge"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    alt: "Koridor",
    category: "klinik",
    label: "Hijyenik Ortam"
  },

  // ZAYIFLAMA
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
    alt: "G5 Masajı",
    category: "zayiflama",
    label: "Bölgesel İncelme"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    alt: "Lenf Drenaj",
    category: "zayiflama",
    label: "Sıkılaşma"
  },

  // LAZER
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop",
    alt: "Buz Lazer Epilasyon",
    category: "lazer",
    label: "Buz Başlık"
  },
  
  // KALICI MAKYAJ
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    alt: "Microblading",
    category: "kalici",
    label: "Kaş Tasarım"
  },
   {
    id: 9,
    src: "https://images.unsplash.com/photo-1487412947132-26c25fc496a7?q=80&w=800&auto=format&fit=crop",
    alt: "Kalıcı Oje",
    category: "kalici",
    label: "Nail Art"
  }
];