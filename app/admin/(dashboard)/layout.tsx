import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { FileText, Image as ImageIcon, LayoutDashboard } from "lucide-react";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-slate-50 md:flex">
      {/* SOL MENÜ */}
      <aside className="w-full md:w-64 bg-[#384B70] text-white flex-shrink-0">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold font-serif tracking-wide">Elif Kaya Admin</h2>
          <p className="text-xs text-slate-300 mt-1">
            {session?.user?.email ? session.user.email : "Yönetim Paneli"}
          </p>
        </div>

        <nav className="p-4 space-y-2">
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            <FileText size={20} /> Blog Yazıları
          </Link>

          <Link
            href="/admin/gallery"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            <ImageIcon size={20} /> Galeri / Fotoğraflar
          </Link>

          <div className="border-t border-white/10 my-4 pt-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <LayoutDashboard size={20} /> Siteyi Görüntüle
            </Link>
          </div>
        </nav>
      </aside>

      {/* İÇERİK */}
      <div className="flex-1 overflow-y-auto h-screen">{children}</div>
    </div>
  );
}
