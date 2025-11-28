import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Çerez Politikası | Elif Kaya Güzellik",
  description:
    "Web sitemizde kullanılan çerez türleri, amaçları ve yönetim seçenekleri hakkında bilgilendirme.",
};

export default function Cookies() {
  return (
    <main className="bg-dark-900 min-h-screen pb-24">
      <PageHeader title="Çerez Politikası" subtitle="Gizlilik ve Güvenlik" />
      
      <div className="container mx-auto px-6 mt-12 max-w-4xl">
        <div className="bg-dark-800 p-8 md:p-12 rounded-2xl border border-white/5 text-gray-400 leading-relaxed space-y-6 text-sm md:text-base">
          
          <h3 className="text-xl font-serif text-white font-bold">1. Çerez (Cookie) Nedir?</h3>
          <p>
            Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Web sitemiz, size daha iyi bir deneyim sunmak için çerezleri kullanmaktadır.
          </p>

          <h3 className="text-xl font-serif text-white font-bold">2. Kullanılan Çerez Türleri</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için gereklidir.</li>
            <li><strong>Analiz Çerezleri:</strong> Ziyaretçi sayısını ve trafiği analiz etmemizi sağlar (örn: Google Analytics).</li>
            <li><strong>İşlevsel Çerezler:</strong> Dil tercihleri gibi kişiselleştirilmiş ayarları hatırlar.</li>
          </ul>

          <h3 className="text-xl font-serif text-white font-bold">3. Çerezleri Nasıl Yönetebilirsiniz?</h3>
          <p>
            Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirme imkanına sahipsiniz. Ancak, çerezleri devre dışı bırakmanız durumunda web sitesinin bazı özelliklerinin işlevselliğini yitirebileceğini unutmayınız.
          </p>
          
          <div className="pt-6 border-t border-white/10 mt-6">
            <p className="italic text-xs">Bu site Google Analytics ve Facebook Pixel hizmetlerini kullanabilir.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
