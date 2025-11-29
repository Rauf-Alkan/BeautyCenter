"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Send, X, Sparkles, CalendarHeart } from "lucide-react";
import ReactMarkdown from "react-markdown";

// --- AYARLAR ---
const BUSINESS_NAME = "Güzellik Merkezi"; 
const BOT_NAME = "Güzellik Asistanı";
const ACCENT_COLOR = "text-[#D4AF37]"; 
// ----------------

type ChatMessage = {
  role: "user" | "model";
  parts: { text: string }[];
};

const initialMessages: ChatMessage[] = [
  {
    role: "model",
    parts: [
      {
        text: `**Hoş geldiniz!** ✨ \n\nBen ${BUSINESS_NAME} asistanıyım. \n\nLazer epilasyon, cilt bakımı, protez tırnak veya randevu işlemleriyle ilgili size nasıl yardımcı olabilirim?`,
      },
    ],
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const quickActions = [
    "Lazer epilasyon fiyatları",
    "Cilt bakımı paketleri",
    "Hızlı randevu oluşturmak istiyorum",
    "Sık sorulan sorular",
  ];
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) setShowWelcome(false);
  }, [isOpen]);

  const handleServerAction = (text: string) => {
    if (text.includes("[[ACTION_OPEN_APPOINTMENT]]")) {
      const formElement = document.getElementById("appointment-form"); 
      const btnElement = document.getElementById("randevu-btn");

      if (formElement) {
        setIsOpen(false);
        setTimeout(() => {
            formElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      } else if (btnElement) {
        setIsOpen(false);
        btnElement.click();
      } else {
        window.location.href = "/#contact";
      }
      return text.replace("[[ACTION_OPEN_APPOINTMENT]]", "");
    }
    if (text.includes("[[ACTION_OPEN_WHATSAPP]]")) {
        window.open("https://wa.me/905518234130", "_blank");
        return text.replace("[[ACTION_OPEN_WHATSAPP]]", "");
    }
    if (text.includes("[[ACTION_CALL_PHONE]]")) {
        window.location.href = "tel:+905518234130";
        return text.replace("[[ACTION_CALL_PHONE]]", "");
    }
    return text;
  };

  const sendMessage = async (customText?: string) => {
    const trimmedInput = (customText ?? input).trim();
    if (!trimmedInput || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      parts: [{ text: trimmedInput }],
    };

    if (!customText) {
      setInput("");
    }
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const historyPayload = [...messages, userMessage];
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmedInput,
          history: historyPayload.map((m) => ({ role: m.role, parts: m.parts })),
        }),
      });

      const data = await response.json();
      let replyText = typeof data?.reply === "string" ? data.reply : "Bağlantı hatası.";
      replyText = handleServerAction(replyText);
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: replyText }] }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "model", parts: [{ text: "Şu an cevap veremiyorum. Lütfen WhatsApp'tan yazınız." }] }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-6 bottom-28 z-[9999] flex flex-col items-end font-sans pointer-events-none">
      
      {/* --- SOHBET PENCERESİ (BÜYÜTÜLDÜ) --- */}
      <div
        className={`pointer-events-auto mb-4 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111111] via-[#0c0c0c] to-[#080808] shadow-[0_30px_80px_rgba(0,0,0,0.65)] transition-all duration-500 origin-bottom-right transform backdrop-blur
        ${isOpen 
            ? "scale-100 opacity-100 translate-y-0 w-[94vw] h-[620px] sm:w-[460px] sm:h-[700px]" 
            : "scale-90 opacity-0 translate-y-16 w-0 h-0"
        }`}
      >
        {/* HEADER */}
        <div className="relative flex items-center justify-between px-5 py-4 text-white shadow-md z-10 bg-gradient-to-r from-black via-[#0f0a05] to-black border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 backdrop-blur border border-[#D4AF37]/60 shadow-inner shadow-black/40">
                   <Sparkles className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-black animate-pulse"></span>
            </div>
            <div>
              <h3 className="text-base font-bold tracking-wide text-white leading-tight">
                {BUSINESS_NAME}
              </h3>
              <p className={`text-xs ${ACCENT_COLOR} font-medium tracking-widest uppercase opacity-90`}>
                {BOT_NAME}
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white transition-colors shadow-inner shadow-black/30">
            <X size={20} />
          </button>
        </div>

        {/* HAZIR EYLEM BUTONLARI */}
        <div className="flex flex-wrap gap-2 px-5 pt-4 pb-2">
          {quickActions.map((label) => (
            <button
              key={label}
              onClick={() => sendMessage(label)}
              className="px-3 py-2 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white/90 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors shadow-sm shadow-black/30"
            >
              {label}
            </button>
          ))}
        </div>

        {/* MESAJ LİSTESİ */}
        <div className="flex-1 space-y-5 overflow-y-auto p-5 scrollbar-thin bg-gradient-to-b from-transparent via-black/10 to-black/20">
          {messages.map((msg, index) => (
            <div key={`${msg.role}-${index}`} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "model" && (
                 <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mr-3 shrink-0 shadow-sm shadow-black/40 mt-2">
                    <Sparkles size={14} />
                 </div>
              )}
              <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#E5C469] text-black rounded-br-none shadow-lg shadow-black/20" 
                    : "bg-white/10 text-stone-100 border border-white/15 rounded-bl-none shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur"
                }`}>
                {msg.role === "model" ? (
                  <div className={`markdown-content [&_strong]:text-white [&_a]:${ACCENT_COLOR} [&_a]:underline`}>
                    <ReactMarkdown components={{ a: (props) => <a {...props} target="_blank" /> }}>{msg.parts[0]?.text || ""}</ReactMarkdown>
                  </div>
                ) : (
                  msg.parts[0]?.text
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] mr-3 shrink-0 shadow-sm shadow-black/40 mt-2">
                  <Sparkles size={14} />
               </div>
               <div className="flex items-center gap-2 rounded-2xl rounded-bl-none border border-white/15 bg-white/10 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                  <div className="flex gap-1.5">
                     <span className="w-1.5 h-1.5 bg-stone-200 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                     <span className="w-1.5 h-1.5 bg-stone-200 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                     <span className="w-1.5 h-1.5 bg-stone-200 rounded-full animate-bounce"></span>
                  </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT ALANI */}
        <div className="border-t border-white/10 bg-black/30 p-4 pb-5">
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 pr-2 shadow-inner shadow-black/40 focus-within:border-[#D4AF37]/60 transition-all">
            <input
              className="flex-1 bg-transparent px-3 text-sm text-white placeholder-white/50 outline-none"
              placeholder="Sorunuzu yazın veya randevu isteyin..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || isLoading}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-[#E5C469] text-black shadow-lg shadow-[#E5C469]/40 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} className="ml-0.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- AÇMA BUTONU (FAB) --- */}
      <div className="relative pointer-events-auto">
        {!isOpen && showWelcome && (
          <div className="absolute -top-12 right-1/2 translate-x-1/2 md:right-auto md:-left-3 md:translate-x-0 bg-white text-neutral-800 text-xs font-semibold px-3 py-2 rounded-full shadow-lg border border-neutral-200 flex items-center gap-2 animate-bounce">
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            Merhaba, ben yapay zeka asistanınız
          </div>
        )}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`group flex items-center justify-center rounded-full transition-all duration-300 w-16 h-16 shadow-[0_14px_40px_rgba(0,0,0,0.45)] border 
            ${isOpen 
              ? "bg-white text-neutral-800 border-neutral-200 hover:-translate-y-0.5" 
              : "bg-[#E5C469] text-black border-[#f5e4a3] hover:-translate-y-1" 
            }`}
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-black/70 shadow-inner shadow-black/50">
            {isOpen ? (
              <X size={24} />
            ) : (
              <CalendarHeart size={26} strokeWidth={1.4} className="text-white" />
            )}
            {!isOpen && (
              <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border border-black animate-pulse" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
