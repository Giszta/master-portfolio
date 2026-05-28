"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export function ContactCtaSection() {
  const t = useTranslations("contact_cta");

  return (
    <section className="relative py-32">
      {/* Top separator */}
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,180,0.2), rgba(191,0,255,0.2), transparent)",
        }}
      />

      {/* Bg glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/4 h-64 w-64 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,180,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 h-64 w-64 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(191,0,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p
            className="mb-4 text-[11px] tracking-[3px]"
            style={{ color: "#00ffb4", textTransform: "uppercase" }}
          >
            {t("label")}
          </p>

          <h2
            className="mb-6 text-3xl leading-tight font-bold tracking-tight lg:text-4xl"
            style={{ color: "#e8eaf0" }}
          >
            {t("title")}
          </h2>

          <p
            className="mx-auto mb-12 max-w-xl text-sm leading-relaxed"
            style={{ color: "#8899aa" }}
          >
            {t("subtitle")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 text-[11px] font-bold tracking-[2px] transition-all hover:brightness-110 active:scale-95"
              style={{
                background: "#00ffb4",
                color: "#050810",
                textTransform: "uppercase",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              {t("cta_primary")} →
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border px-8 py-3 text-[11px] tracking-[2px] transition-all hover:brightness-125 active:scale-95"
              style={{
                color: "#00ffb4",
                borderColor: "rgba(0,255,180,0.35)",
                background: "transparent",
                textTransform: "uppercase",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              {t("cta_secondary")}
            </Link>
          </div>

          {/* Social row */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ background: "rgba(0,255,180,0.15)" }} />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors"
              style={{ color: "rgba(136,153,170,0.4)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#00ffb4")}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(136,153,170,0.4)")
              }
            >
              <GitHubIcon />
            </a>
            <div className="h-px w-12" style={{ background: "rgba(0,255,180,0.15)" }} />
          </div>

          {/* Bottom coords */}
          <p
            className="mt-8 text-[9px] tracking-[3px]"
            style={{ color: "rgba(0,255,180,0.2)", textTransform: "uppercase" }}
          >
            PL // 52°N 16°E — {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute right-0 bottom-0 left-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,255,180,0.1), transparent)",
        }}
      />
    </section>
  );
}
