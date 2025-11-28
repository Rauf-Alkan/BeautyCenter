import { z } from "zod";

export const blogPayloadSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalıdır."),
  summary: z.string().min(10, "Özet en az 10 karakter olmalıdır."),
  content: z.string().min(1, "İçerik boş olamaz."),
  coverImage: z.string().optional().or(z.literal("")),
  readTime: z.number().min(1).default(2),
});

export type BlogPayload = z.infer<typeof blogPayloadSchema>;
