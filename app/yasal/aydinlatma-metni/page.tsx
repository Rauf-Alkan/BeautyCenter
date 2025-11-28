import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Elif Kaya Güzellik",
  description:
    "6698 sayılı KVKK kapsamında kişisel verilerin işlenmesi, aktarılması ve veri sahibi hakları hakkında bilgilendirme.",
};

export default function KVKK() {
  return (
    <main className="bg-dark-900 min-h-screen pb-24">
      <PageHeader title="KVKK Aydınlatma Metni" subtitle="Kişisel Verilerin Korunması" />
      
      <div className="container mx-auto px-6 mt-12 max-w-4xl">
        <div className="bg-dark-800 p-8 md:p-12 rounded-2xl border border-white/5 text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
          
          <h3 className="text-xl font-serif text-white font-bold">1. Veri Sorumlusu</h3>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; veri sorumlusu olarak <strong>Elif Kaya Güzellik Merkezi</strong> (“Şirket”) tarafından aşağıda açıklanan kapsamda işlenebilecektir.
          </p>

          <h3 className="text-xl font-serif text-white font-bold">2. Kişisel Verilerin İşlenme Amacı</h3>
          <p>
            Toplanan kişisel verileriniz (Ad, Soyad, Telefon, E-posta vb.); randevu oluşturulması, hizmetlerimizden faydalanmanızın sağlanması, kampanyalardan haberdar edilmeniz ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.
          </p>

          <h3 className="text-xl font-serif text-white font-bold">3. İşlenen Kişisel Verilerin Kimlere Aktarılabileceği</h3>
          <p>
            Kişisel verileriniz; kanunen yetkili kamu kurumları ve özel kişiler ile hizmet kalitemizi artırmak amacıyla iş birliği yaptığımız tedarikçilerimize KVKK’nın 8. ve 9. maddelerinde belirtilen şartlar çerçevesinde aktarılabilecektir.
          </p>

          <h3 className="text-xl font-serif text-white font-bold">4. Veri Sahibinin Hakları</h3>
          <p>
            KVKK’nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir.
          </p>
          
          <div className="pt-6 border-t border-white/10 mt-6">
            <p className="italic text-xs">Son Güncelleme: 25.11.2025</p>
          </div>
        </div>
      </div>
    </main>
  );
}
