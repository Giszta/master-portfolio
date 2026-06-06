"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/projects", key: "projects" },
  { href: "/skills", key: "skills" },
  { href: "/about", key: "about" },
  { href: "/learning", key: "learning" },
  { href: "/contact", key: "contact" },
] as const;

const CLIP_SM = "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)";
const CLIP_MD = "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)";

function setColor(color: string) {
  return (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = color;
  };
}

type Locale = "en" | "pl";

function LocaleSwitcher({
  locale,
  onSwitch,
  size = "md",
}: {
  locale: Locale;
  onSwitch: () => void;
  size?: "sm" | "md";
}) {
  const btnH = size === "sm" ? "24px" : "28px";
  const btnW = size === "sm" ? "34px" : "38px";

  const [visual, setVisual] = useState<Locale>(locale);

  const handleClick = () => {
    const next: Locale = visual === "en" ? "pl" : "en";
    setVisual(next); // 1. animuj natychmiast
    onSwitch(); // 2. zmień język (co spowoduje remount i reset stanu)
  };

  const isEN = visual === "en";

  const labelStyle = (active: boolean): React.CSSProperties => ({
    position: "relative",
    zIndex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: btnW,
    height: btnH,
    fontSize: "9px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontFamily: "inherit",
    color: active ? "var(--bg)" : "var(--text-dim)",
    transition: "color 0.18s",
    userSelect: "none",
  });

  return (
    <button
      onClick={handleClick}
      aria-label={`Switch language — currently ${visual.toUpperCase()}`}
      style={{
        display: "inline-flex",
        position: "relative",
        padding: "2px",
        border: "1px solid rgba(0,255,180,0.2)",
        background: "transparent",
        clipPath: CLIP_SM,
        cursor: "pointer",
        gap: 0,
      }}
    >
      <motion.span
        style={{
          position: "absolute",
          top: "2px",
          bottom: "2px",
          width: btnW,
          background: "var(--cyan)",
          zIndex: 0,
          clipPath: "polygon(3px 0%, 100% 0%, calc(100% - 3px) 100%, 0% 100%)",
        }}
        initial={false}
        animate={{ left: isEN ? "2px" : `calc(2px + ${btnW})` }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      />
      <span style={labelStyle(isEN)}>EN</span>
      <span style={labelStyle(!isEN)}>PL</span>
    </button>
  );
}

type Props = { locale: Locale };

export function Navbar({ locale }: Props) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cvHref =
    locale === "pl"
      ? "/Engineer_Who_Codes-React_TS_Next_Tailwind-PL.pdf"
      : "/Engineer_Who_Codes-React_TS_Next_Tailwind-EN.pdf";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === "en" ? "pl" : "en";
    const pathWithoutLocale = pathname.replace(/^\/(en|pl)/, "") || "/";
    router.push(pathWithoutLocale, { locale: next });
  };

  const isActive = (href: string) => {
    const full = `/${locale}${href}`;
    return pathname === full || pathname.startsWith(`${full}/`);
  };

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(5,8,16,0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(0,255,180,0.08)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
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
            <span
              className="ml-1 h-2 w-2 rounded-full"
              style={{
                background: "var(--cyan)",
                boxShadow: "0 0 6px var(--cyan)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="relative px-3 py-2 text-[11px] tracking-[2px] transition-colors"
                  style={{
                    color: active ? "var(--cyan)" : "var(--text-secondary)",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={active ? undefined : setColor("var(--text-primary)")}
                  onMouseLeave={active ? undefined : setColor("var(--text-secondary)")}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0"
                      style={{
                        background: "var(--cyan-subtle)",
                        borderBottom: "1px solid var(--cyan-border)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{t(link.key)}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop right */}
          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher key={locale} locale={locale} onSwitch={switchLocale} />
            <a
              href={cvHref}
              download
              className="border px-4 py-1.5 text-[10px] font-bold tracking-[2px] transition-all hover:brightness-110"
              style={{
                color: "var(--bg)",
                background: "var(--cyan)",
                borderColor: "var(--cyan)",
                textTransform: "uppercase",
                clipPath: CLIP_SM,
              }}
            >
              CV
            </a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <LocaleSwitcher key={locale} locale={locale} onSwitch={switchLocale} size="sm" />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block h-px w-5"
                style={{ background: "var(--cyan)" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-5"
                style={{ background: "var(--cyan)" }}
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-5"
                style={{ background: "var(--cyan)" }}
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-20 lg:hidden"
            style={{ background: "rgba(5,8,16,0.97)", backdropFilter: "blur(16px)" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,180,0.012) 2px, rgba(0,255,180,0.012) 4px)",
              }}
              aria-hidden="true"
            />

            <nav className="relative flex flex-col px-6 py-8">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 border-b py-5 text-lg font-bold tracking-[2px] transition-colors"
                      style={{
                        color: active ? "var(--cyan)" : "var(--text-secondary)",
                        borderColor: "var(--cyan-glow)",
                        textTransform: "uppercase",
                      }}
                    >
                      <span
                        style={{
                          color: active ? "var(--cyan)" : "var(--text-dim)",
                          fontSize: "11px",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t(link.key)}
                      {active && (
                        <span className="ml-auto" style={{ color: "var(--cyan)" }}>
                          →
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <a
                  href={cvHref}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-bold tracking-[2px]"
                  style={{
                    background: "var(--cyan)",
                    color: "var(--bg)",
                    textTransform: "uppercase",
                    clipPath: CLIP_MD,
                  }}
                >
                  Download CV →
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
