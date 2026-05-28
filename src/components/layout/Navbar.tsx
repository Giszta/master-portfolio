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

type Props = { locale: "en" | "pl" };

export function Navbar({ locale }: Props) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
              style={{ color: "#00ffb4", textTransform: "uppercase" }}
            >
              dev
            </span>
            <span
              className="text-sm tracking-[3px]"
              style={{ color: "#445566", textTransform: "uppercase" }}
            >
              .portfolio
            </span>
            <span
              className="ml-1 h-2 w-2 rounded-full"
              style={{
                background: "#00ffb4",
                boxShadow: "0 0 6px #00ffb4",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="relative px-3 py-2 text-[11px] tracking-[2px] transition-colors"
                  style={{ color: active ? "#00ffb4" : "#8899aa", textTransform: "uppercase" }}
                  onMouseEnter={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "#e8eaf0";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) (e.currentTarget as HTMLElement).style.color = "#8899aa";
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0"
                      style={{
                        background: "rgba(0,255,180,0.06)",
                        borderBottom: "1px solid rgba(0,255,180,0.4)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{t(link.key)}</span>
                </Link>
              );
            })}
          </div>

          {/* Right — locale + CV */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={switchLocale}
              className="border px-3 py-1.5 text-[10px] tracking-[2px] transition-all hover:brightness-125"
              style={{
                color: "#8899aa",
                borderColor: "rgba(136,153,170,0.2)",
                background: "transparent",
                textTransform: "uppercase",
                clipPath: "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
              }}
              aria-label="Switch language"
            >
              {locale === "en" ? "PL" : "EN"}
            </button>
            <a
              href="/cv.pdf"
              download
              className="border px-4 py-1.5 text-[10px] font-bold tracking-[2px] transition-all hover:brightness-110"
              style={{
                color: "#050810",
                background: "#00ffb4",
                borderColor: "#00ffb4",
                textTransform: "uppercase",
                clipPath: "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
              }}
            >
              CV
            </a>
          </div>

          {/* Mobile — locale + burger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={switchLocale}
              className="text-[10px] tracking-[2px]"
              style={{ color: "#8899aa", textTransform: "uppercase" }}
              aria-label="Switch language"
            >
              {locale === "en" ? "PL" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block h-px w-5"
                style={{ background: "#00ffb4" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-5"
                style={{ background: "#00ffb4" }}
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-5"
                style={{ background: "#00ffb4" }}
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
                      className="flex items-center gap-3 border-b py-5 text-lg font-bold tracking-[2px] transition-colors"
                      style={{
                        color: active ? "#00ffb4" : "#8899aa",
                        borderColor: "rgba(0,255,180,0.06)",
                        textTransform: "uppercase",
                      }}
                    >
                      <span style={{ color: active ? "#00ffb4" : "#445566", fontSize: "11px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t(link.key)}
                      {active && (
                        <span className="ml-auto" style={{ color: "#00ffb4" }}>
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
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-bold tracking-[2px]"
                  style={{
                    background: "#00ffb4",
                    color: "#050810",
                    textTransform: "uppercase",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  Download CV →
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </>
  );
}
