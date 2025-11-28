"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  initialData?: any;
};

export default function BlogForm({ initialData }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: initialData?.title || "",
    summary: initialData?.summary || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "",
    readTime: initialData?.readTime || 3,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const url = initialData ? `/api/admin/blog/${initialData.id}` : "/api/admin/blog";
    const method = initialData ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("İşlem başarısız");

      router.push("/admin/blog");
      router.refresh();
    } catch (error) {
      alert("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Başlık</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-lg border border-slate-300 p-3 focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-500 bg-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Okuma Süresi (dk)</label>
          <input
            type="number"
            min={1}
            value={form.readTime}
            onChange={(e) => setForm({ ...form, readTime: Number(e.target.value) })}
            className="w-full rounded-lg border border-slate-300 p-3 focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-500 bg-white"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Özet (Meta Description)</label>
        <textarea
          rows={3}
          required
          value={form.summary}
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
          className="w-full rounded-lg border border-slate-300 p-3 focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-500 bg-white"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">Kapak Görsel Linki</label>
        <input
          type="url"
          placeholder="https://..."
          value={form.coverImage}
          onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
          className="w-full rounded-lg border border-slate-300 p-3 focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-500 bg-white"
        />
        {form.coverImage && (
          <div className="relative mt-2 h-40 w-full overflow-hidden rounded-lg bg-slate-100">
            <img src={form.coverImage} alt="Önizleme" className="h-full w-full object-cover" />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-700">İçerik (Markdown)</label>
        <p className="text-xs text-slate-500">**Kalın**, *İtalik*, - Liste, &gt; Alıntı, # Başlık</p>
        <textarea
          rows={15}
          required
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="w-full rounded-lg border border-slate-300 p-3 font-mono text-sm focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-500 bg-white"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 rounded-lg border border-slate-300 py-3 font-semibold text-slate-600 hover:bg-slate-50"
        >
          İptal
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-lg bg-[#384B70] py-3 font-semibold text-white hover:bg-[#2c3b59] disabled:opacity-50"
        >
          {loading ? "Kaydediliyor..." : initialData ? "Güncelle" : "Yayınla"}
        </button>
      </div>
    </form>
  );
}
