import LoginForm from "../_components/LoginForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/admin/blog");

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-[#384B70]">Elif Kaya Admin</h1>
          <p className="text-sm text-slate-500">Yönetici girişi yapınız</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
