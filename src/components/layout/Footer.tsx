"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NAV_LINKS = [
  { href: "/projects", key: "projects" },
  { href: "/skills", key: "skills" },
  { href: "/about", key: "about" },
  { href: "/learning", key: "learning" },
  { href: "/contact", key: "contact" },
] as const;

const STACK = [
  "Next.js 15",
  "TypeScript",
  "Tailwind CSS v4",
  "Framer Motion",
  "Vitest",
  "next-intl",
];

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

type Props = { locale: "en" | "pl" };
export function Footer({ locale }: Props) {
  const t = useTranslations("nav");
  const year = new Date().getFullYear();
  const cvHref =
    locale === "pl"
      ? "/Engineer_Who_Codes-React_TS_Next_Tailwind-PL.pdf"
      : "/Engineer_Who_Codes-React_TS_Next_Tailwind-EN.pdf";
  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "var(--cyan-glow)", background: "rgba(5,8,16,0.95)" }}
    >
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--cyan-dim), var(--purple-dim), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto]">
          {/* Col 1 — Logo + opis + social */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span
                className="text-sm font-bold tracking-[3px]"
                style={{ color: "var(--cyan)", textTransform: "uppercase" }}
              >
                dev
              </span>
              <span
                className="text-sm tracking-[3px]"
                style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
              >
                .portfolio
              </span>
            </div>
            <p
              className="mb-6 max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("footer_desc")}
            </p>
            <div className="mb-8 flex flex-wrap gap-1.5">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="border px-2 py-0.5 text-[9px] tracking-[1.5px]"
                  style={{
                    color: "var(--cyan-muted)",
                    borderColor: "var(--cyan-dim)",
                    background: "var(--cyan-subtle)",
                    textTransform: "uppercase",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Giszta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 border px-3 py-2 text-[10px] tracking-[1.5px] transition-all hover:brightness-125"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "rgba(136,153,170,0.15)",
                  background: "transparent",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adam-giszter/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 border px-3 py-2 text-[10px] tracking-[1.5px] transition-all hover:brightness-125"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "rgba(136,153,170,0.15)",
                  background: "transparent",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--blue)")}
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                <LinkedInIcon /> LinkedIn
              </a>
            </div>
          </div>

          {/* Col 2 — Nawigacja */}
          <div>
            <p
              className="mb-5 text-[10px] tracking-[3px]"
              style={{ color: "var(--cyan)", textTransform: "uppercase" }}
            >
              sitemap
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[11px] tracking-[2px] transition-colors"
                    style={{ color: "var(--text-secondary)", textTransform: "uppercase" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Kontakt */}
          <div>
            <p
              className="mb-5 text-[10px] tracking-[3px]"
              style={{ color: "var(--purple)", textTransform: "uppercase" }}
            >
              contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:a.m.giszter@gmail.com"
                  className="text-[11px] tracking-[1px] transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--cyan)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
                  }
                >
                  a.m.giszter@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={cvHref}
                  download
                  className="inline-flex items-center gap-2 border px-4 py-2 text-[10px] font-bold tracking-[2px] transition-all hover:brightness-110"
                  style={{
                    color: "var(--bg)",
                    background: "var(--cyan)",
                    borderColor: "var(--cyan)",
                    textTransform: "uppercase",
                    clipPath: "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
                  }}
                >
                  Download CV →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center"
          style={{ borderColor: "rgba(0,255,180,0.06)" }}
        >
          <p
            className="text-[9px] tracking-[2px]"
            style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
          >
            © {year} dev.portfolio — built with Next.js
          </p>
          <p
            className="text-[9px] tracking-[2.5px]"
            style={{ color: "var(--cyan-muted)", textTransform: "uppercase" }}
          >
            PL // 52°N 16°E
          </p>
        </div>
      </div>
    </footer>
  );
}
