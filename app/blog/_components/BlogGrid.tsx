"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BlogItem = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  coverImage: string | null;
  readTime: number;
  views: number;
  publishedAt: string;
};

export default function BlogGrid({ blogs }: { blogs: BlogItem[] }) {
  const [search, setSearch] = useState("");

  const filteredBlogs = useMemo(() => {
    if (!search.trim()) return blogs;
    const q = search.toLowerCase();
    return blogs.filter(
      (b) => b.title.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q),
    );
  }, [search, blogs]);

  return (
    <section>
      <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-xl font-semibold text-white">Tüm Yazılar ({blogs.length})</h2>
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Bloglarda ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-white/10 bg-[#0f1014] py-3 pl-4 pr-12 text-sm text-slate-200 shadow-sm outline-none transition focus:border-gold-500 focus:ring-2 focus:ring-gold-500/30"
          />
          <svg
            className="absolute right-4 top-3.5 h-5 w-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0f1014] shadow-[0_10px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/5 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            <div className="relative h-48 w-full overflow-hidden bg-slate-900">
              {blog.coverImage ? (
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-600">
                  <svg
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              <div className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-500 backdrop-blur-sm">
                Blog
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
                <time>{new Date(blog.publishedAt).toLocaleDateString("tr-TR")}</time>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{blog.readTime} dk okuma</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white transition group-hover:text-gold-500">
                {blog.title}
              </h3>
              <p className="mb-4 line-clamp-3 flex-1 text-sm text-slate-300">{blog.summary}</p>
              <div className="flex items-center text-sm font-semibold text-gold-500">
                <span className="inline-flex items-center rounded-full border border-gold-500/60 bg-gold-500/10 px-3 py-1 text-gold-500 transition group-hover:bg-gold-500/20 group-hover:text-gold-400">
                  Devamını Oku
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}

        {filteredBlogs.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500">
            Aradığınız kriterlere uygun yazı bulunamadı.
          </div>
        )}
      </div>
    </section>
  );
}
