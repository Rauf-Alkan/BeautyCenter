import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"], // Hata ayıklama için query'leri loglar (opsiyonel)
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
