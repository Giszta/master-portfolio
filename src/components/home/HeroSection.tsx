"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ParticleCanvas } from "./ParticleCanvas";
import { PhotoFrame } from "./PhotoFrame";

const TAGS = [
  { label: "TypeScript", color: "cyan" },
  { label: "Next.js 15", color: "purple" },
  { label: "Tailwind v4", color: "blue" },
  { label: "Vitest", color: "cyan" },
  { label: "Framer Motion", color: "purple" },
  { label: "Playwright", color: "blue" },
  { label: "Zod", color: "cyan" },
  { label: "React Hook Form", color: "blue" },
] as const;

const tagStyles: Record<string, React.CSSProperties> = {
  cyan: {
    color: "#00ffb4",
    borderColor: "rgba(0,255,180,0.3)",
    background: "rgba(0,255,180,0.05)",
  },
  purple: {
    color: "#bf00ff",
    borderColor: "rgba(191,0,255,0.3)",
    background: "rgba(191,0,255,0.05)",
  },
  blue: {
    color: "#00b4ff",
    borderColor: "rgba(0,180,255,0.3)",
    background: "rgba(0,180,255,0.05)",
  },
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      <ParticleCanvas />

      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,180,0.012) 2px, rgba(0,255,180,0.012) 4px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(5,8,16,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-20 lg:px-12">
        {/* Desktop: side-by-side | Mobile: tekst → zdjęcie → CTA */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* ── LEFT / TOP ── */}
          <div>
            {/* Status pill */}
            <motion.div {...fadeUp(0)}>
              <span
                className="mb-7 inline-flex items-center gap-2.5 border px-3.5 py-1.5 text-[11px] tracking-[2px]"
                style={{
                  color: "#00ffb4",
                  borderColor: "rgba(0,255,180,0.35)",
                  background: "rgba(0,255,180,0.06)",
                  textTransform: "uppercase",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "#00ffb4",
                    boxShadow: "0 0 8px #00ffb4",
                    animation: "pulse 1.6s ease-in-out infinite",
                  }}
                />
                {t("available")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-6 leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 700 }}
              {...fadeUp(0.1)}
            >
              <span style={{ color: "#e8eaf0", display: "block" }}>{t("title_line1")}</span>
              <span
                style={{
                  color: "#00ffb4",
                  display: "block",
                  textShadow: "0 0 24px rgba(0,255,180,0.5), 0 0 48px rgba(0,255,180,0.18)",
                }}
              >
                {t("title_line2")}
              </span>
              <span
                style={{
                  color: "#bf00ff",
                  display: "block",
                  textShadow: "0 0 24px rgba(191,0,255,0.5), 0 0 48px rgba(191,0,255,0.18)",
                  fontSize: "0.72em",
                }}
              >
                {t("title_line3")}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div className="mb-8 space-y-1" {...fadeUp(0.2)}>
              <p className="max-w-md text-base leading-relaxed" style={{ color: "#8899aa" }}>
                {t("subtitle")}
              </p>
              <p className="text-sm" style={{ color: "rgba(0,255,180,0.45)" }}>
                {t("stack_line")}
              </p>
            </motion.div>

            {/* ── MOBILE ONLY — zdjęcie między tekstem a CTA ── */}
            <motion.div
              className="mb-8 flex justify-center lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="origin-top scale-[0.78]">
                <PhotoFrame
                  statDeploy={t("stat_deploy")}
                  statTs={t("stat_ts")}
                  photoLabel={t("photo_label")}
                />
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div className="mb-10 flex flex-wrap gap-3" {...fadeUp(0.4)}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-[2px] transition-all hover:brightness-110 active:scale-95"
                style={{
                  background: "#00ffb4",
                  color: "#050810",
                  textTransform: "uppercase",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
              >
                {t("cta_projects")}
                <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border px-6 py-2.5 text-[11px] tracking-[2px] transition-all hover:brightness-125 active:scale-95"
                style={{
                  color: "#00ffb4",
                  borderColor: "rgba(0,255,180,0.35)",
                  background: "transparent",
                  textTransform: "uppercase",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
              >
                {t("cta_contact")}
              </Link>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 border px-6 py-2.5 text-[11px] tracking-[2px] transition-all hover:brightness-125 active:scale-95"
                style={{
                  color: "#8899aa",
                  borderColor: "rgba(136,153,170,0.2)",
                  background: "transparent",
                  textTransform: "uppercase",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
                download
              >
                {t("cta_cv")}
              </a>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {TAGS.map((tag, i) => (
                <motion.span
                  key={tag.label}
                  className="border px-2.5 py-1 text-[10px] tracking-[1.5px]"
                  style={{ textTransform: "uppercase", ...tagStyles[tag.color] }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + i * 0.04 }}
                >
                  {tag.label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Desktop only ── */}
          <motion.div
            className="hidden lg:flex lg:items-center lg:justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <PhotoFrame
              statDeploy={t("stat_deploy")}
              statTs={t("stat_ts")}
              photoLabel={t("photo_label")}
            />
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-16 flex items-center gap-6 border-t pt-6"
          style={{ borderColor: "rgba(0,255,180,0.08)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <span
            className="text-[9px] tracking-[2.5px]"
            style={{ color: "rgba(0,255,180,0.3)", textTransform: "uppercase" }}
          >
            {t("coord")}
          </span>
          <span style={{ color: "rgba(0,255,180,0.15)" }}>·</span>
          <span
            className="text-[9px] tracking-[2.5px]"
            style={{ color: "rgba(0,255,180,0.3)", textTransform: "uppercase" }}
          >
            {t("version")}
          </span>
          <div className="ml-auto flex items-center gap-4">
            <span
              className="text-[9px] tracking-[2px]"
              style={{ color: "rgba(136,153,170,0.4)", textTransform: "uppercase" }}
            >
              find me on
            </span>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "rgba(136,153,170,0.4)" }}
              aria-label="GitHub profile"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ffb4")}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(136,153,170,0.4)")
              }
            >
              <GitHubIcon />
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #050810)" }}
        aria-hidden="true"
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.75); }
        }
      `}</style>
    </section>
  );
}
