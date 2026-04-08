import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tomás Guzmán — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ededed",
            letterSpacing: "-0.02em",
          }}
        >
          Tomás Guzmán
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a3a3a3",
            marginTop: 16,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#737373",
            marginTop: 8,
          }}
        >
          Turning ideas into products, fast.
        </div>
      </div>
    ),
    { ...size }
  );
}
