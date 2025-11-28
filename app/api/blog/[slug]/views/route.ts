import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

type Context = { params: Promise<{ slug: string }> };

export async function POST(_: NextRequest, context: Context) {
  try {
    const { slug } = await context.params;
    const decodedSlug = decodeURIComponent(slug);

    await prisma.blogPost.update({
      where: { slug: decodedSlug },
      data: { views: { increment: 1 } },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: "Hata" }, { status: 500 });
  }
}
