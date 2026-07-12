import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-data";

export const alt = `${siteConfig.name} — Commercial Concrete, Asphalt & Metal Buildings in Oklahoma`;
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#2b2b2b",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: 96,
            height: 8,
            backgroundColor: "#9b1c1c",
            marginBottom: 40,
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -1,
            color: "#faf9f7",
            textTransform: "uppercase",
            lineHeight: 1.05,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 34,
            color: "#e4e0d8",
          }}
        >
          Commercial Concrete · Asphalt Paving · Metal Buildings
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "#9b1c1c",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          Serving Oklahoma
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
