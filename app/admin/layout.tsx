export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  // Üstteki site navbar'ının (fixed) üst üste binmesini engellemek için boşluk bırakıyoruz.
  return <div className="pt-24 md:pt-28">{children}</div>;
}
