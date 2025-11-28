import Link from "next/link";
import { prisma } from "@/lib/db";
import BlogActions from "../../_components/BlogActions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminBlogList() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const posts = await prisma.blogPost.findMany({ orderBy: { publishedAt: "desc" } });

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#384B70]">Blog Yönetimi</h1>
          <Link
            href="/admin/blog/yeni"
            className="rounded-lg bg-[#384B70] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#2c3b59]"
          >
            + Yeni Yazı Ekle
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-100 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-3">Başlık</th>
                <th className="px-6 py-3">Tarih</th>
                <th className="px-6 py-3">Görüntülenme</th>
                <th className="px-6 py-3 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{post.title}</td>
                  <td className="px-6 py-4">
                    {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                  </td>
                  <td className="px-6 py-4">{post.views}</td>
                  <td className="px-6 py-4 text-right">
                    <BlogActions id={post.id} />
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500">
                    Hiç blog yazısı yok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
