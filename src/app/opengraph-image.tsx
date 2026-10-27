import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0B132B",
          padding: "68px",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "6px",
                backgroundColor: "#10B981",
                borderRadius: "999px",
              }}
            />
            <span
              style={{
                fontSize: "22px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#34D399",
                fontWeight: 700,
              }}
            >
              Portfolio
            </span>
          </div>

          <span style={{ fontSize: "30px", fontWeight: 700, color: "#34D399" }}>
            FAHIM.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <span
            style={{
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </span>

          <span
            style={{ fontSize: "32px", fontWeight: 600, color: "#34D399" }}
          >
            {siteConfig.role}
          </span>

          <span
            style={{ fontSize: "25px", lineHeight: 1.45, color: "#CBD5E1" }}
          >
            {siteConfig.tagline}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(148, 163, 184, 0.25)",
            paddingTop: "26px",
          }}
        >
          <span style={{ fontSize: "22px", color: "#94A3B8" }}>
            {siteConfig.location}
          </span>
          <span style={{ fontSize: "22px", color: "#94A3B8" }}>
            Next.js · React · TypeScript
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
