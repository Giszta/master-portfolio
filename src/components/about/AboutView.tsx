"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/types";

type Props = { locale: Locale };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

function SectionLabel({ text, color = "#00ffb4" }: { text: string; color?: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px w-6 shrink-0" style={{ background: color }} />
      <p className="text-[11px] tracking-[3px]" style={{ color, textTransform: "uppercase" }}>
        {text}
      </p>
    </div>
  );
}

function NeonCard({
  children,
  color = "#00ffb4",
  className = "",
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  const border = `${color}44`;
  const glow = `${color}0f`;
  const glowH = `${color}2a`;

  return (
    <div
      className={`relative p-5 transition-all duration-300 ${className}`}
      style={{
        border: `1px solid ${border}`,
        background: "rgba(10,15,26,0.85)",
        boxShadow: `0 0 20px ${glow}, inset 0 0 20px rgba(0,0,0,0.3)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 36px ${glowH}, inset 0 0 20px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${glow}, inset 0 0 20px rgba(0,0,0,0.3)`;
      }}
    >
      <div
        className="absolute top-0 left-0 h-3.5 w-3.5"
        style={{ borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, opacity: 0.6 }}
      />
      <div
        className="absolute right-0 bottom-0 h-3.5 w-3.5"
        style={{
          borderBottom: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          opacity: 0.6,
        }}
      />
      {children}
    </div>
  );
}

export function AboutView({ locale: _locale }: Props) {
  const t = useTranslations("about");

  const approachItems = [
    {
      title: t("approach_item_1_title"),
      desc: t("approach_item_1_desc"),
      icon: "01",
      color: "#00ffb4",
    },
    {
      title: t("approach_item_2_title"),
      desc: t("approach_item_2_desc"),
      icon: "02",
      color: "#bf00ff",
    },
    {
      title: t("approach_item_3_title"),
      desc: t("approach_item_3_desc"),
      icon: "03",
      color: "#00b4ff",
    },
    {
      title: t("approach_item_4_title"),
      desc: t("approach_item_4_desc"),
      icon: "04",
      color: "#00ffb4",
    },
  ];

  const values = [
    { title: t("value_1_title"), desc: t("value_1_desc"), color: "#00ffb4" },
    { title: t("value_2_title"), desc: t("value_2_desc"), color: "#bf00ff" },
    { title: t("value_3_title"), desc: t("value_3_desc"), color: "#00b4ff" },
  ];

  const timeline = [
    {
      year: t("bg_timeline_1_year"),
      label: t("bg_timeline_1_label"),
      desc: t("bg_timeline_1_desc"),
    },
    {
      year: t("bg_timeline_2_year"),
      label: t("bg_timeline_2_label"),
      desc: t("bg_timeline_2_desc"),
    },
    {
      year: t("bg_timeline_3_year"),
      label: t("bg_timeline_3_label"),
      desc: t("bg_timeline_3_desc"),
    },
    {
      year: t("bg_timeline_4_year"),
      label: t("bg_timeline_4_label"),
      desc: t("bg_timeline_4_desc"),
    },
  ];

  const outside = [t("outside_1"), t("outside_2"), t("outside_3")];

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-12">
      {/* HERO */}
      <section className="mb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.div {...fadeUp(0)}>
              <p
                className="mb-2 text-[11px] tracking-[3px]"
                style={{ color: "#00ffb4", textTransform: "uppercase" }}
              >
                {t("label")}
              </p>
              <p className="mb-1 text-base" style={{ color: "#8899aa" }}>
                {t("hero_greeting")}
              </p>
              <h1
                className="mb-2 leading-tight font-bold tracking-tight"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#e8eaf0" }}
              >
                {t("hero_name")}
              </h1>
              <p
                className="mb-6 text-xl font-bold"
                style={{ color: "#00ffb4", textShadow: "0 0 20px rgba(0,255,180,0.4)" }}
              >
                {t("hero_role")}
              </p>
            </motion.div>

            <motion.div className="mb-8 flex flex-wrap gap-2" {...fadeUp(0.1)}>
              <span
                className="inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] tracking-[2px]"
                style={{
                  color: "#00ffb4",
                  borderColor: "rgba(0,255,180,0.3)",
                  background: "rgba(0,255,180,0.06)",
                  textTransform: "uppercase",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background: "#00ffb4",
                    boxShadow: "0 0 6px #00ffb4",
                    animation: "pulse 1.8s ease-in-out infinite",
                  }}
                />
                {t("hero_available")}
              </span>
              <span
                className="inline-flex items-center gap-2 border px-3 py-1.5 text-[10px] tracking-[2px]"
                style={{
                  color: "#8899aa",
                  borderColor: "rgba(136,153,170,0.2)",
                  background: "transparent",
                  textTransform: "uppercase",
                }}
              >
                📍 {t("hero_location")}
              </span>
            </motion.div>

            <motion.div className="space-y-4" {...fadeUp(0.2)}>
              {[t("hero_bio_1"), t("hero_bio_2"), t("hero_bio_3")].map((bio, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed"
                  style={{ color: i === 1 ? "#aab8c8" : "#8899aa" }}
                >
                  {bio}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Zdjęcie — desktop only */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-72 w-52">
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  border: "1px solid rgba(0,255,180,0.35)",
                  boxShadow: "0 0 20px rgba(0,255,180,0.12), inset 0 0 30px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src="/images/my-photo.jpg"
                  alt={t("hero_name")}
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  style={{ filter: "grayscale(25%) brightness(0.85) contrast(1.1) saturate(0.75)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(0,180,140,0.15)", mixBlendMode: "color" }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
                  }}
                  aria-hidden="true"
                />
                <motion.div
                  className="absolute right-0 left-0"
                  style={{
                    height: "2px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,255,180,0.7), transparent)",
                  }}
                  animate={{ top: ["-2%", "102%"] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
                <div
                  className="absolute top-0 left-0 h-5 w-5"
                  style={{ borderTop: "2px solid #00ffb4", borderLeft: "2px solid #00ffb4" }}
                />
                <div
                  className="absolute right-0 bottom-0 h-5 w-5"
                  style={{ borderBottom: "2px solid #bf00ff", borderRight: "2px solid #bf00ff" }}
                />
                <div
                  className="absolute top-0 right-0 h-5 w-5"
                  style={{ borderTop: "2px solid #00b4ff", borderRight: "2px solid #00b4ff" }}
                />
                <div
                  className="absolute bottom-0 left-0 h-5 w-5"
                  style={{ borderBottom: "2px solid #00b4ff", borderLeft: "2px solid #00b4ff" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div
          className="mt-16 h-px w-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(0,255,180,0.15), transparent)",
          }}
        />
      </section>

      {/* HOW I WORK */}
      <motion.section className="mb-24" {...fadeUp()}>
        <SectionLabel text={t("section_approach")} color="#00ffb4" />
        <div className="grid gap-4 sm:grid-cols-2">
          {approachItems.map((item, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}>
              <NeonCard color={item.color}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-2xl font-bold" style={{ color: item.color, opacity: 0.25 }}>
                    {item.icon}
                  </span>
                  <h3 className="text-sm font-bold tracking-wide" style={{ color: "#e8eaf0" }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>
                  {item.desc}
                </p>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHAT MATTERS */}
      <motion.section className="mb-24" {...fadeUp()}>
        <SectionLabel text={t("section_values")} color="#bf00ff" />
        <div className="grid gap-4 lg:grid-cols-3">
          {values.map((val, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)}>
              <NeonCard color={val.color} className="h-full">
                <div
                  className="mb-2 h-px w-full"
                  style={{ background: `linear-gradient(90deg, ${val.color}66, transparent)` }}
                />
                <h3 className="mb-3 text-sm font-bold tracking-wide" style={{ color: "#e8eaf0" }}>
                  {val.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>
                  {val.desc}
                </p>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* BACKGROUND / TIMELINE */}
      <motion.section className="mb-24" {...fadeUp()}>
        <SectionLabel text={t("section_background")} color="#00b4ff" />
        <p className="mb-10 max-w-2xl text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {t("bg_intro")}
        </p>
        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-9.75 hidden w-px sm:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,255,180,0.3), rgba(0,180,255,0.15), transparent)",
            }}
          />
          <div className="space-y-6">
            {timeline.map((item, i) => {
              const colors = ["#00ffb4", "#bf00ff", "#00b4ff", "#00ffb4"];
              const color = colors[i];
              return (
                <motion.div
                  key={i}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="hidden shrink-0 flex-col items-center sm:flex">
                    <div
                      className="flex h-10.5 w-10.5 items-center justify-center border text-[10px] font-bold tracking-[1px]"
                      style={{ color, borderColor: `${color}55`, background: `${color}0d` }}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div
                    className="flex-1 border p-4"
                    style={{ borderColor: `${color}22`, background: `${color}05` }}
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className="text-[9px] tracking-[2px] sm:hidden"
                        style={{ color, textTransform: "uppercase" }}
                      >
                        {item.year}
                      </span>
                      <span
                        className="text-[9px] tracking-[2px] sm:hidden"
                        style={{ color: "#445566" }}
                      >
                        ·
                      </span>
                      <p className="text-sm font-bold" style={{ color: "#e8eaf0" }}>
                        {item.label}
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* OUTSIDE OF CODE */}
      <motion.section className="mb-24" {...fadeUp()}>
        <SectionLabel text={t("section_outside")} color="#ffb800" />
        <div className="space-y-3">
          {outside.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 border p-4"
              style={{ borderColor: "rgba(255,184,0,0.15)", background: "rgba(255,184,0,0.03)" }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <span className="mt-0.5 shrink-0 text-[10px] font-bold" style={{ color: "#ffb800" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT CTA */}
      <motion.section
        className="relative border p-10 text-center"
        style={{
          borderColor: "rgba(0,255,180,0.2)",
          background: "rgba(10,15,26,0.85)",
          boxShadow: "0 0 40px rgba(0,255,180,0.06)",
        }}
        {...fadeUp()}
      >
        <div
          className="absolute top-0 left-0 h-5 w-5"
          style={{ borderTop: "2px solid #00ffb4", borderLeft: "2px solid #00ffb4", opacity: 0.6 }}
        />
        <div
          className="absolute right-0 bottom-0 h-5 w-5"
          style={{
            borderBottom: "2px solid #00ffb4",
            borderRight: "2px solid #00ffb4",
            opacity: 0.6,
          }}
        />
        <SectionLabel text={t("section_contact")} color="#00ffb4" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight" style={{ color: "#e8eaf0" }}>
          {t("contact_title")}
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {t("contact_desc")}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-[2px] transition-all hover:brightness-110"
            style={{
              background: "#00ffb4",
              color: "#050810",
              textTransform: "uppercase",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            {t("contact_cta")} →
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border px-6 py-2.5 text-[11px] tracking-[2px] transition-all hover:brightness-125"
            style={{
              color: "#00ffb4",
              borderColor: "rgba(0,255,180,0.35)",
              background: "transparent",
              textTransform: "uppercase",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            {t("contact_projects")}
          </Link>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 border px-6 py-2.5 text-[11px] tracking-[2px] transition-all hover:brightness-125"
            style={{
              color: "#8899aa",
              borderColor: "rgba(136,153,170,0.2)",
              background: "transparent",
              textTransform: "uppercase",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            {t("contact_cv")}
          </a>
        </div>
      </motion.section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
      `}</style>
    </div>
  );
}
