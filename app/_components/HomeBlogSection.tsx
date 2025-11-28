import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function HomeBlogSection() {
  const recentPosts = await prisma.blogPost.findMany({
    take: 3,
    orderBy: { publishedAt: "desc" },
  });

  if (recentPosts.length === 0) return null;

  return (
    <section className="bg-neutral-950 py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-gold-400 tracking-widest uppercase text-xs font-bold">
            Blog & Güncel
          </span>
          <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl mt-3">
            Klinikten Haberler & Yazılar
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-400">
            Uzman görüşleri, tedavi trendleri ve güzelliğe dair güncel notlar.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recentPosts.map((post) => (
            <article key={post.id} className="group flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/5 sm:aspect-[2/1] lg:aspect-[3/2]">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-500">
                      <span className="text-sm">Görsel Yok</span>
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4 rounded-full bg-black/60 text-white px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm border border-white/10">
                  {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-gray-400">{post.readTime} dk okuma</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gold-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                    {post.summary}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-gold-500/70 px-8 py-3 text-sm font-semibold text-white transition hover:bg-gold-500 hover:text-black shadow-lg shadow-gold-500/10"
          >
            Tüm Yazıları Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
