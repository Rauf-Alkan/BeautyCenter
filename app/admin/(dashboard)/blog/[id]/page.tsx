import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import BlogForm from "../../../_components/BlogForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPage({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { id } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { id: Number(id) },
  });

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold text-[#384B70]">Yazıyı Düzenle</h1>
        <BlogForm initialData={post} />
      </div>
    </div>
  );
}
