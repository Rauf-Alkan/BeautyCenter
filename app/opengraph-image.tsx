import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Güzellik Merkezi Randevu Sistemi Demosu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(to bottom right, #000000, #111111)",
          fontFamily: 'serif',
        }}
      >
        {/* Arka Plan Deseni (Hafif) */}
        <div
            style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'radial-gradient(circle at 25px 25px, #222 2%, transparent 0%), radial-gradient(circle at 75px 75px, #222 2%, transparent 0%)',
                backgroundSize: '100px 100px',
                opacity: 0.5,
            }}
        />

        {/* Altın Çerçeve */}
        <div
            style={{
                position: "absolute",
                top: 30,
                left: 30,
                right: 30,
                bottom: 30,
                border: "1px solid #D4AF37", // Gold
                borderRadius: 0,
                opacity: 0.3,
            }}
        />

        {/* Üst Badge (Etiket) */}
        <div
          style={{
            background: "#D4AF37",
            color: "#000",
            padding: "8px 24px",
            borderRadius: "50px",
            fontSize: 18,
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 40,
            letterSpacing: "2px",
          }}
        >
          Özel Demo Tasarım
        </div>

        {/* Ana Başlık */}
        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            color: "white",
            marginBottom: 10,
            textAlign: "center",
            lineHeight: 1.1,
            textShadow: "0 4px 20px rgba(0,0,0,0.8)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>GÜZELLİK MERKEZİNİZE</span>
          <span style={{ color: "#D4AF37" }}>PRESTİJ KATIN</span>
        </div>

        {/* Alt Açıklama */}
        <div
          style={{
            fontSize: 28,
            color: "#aaa",
            marginTop: 30,
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          Online Randevu • Hizmet Tanıtımı • %100 Mobil Uyumlu
        </div>
        
        {/* Buton Görünümü */}
        <div
            style={{
                marginTop: 40,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: 20,
                color: '#fff',
                opacity: 0.8
            }}
        >
            <span>👉</span>
            <span>İncelemek için tıklayın</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}