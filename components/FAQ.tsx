"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Lazer epilasyon işlemi ağrılı mıdır?",
    answer: "Merkezimizde son teknoloji buz başlık lazer cihazları kullanılmaktadır. Bu sayede acı hissi minimuma indirilir ve konforlu bir işlem süreci sağlanır."
  },
  {
    question: "Sonuçları ne zaman görmeye başlarım?",
    answer: "İlk seanstan itibaren tüylerde dökülme başlar. Kalıcı ve net sonuçlar için kişinin kıl yapısına bağlı olarak ortalama 6-8 seans önerilmektedir."
  },
  {
    question: "Cilt bakımı öncesi nelere dikkat etmeliyim?",
    answer: "Randevunuza makyajsız gelmeniz önerilir. Ayrıca son 3 gün içinde peeling gibi cildi soyucu işlemler yapmamış olmanız gerekmektedir."
  },
  {
    question: "Erkek danışanlar için hizmetiniz var mı?",
    answer: "Evet, merkezimizde hem kadın hem de erkek danışanlarımıza özel bölümlerde hizmet verilmektedir."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-dark-800">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">Merak Ettikleriniz</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-3">Sıkça Sorulan Sorular</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-dark-900/50">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className={`font-medium text-lg ${activeIndex === index ? "text-gold-400" : "text-white"}`}>
                  {faq.question}
                </span>
                <span className="text-gold-400">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}