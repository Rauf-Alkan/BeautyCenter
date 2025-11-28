import { ImageResponse } from "next/og";

// Resim ayarları
export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Favicon Oluşturucu
export default function Icon() {
  return new ImageResponse(
    (
      // CSS benzeri stil yapısı
      <div
        style={{
          fontSize: 18,
          background: "#0a0a0a", // Lüks Siyah
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#D4AF37", // Gold Rengi
          fontWeight: 900,
          borderRadius: "20%", // Hafif yuvarlatılmış köşe
          border: "1px solid #333",
        }}
      >
        GK
      </div>
    ),
    {
      ...size,
    }
  );
}
