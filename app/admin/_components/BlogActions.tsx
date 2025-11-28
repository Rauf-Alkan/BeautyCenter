"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BlogActions({ id }: { id: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Bu yazıyı silmek istediğinize emin misiniz?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
      router.refresh();
    } catch (e) {
      alert("Silinemedi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-end gap-3">
      <Link href={`/admin/blog/${id}`} className="text-sm font-medium text-[#384B70] hover:underline">
        Düzenle
      </Link>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="text-sm font-medium text-red-600 hover:underline disabled:opacity-50"
      >
        Sil
      </button>
    </div>
  );
}
