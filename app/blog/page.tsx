import PageHeader from "@/components/PageHeader";
import { prisma } from "@/lib/db";
import BlogGrid from "./_components/BlogGrid";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { publishedAt: "desc" },
  });

  const formattedPosts = posts.map((post) => ({
    ...post,
    publishedAt: post.publishedAt.toISOString(),
  }));

  return (
    <main className="bg-dark-900 min-h-screen pb-20">
      <PageHeader title="Güzellik Merkezi Blogu" subtitle="Bakım İpuçları & Haberler" />

      <div className="container mx-auto mt-16 px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center text-slate-300">
          <p>
            Elif Kaya Güzellik Merkezi&apos;nden cilt bakımı, lazer epilasyon ve güncel
            uygulamalar hakkında ilham veren yazıları keşfedin. Uzmanlarımızdan gelen önerilerle
            bakım rutininizi güçlendirin.
          </p>
        </div>

        <BlogGrid blogs={formattedPosts} />
      </div>
    </main>
  );
}
