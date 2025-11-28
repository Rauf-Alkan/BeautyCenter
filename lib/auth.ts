import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;

if (!nextAuthSecret) {
  throw new Error("NEXTAUTH_SECRET tanımlı değil");
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Girişi",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        if (!adminEmail || !adminPassword) {
          throw new Error("ADMIN_EMAIL veya ADMIN_PASSWORD tanımlı değil");
        }

        const isValidUser = credentials?.email === adminEmail && credentials?.password === adminPassword;

        if (isValidUser) {
          return { id: "1", name: "Elif Kaya Admin", email: adminEmail };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/admin/login", // Özel login sayfamız
  },
  session: {
    strategy: "jwt",
  },
  secret: nextAuthSecret,
};
