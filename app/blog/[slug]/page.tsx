import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import { prisma } from "@/lib/db";
import ViewTracker from "../_components/ViewTracker";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug: decodeURIComponent(slug) } });
  if (!post) return { title: "Sayfa Bulunamadı" };

  return {
    title: `${post.title} | Elif Kaya Blog`,
    description: post.summary,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: decodeURIComponent(slug) },
  });

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-gradient-to-b from-dark-900 via-[#0d0d0f] to-dark-800 pb-24 pt-28 text-white">
      <ViewTracker slug={post.slug} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold-500/60 bg-black/60 px-4 py-2 text-sm font-medium text-gold-400 shadow-sm transition hover:-translate-y-[1px] hover:shadow-lg hover:shadow-gold-500/20"
        >
          <span>←</span> Bloga Dön
        </Link>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f1014] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/5 sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight text-gold-400 sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
              <time>
                {new Date(post.publishedAt).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>{post.readTime} dk okuma</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>{post.views} görüntülenme</span>
            </div>
          </div>

          {post.coverImage && (
            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, 100vw"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg prose-invert markdown-content mt-12 max-w-none text-slate-200">
            <style>{`
                .markdown-content h1, .markdown-content h2, .markdown-content h3 { color: #c5a028; font-weight: 700; }
                .markdown-content p { margin-bottom: 1.5em; line-height: 1.8; }
                .markdown-content ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.5em; }
                .markdown-content strong { color: #c5a028; }
                .markdown-content blockquote { border-left: 4px solid #c5a028; padding-left: 1em; font-style: italic; color: #e5e7eb; background: rgba(197,160,40,0.05); padding: 1em; border-radius: 0 8px 8px 0; }
            `}</style>
            <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}
