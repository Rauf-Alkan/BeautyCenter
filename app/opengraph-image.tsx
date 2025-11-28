import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Elif Kaya Güzellik | Ankara";
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
          backgroundColor: "#0a0a0a",
          backgroundImage: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
        }}
      >
        {/* Dekoratif Çerçeve */}
        <div
            style={{
                position: "absolute",
                top: 40,
                left: 40,
                right: 40,
                bottom: 40,
                border: "2px solid #333",
                borderRadius: 20,
            }}
        />

        {/* Logo Alanı */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "#D4AF37",
            color: "#000",
            fontSize: 48,
            fontWeight: 900,
            marginBottom: 40,
            boxShadow: "0 0 50px rgba(212, 175, 55, 0.3)",
          }}
        >
          EK
        </div>

        {/* Başlık */}
        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
            textAlign: "center",
            fontFamily: "serif",
          }}
        >
          ELIF KAYA
        </div>

        {/* Alt Başlık */}
        <div
          style={{
            fontSize: 32,
            color: "#D4AF37", // Gold
            textTransform: "uppercase",
            letterSpacing: "4px",
            textAlign: "center",
          }}
        >
          Ankara Estetik ve Güzellik Merkezi
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
