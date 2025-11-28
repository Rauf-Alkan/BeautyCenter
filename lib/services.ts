export const services = [
  // 1. LAZER EPİLASYON
  {
    id: 1,
    slug: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    subtitle: "Acısız, Kalıcı ve Pürüzsüz",
    description: "Son teknoloji buz başlık ile acısız, kalıcı ve pürüzsüz sonuçlar. İstenmeyen tüylerden kurtulmanın en konforlu ve hızlı yolu.",
    heroImage: "/lazer epilasyon.jpg",
    features: ["Buz Başlık Teknolojisi", "4 Mevsim Uygulama", "Tüm Kıl Tiplerine Uygun", "Acısız Konfor"],
    device: {
      name: "Soprano Ice Platinum",
      desc: "Dünyanın en gelişmiş lazer epilasyon teknolojisi. 3 farklı dalga boyunu (Alexandrite, Diode, Nd:YAG) tek başlıkta birleştirerek en ince kıllarda bile etki sağlar.",
      image: "https://images.unsplash.com/photo-1629356391094-0f2791845458?auto=format&fit=crop&q=80&w=800"
    },
    process: [
      { title: "Analiz", desc: "Uzmanlarımız kıl ve cilt tipinizi analiz eder." },
      { title: "Hazırlık", desc: "Bölge temizlenir, kısaltılır ve soğutucu jel sürülür." },
      { title: "Uygulama", desc: "Buz başlık ile seri atışlarla tarama yapılır." },
      { title: "Sonuç", desc: "Seans sonrası nemlendirme yapılır ve işlem biter." }
    ],
    faq: [
      { q: "Kaç seansta biter?", a: "Kıl yapısına göre değişmekle birlikte ortalama 6-8 seans önerilir." },
      { q: "Acı hisseder miyim?", a: "Hayır, patentli buz başlık teknolojisi sayesinde acı yerine masaj hissi duyarsınız." },
      { q: "Yazın yapılır mı?", a: "Evet, teknolojimiz bronz ten dahil 4 mevsim uygulanabilir." }
    ]
  },

  // 2. CİLT BAKIMI
  {
    id: 2,
    slug: "cilt-bakimi",
    title: "Profesyonel Cilt Bakımı",
    subtitle: "Cildiniz Yeniden Nefes Alsın",
    description: "Hydrafacial ve medikal bakımlarla cildinizdeki siyah nokta, leke, akne ve mat görünümden tek seansta kurtulun.",
    heroImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000",
    features: ["Derinlemesine Temizlik", "Leke ve Akne Tedavisi", "Anti-Aging Etki", "Canlı ve Parlak Görünüm"],
    device: {
      name: "Hydrafacial MD",
      desc: "Amerikan cilt bakım teknolojisi. Vortex vakumlama yöntemiyle cildi tahriş etmeden temizler, soyar ve antioksidanlarla besler.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
    },
    process: [
      { title: "Temizlik", desc: "Cilt makyaj artıklarından ve yağdan arındırılır." },
      { title: "Peeling & Vakum", desc: "Ölü deriler ve siyah noktalar vakumla çekilir." },
      { title: "Besleme", desc: "Cildin altına vitamin, peptid ve hyaluronik asit verilir." },
      { title: "LED Terapi", desc: "Cilt tipine uygun ışık terapisi ile işlem tamamlanır." }
    ],
    faq: [
      { q: "İşlem süresi nedir?", a: "Detaylı bakım protokolümüz yaklaşık 45-60 dakika sürer." },
      { q: "Kızarıklık olur mu?", a: "Hayır, işlem sonrası hemen sosyal hayatınıza dönebilirsiniz, cildiniz parlar." },
      { q: "Ne sıklıkla yapılmalı?", a: "Cildin nem dengesini korumak için ayda 1 kez önerilir." }
    ]
  },

  // 3. BÖLGESEL İNCELME
  {
    id: 3,
    slug: "bolgesel-incelme",
    title: "Bölgesel İncelme",
    subtitle: "Hayalinizdeki Forma Kavuşun",
    description: "G5 masajı, Lenf Drenaj ve Pasif Jimnastik ile inatçı yağlardan kurtulun, selülit görünümünü azaltın ve sıkılaşın.",
    heroImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000",
    features: ["Selülit Giderici", "Sıkılaşma ve Toparlama", "Ödem Atma", "Kan Dolaşımı Hızlandırma"],
    device: {
      name: "G5 Masaj & Lenf Drenaj",
      desc: "Hızlı titreşimlerle yağ yakımını hızlandıran G5 ve vücuttaki ödemi atan Lenf Drenaj sistemlerinin kombinasyonu.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800"
    },
    process: [
      { title: "Ölçüm", desc: "Vücut analizi yapılarak sorunlu bölgeler belirlenir." },
      { title: "Uygulama", desc: "Yağ yakıcı jeller ile G5 masajı uygulanır." },
      { title: "Drenaj", desc: "Parçalanan yağların atılması için lenf drenaj yapılır." },
      { title: "Sonuç", desc: "Her seansta incelme ve sıkılaşma gözlemlenir." }
    ],
    faq: [
      { q: "Haftada kaç seans?", a: "En iyi sonuç için haftada 2 seans önerilir." },
      { q: "Ne zaman sonuç alırım?", a: "4. seanstan itibaren gözle görülür fark ve kıyafetlerde bollaşma başlar." },
      { q: "Ağrılı bir işlem mi?", a: "G5 masajı yoğun titreşimli bir masajdır, ağrı yapmaz aksine rahatlatır." }
    ]
  },

  // 4. KALICI MAKYAJ
  {
    id: 4,
    slug: "kalici-makyaj",
    title: "Kalıcı Makyaj",
    subtitle: "Her Sabah Bakımlı Uyanın",
    description: "Microblading, Dudak Renklendirme ve Dipliner işlemleri ile doğal güzelliğinizi ortaya çıkarın. Günün her saati mükemmel görünün.",
    heroImage: "/make up.jpg",
    features: ["Doğal Görünüm", "Kişiye Özel Tasarım", "Organik Boyalar", "Uzun Süreli Kalıcılık"],
    device: {
      name: "Altın Oran & Microblading",
      desc: "Yüz hatlarınıza en uygun kaş şeklini Altın Oran pergeli ile belirliyor, tek kullanımlık steril iğnelerle kıl tekniği uyguluyoruz.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800"
    },
    process: [
      { title: "Tasarım", desc: "Altın oran ölçümü ile yüzünüze en uygun şekil çizilir." },
      { title: "Anestezi", desc: "Bölgeye lokal anestezik krem sürülür, acı hissedilmez." },
      { title: "İşlem", desc: "Seçilen renk ve teknikle uygulama yapılır." },
      { title: "Kontrol", desc: "3 hafta sonra rötuş randevusu oluşturulur." }
    ],
    faq: [
      { q: "Ne kadar kalıcı?", a: "Cilt tipine göre 12-18 ay arasında kalıcılığı vardır." },
      { q: "Renk değişimi olur mu?", a: "Kullandığımız organik boyalar zamanla renk değiştirmez, sadece silikleşir." },
      { q: "İşlem süresi nedir?", a: "Tasarım ve uygulama dahil yaklaşık 2 saat sürer." }
    ]
  },

  // 5. PROTEZ TIRNAK
  {
    id: 5,
    slug: "protez-tirnak",
    title: "Protez Tırnak & Nail Art",
    subtitle: "Elleriniz İmzanız Olsun",
    description: "Dayanıklı, estetik ve size özel tırnak tasarımları. Jel tırnak, kalıcı oje ve manikür işlemleriyle her zaman bakımlı eller.",
    heroImage: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=2000",
    features: ["Kırılmayan Güçlü Tırnaklar", "İstenilen Uzunluk ve Şekil", "Sınırsız Nail Art Seçeneği", "4 Hafta Kalıcılık"],
    device: {
      name: "Profesyonel Nail Sistemleri",
      desc: "Avrupa standartlarında sterilizasyon, kaliteli jeller ve son teknoloji UV/LED kurutma sistemleri kullanıyoruz.",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800"
    },
    process: [
      { title: "Manikür", desc: "Kuru manikür (Rus manikürü) ile tırnak etleri temizlenir." },
      { title: "Şekillendirme", desc: "Şablon veya tip ile istenilen uzunluk verilir." },
      { title: "Jel Uygulama", desc: "Jel katmanı sürülür ve UV ışıkta sabitlenir." },
      { title: "Tasarım", desc: "Kalıcı oje ve istenilen nail art uygulanır." }
    ],
    faq: [
      { q: "Kendi tırnağıma zarar verir mi?", a: "Uzman tarafından doğru teknikle yapıldığında ve çıkarıldığında zarar vermez." },
      { q: "Bakımı ne zaman yapılmalı?", a: "Tırnak uzama hızına göre 3-4 haftada bir bakım yapılmalıdır." },
      { q: "Abdest geçirir mi?", a: "Protez tırnak ve kalıcı oje su geçirmediği için abdest konusunda hassasiyeti olanlara önerilmez." }
    ]
  },

  // 6. ANTI-AGING (BOTOKS/GENÇLİK AŞISI)
  {
    id: 6,
    slug: "anti-aging",
    title: "Anti-Aging & Medikal Estetik",
    subtitle: "Zamanı Geriye Alın",
    description: "Gençlik aşısı, botoks ve mezoterapi uygulamalarıyla kırışıklıklara veda edin, daha dinç ve taze bir görünüme kavuşun.",
    heroImage: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop",
    features: ["Kırışıklık Giderme", "Cilt Yenileme", "Kolajen Artışı", "Ameliyatsız Gençleşme"],
    device: {
      name: "Medikal Enjeksiyon Yöntemleri",
      desc: "FDA onaylı, soğuk zincir ile korunan orijinal ürünler ve ultra ince mikro iğneler ile konforlu uygulama.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    process: [
      { title: "Konsültasyon", desc: "Doktorumuz yüzünüzü analiz eder ve ihtiyaçları belirler." },
      { title: "Hazırlık", desc: "Uygulama bölgeleri belirlenir ve temizlenir." },
      { title: "Enjeksiyon", desc: "Minik dokunuşlarla işlem yaklaşık 10-15 dk sürer." },
      { title: "Sonuç", desc: "Etkisi 3-7 gün içinde tam olarak oturur." }
    ],
    faq: [
      { q: "Yüzüm donuklaşır mı?", a: "Hayır, 'Baby Botox' tekniği ile mimiklerinizi koruyarak doğal bir canlılık sağlıyoruz." },
      { q: "Etkisi ne kadar sürer?", a: "Kişiden kişiye değişmekle birlikte ortalama 4-6 ay kalıcıdır." },
      { q: "Ağrı olur mu?", a: "Öncesinde anestezik krem sürüldüğü için sinek ısırığı kadar bir his olur." }
    ]
  }
];
