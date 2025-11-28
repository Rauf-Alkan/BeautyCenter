import { prisma } from "@/lib/db";

// Basit Türkçe karakter uyumlu slugify fonksiyonu
function simpleSlugify(text: string): string {
  const trMap: { [key: string]: string } = {
    ç: "c",
    ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    ş: "s",
    ü: "u",
    Ç: "c",
    Ğ: "g",
    I: "i",
    Ö: "o",
    Ş: "s",
    Ü: "u",
  };

  return text
    .split("")
    .map((char) => trMap[char] || char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Alfanümerik olmayanları sil
    .trim()
    .replace(/\s+/g, "-") // Boşlukları tire yap
    .replace(/-+/g, "-"); // Tekrarlayan tireleri sil
}

export async function generateUniqueSlug(title: string, currentId?: number) {
  let slug = simpleSlugify(title);
  let counter = 0;

  while (true) {
    const checkSlug = counter === 0 ? slug : `${slug}-${counter}`;

    const existing = await prisma.blogPost.findUnique({
      where: { slug: checkSlug },
    });

    if (!existing || (currentId && existing.id === currentId)) {
      return checkSlug;
    }

    counter++;
  }
}
