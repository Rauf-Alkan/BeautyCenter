"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Upload, Link as LinkIcon, Image as ImageIcon, Loader2 } from "lucide-react";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  label: string;
  category: string;
};

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [mode, setMode] = useState<"upload" | "link">("upload");
  const [fileObj, setFileObj] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const [form, setForm] = useState({
    src: "",
    label: "",
    alt: "",
    category: "klinik",
  });

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileObj(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.label) return alert("Lütfen başlık giriniz.");

    setUploading(true);
    let finalSrc = form.src;

    try {
      if (mode === "upload") {
        if (!fileObj) {
          alert("Lütfen bir dosya seçin.");
          setUploading(false);
          return;
        }

        const formData = new FormData();
        formData.append("file", fileObj);

        const uploadRes = await fetch("/api/gallery/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) throw new Error("Dosya yüklenemedi");

        const data = await uploadRes.json();
        finalSrc = data.url;
      } else {
        if (!form.src) {
          alert("Lütfen resim URL'si giriniz.");
          setUploading(false);
          return;
        }
      }

      const dbRes = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          src: finalSrc,
          alt: form.alt || form.label,
        }),
      });

      if (dbRes.ok) {
        const newItem = await dbRes.json();
        setItems([newItem, ...items]);
        setForm({ src: "", label: "", alt: "", category: "klinik" });
        setFileObj(null);
        setPreviewUrl("");
      } else {
        alert("Veritabanına kaydedilemedi.");
      }
    } catch (error) {
      console.error(error);
      alert("Bir hata oluştu.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Silmek istediğinize emin misiniz?")) return;
    await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#384B70] mb-8 font-serif">Galeri Yönetimi</h1>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm mb-10 border border-slate-200">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-slate-700">
            <Plus size={20} className="text-gold-500" /> Yeni Fotoğraf Ekle
          </h2>

          <div className="flex gap-4 mb-6 border-b border-slate-100 pb-1">
            <button
              type="button"
              onClick={() => setMode("upload")}
              className={`flex items-center gap-2 pb-3 px-2 text-sm font-medium transition-colors relative ${
                mode === "upload" ? "text-[#384B70]" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <Upload size={16} /> Bilgisayardan Yükle
              {mode === "upload" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#384B70]" />}
            </button>
            <button
              type="button"
              onClick={() => setMode("link")}
              className={`flex items-center gap-2 pb-3 px-2 text-sm font-medium transition-colors relative ${
                mode === "link" ? "text-[#384B70]" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <LinkIcon size={16} /> Link Gir (Unsplash vb.)
              {mode === "link" && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#384B70]" />}
            </button>
          </div>

          <form onSubmit={handleAdd} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {mode === "upload" ? (
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer relative h-48 flex flex-col items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  {previewUrl ? (
                    <Image src={previewUrl} alt="Preview" fill className="object-contain p-2" />
                  ) : (
                    <div className="text-slate-400">
                      <ImageIcon size={32} className="mx-auto mb-2" />
                      <p className="text-sm">Fotoğraf seçmek için tıklayın</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500">Resim URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="w-full border border-slate-300 p-3 rounded-xl focus:border-[#384B70] outline-none text-sm bg-white text-slate-900 placeholder:text-slate-500"
                    value={form.src}
                    onChange={(e) => {
                      setForm({ ...form, src: e.target.value });
                      setPreviewUrl(e.target.value);
                    }}
                  />
                  {previewUrl && (
                    <div className="relative h-32 w-full mt-2 rounded-lg overflow-hidden border border-slate-200">
                      <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 ml-1">Başlık</label>
                <input
                  type="text"
                  placeholder="Örn: Lazer Epilasyon Odası"
                  className="w-full border border-slate-300 p-3 rounded-xl focus:border-[#384B70] outline-none text-sm bg-white text-slate-900 placeholder:text-slate-500"
                  value={form.label}
                  onChange={(e) => setForm({ ...form, label: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 ml-1">Kategori</label>
                <select
                  className="w-full border border-slate-300 p-3 rounded-xl focus:border-[#384B70] outline-none text-sm bg-white text-slate-900"
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  <option value="klinik">Klinik Atmosferi</option>
                  <option value="lazer">Lazer Epilasyon</option>
                  <option value="cilt">Cilt Bakımı</option>
                  <option value="zayiflama">Zayıflama</option>
                  <option value="kalici">Kalıcı Makyaj</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-500 ml-1">SEO Metni (Alt Text)</label>
                <input
                  type="text"
                  placeholder="Opsiyonel"
                  className="w-full border border-slate-300 p-3 rounded-xl focus:border-[#384B70] outline-none text-sm bg-white text-slate-900 placeholder:text-slate-500"
                  value={form.alt}
                  onChange={(e) => setForm({ ...form, alt: e.target.value })}
                />
              </div>

              <button
                disabled={uploading}
                className="w-full bg-[#384B70] hover:bg-[#2c3b59] text-white p-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
              >
                {uploading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Yükleniyor...
                  </>
                ) : (
                  "Galeriye Ekle"
                )}
              </button>
            </div>
          </form>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <Loader2 size={32} className="animate-spin mx-auto text-[#384B70]" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200"
              >
                <div className="relative aspect-square">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded uppercase font-bold backdrop-blur">
                    {item.category}
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <p className="text-sm font-semibold text-slate-700 truncate">{item.label}</p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400 hover:text-red-600 p-1.5 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-span-full py-16 text-center border-2 border-dashed border-slate-200 rounded-2xl text-slate-400">
                Henüz fotoğraf yok.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
