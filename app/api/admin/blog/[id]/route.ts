import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { prisma } from "@/lib/db";
import { blogPayloadSchema } from "@/lib/validators/blog";
import { generateUniqueSlug } from "@/lib/services/blog";
import { authOptions } from "@/lib/auth";

type Context = { params: Promise<{ id: string }> };

export async function PUT(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });

  const { id } = await context.params;
  const blogId = Number(id);

  if (isNaN(blogId)) return NextResponse.json({ message: "Geçersiz ID" }, { status: 400 });

  try {
    const json = await request.json();
    const parsed = blogPayloadSchema.safeParse(json);

    if (!parsed.success) return NextResponse.json({ message: "Hatalı veri" }, { status: 400 });

    const data = parsed.data;
    const slug = await generateUniqueSlug(data.title, blogId);

    const updated = await prisma.blogPost.update({
      where: { id: blogId },
      data: { ...data, slug },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ message: "Güncelleme hatası" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ message: "Yetkisiz" }, { status: 401 });

  const { id } = await context.params;
  const blogId = Number(id);

  try {
    await prisma.blogPost.delete({ where: { id: blogId } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Silme hatası" }, { status: 500 });
  }
}
