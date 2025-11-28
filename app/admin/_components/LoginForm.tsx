"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setError("Hatalı email veya şifre.");
      setLoading(false);
    } else {
      router.push("/admin/blog");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          required
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-400 bg-white"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700">Şifre</label>
        <input
          type="password"
          required
          className="w-full rounded-lg border border-slate-300 p-3 outline-none focus:border-[#384B70] focus:ring-1 focus:ring-[#384B70] text-slate-900 placeholder:text-slate-400 bg-white"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
      </div>
      {error && <div className="text-sm text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-[#384B70] py-3 font-semibold text-white hover:bg-[#2c3b59] disabled:opacity-50"
      >
        {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
