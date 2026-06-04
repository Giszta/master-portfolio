import type { Locale, Project } from "@/types";

export type StatusStyle = {
  color: string;
  border: string;
  bg: string;
};

export type GlowStyle = {
  border: string;
  glow: string;
  glowHover: string;
  corner: string;
};

export function statusColor(status: Project["status"]): StatusStyle {
  if (status === "live")
    return { color: "#00ffb4", border: "rgba(0,255,180,0.3)", bg: "rgba(0,255,180,0.06)" };
  if (status === "in-progress")
    return { color: "#ffb800", border: "rgba(255,184,0,0.3)", bg: "rgba(255,184,0,0.06)" };
  return { color: "#8899aa", border: "rgba(136,153,170,0.3)", bg: "rgba(136,153,170,0.06)" };
}

export function statusLabel(status: Project["status"], locale: Locale): string {
  const m: Record<Project["status"], Record<Locale, string>> = {
    live: { en: "live", pl: "live" },
    "in-progress": { en: "in progress", pl: "w trakcie" },
    archived: { en: "archived", pl: "archiwum" },
  };
  return m[status][locale];
}

export function categoryColor(cat: Project["category"]): string {
  if (cat === "fullstack") return "#d44dff";
  if (cat === "frontend") return "#00b4ff";
  if (cat === "landing-page") return "#00ffb4";
  return "#8899aa";
}

export function cardGlow(index: number): GlowStyle {
  if (index === 0)
    return {
      border: "rgba(0,255,180,0.28)",
      glow: "rgba(0,255,180,0.06)",
      glowHover: "rgba(0,255,180,0.18)",
      corner: "#00ffb4",
    };
  if (index === 1)
    return {
      border: "rgba(191,0,255,0.28)",
      glow: "rgba(191,0,255,0.06)",
      glowHover: "rgba(191,0,255,0.18)",
      corner: "#d44dff",
    };
  return {
    border: "rgba(0,180,255,0.28)",
    glow: "rgba(0,180,255,0.06)",
    glowHover: "rgba(0,180,255,0.18)",
    corner: "#00b4ff",
  };
}

export function formatCreatedAt(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function getStackPreview(
  stack: string[],
  limit: number
): {
  visible: string[];
  overflow: number;
} {
  return {
    visible: stack.slice(0, limit),
    overflow: Math.max(0, stack.length - limit),
  };
}
