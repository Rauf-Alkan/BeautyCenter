"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ayşe Yılmaz",
    date: "2 hafta önce",
    text: "Lazer epilasyon için geldim ve sonuçtan inanılmaz memnunum. Elif Hanım ve ekibi çok ilgili, hijyene çok önem veriyorlar. Kesinlikle tavsiye ederim.",
    stars: 5,
  },
  {
    name: "Zeynep K.",
    date: "1 ay önce",
    text: "Cilt bakımı yaptırdım, cildim resmen nefes aldı. Kullanılan ürünlerin kalitesi hemen hissediliyor. Ortam çok şık ve ferah.",
    stars: 5,
  },
  {
    name: "Elif Demir",
    date: "3 hafta önce",
    text: "Daha önce başka yerlerde kötü tecrübelerim olmuştu ama burası güvenimi tazeledi. İlginiz ve güler yüzünüz için teşekkürler.",
    stars: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={20} className="text-gold-500 fill-gold-500" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            Mutlu Danışanlarımız
          </h2>
          <p className="text-gray-400 mt-4">Google üzerindeki yüzlerce 5 yıldızlı yorumdan bazıları</p>
        </div>

        {/* Yorum Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark-900 p-8 rounded-2xl border border-white/5 relative hover:border-gold-500/30 transition-colors"
            >
              {/* Tırnak İşareti */}
              <Quote className="absolute top-8 right-8 text-white/5 w-10 h-10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold-500 fill-gold-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-sm">
                "{review.text}"
              </p>
              
              {/* Google Logosu İmitasyonu */}
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2">
                <div className="text-xs text-gray-500">Google Yorumu</div>
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                   <span className="text-[10px] font-bold text-black">G</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
