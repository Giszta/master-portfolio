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

export function statusColor(status: Project["status"]) {
  if (status === "live")
    return { color: "var(--cyan)", border: "var(--cyan-border)", bg: "var(--cyan-glow)" };
  if (status === "in-progress")
    return { color: "var(--amber)", border: "rgba(255,184,0,0.3)", bg: "rgba(255,184,0,0.06)" };
  return {
    color: "var(--text-secondary)",
    border: "rgba(136,153,170,0.3)",
    bg: "rgba(136,153,170,0.06)",
  };
}

export function statusLabel(status: Project["status"], locale: Locale) {
  const m = {
    live: { en: "live", pl: "live" },
    "in-progress": { en: "in progress", pl: "w trakcie" },
    archived: { en: "archived", pl: "archiwum" },
  };
  return m[status][locale];
}

export function categoryColor(cat: Project["category"]) {
  if (cat === "fullstack") return { var: "var(--purple)", raw: "#da6aff" };
  if (cat === "frontend") return { var: "var(--blue)", raw: "#00b4ff" };
  if (cat === "landing-page") return { var: "var(--cyan)", raw: "#00ffb4" };
  return { var: "var(--text-secondary)", raw: "#8899aa" };
}

export function cardGlow(index: number) {
  if (index === 0)
    return {
      border: "var(--cyan-border)",
      glow: "var(--cyan-glow)",
      glowHover: "var(--cyan-glow-hover)",
      corner: "var(--cyan)",
      cornerRaw: "#00ffb4",
    };
  if (index === 1)
    return {
      border: "var(--purple-border)",
      glow: "var(--purple-glow)",
      glowHover: "var(--purple-glow-hover)",
      corner: "var(--purple)",
      cornerRaw: "#da6aff",
    };
  return {
    border: "var(--blue-border)",
    glow: "var(--blue-glow)",
    glowHover: "var(--blue-glow-hover)",
    corner: "var(--blue)",
    cornerRaw: "#00b4ff",
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
