"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  learningPath,
  statusMeta,
  resourceTypeMeta,
  type LearningStage,
  type LearningStatus,
} from "@/data/learningData";
import type { Locale } from "@/types";

type Props = { locale: Locale };
type Filter = "all" | LearningStatus;

const CYAN = "#00ffb4";
const PURPLE = "#da6aff";
const BLUE = "#00b4ff";
const AMBER = "#ffb800";

const FILTERS: { key: Filter; tKey: string }[] = [
  { key: "all", tKey: "filter_all" },
  { key: "done", tKey: "filter_done" },
  { key: "active", tKey: "filter_active" },
  { key: "planned", tKey: "filter_planned" },
];

function StatsBar() {
  const t = useTranslations("learning");
  const done = learningPath.filter((s) => s.status === "done").length;
  const total = learningPath.length;
  const projects = new Set(learningPath.flatMap((s) => s.projects)).size;
  const pct = Math.round((done / total) * 100);

  const stats = [
    { value: `${done}/${total}`, label: t("stat_done"), color: CYAN },
    { value: projects.toString(), label: t("stat_projects"), color: PURPLE },
    { value: "52", label: t("stat_tests"), color: BLUE },
  ];

  return (
    <div className="mb-12 grid gap-4 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="relative border p-5"
          style={{ borderColor: `${stat.color}33`, background: `${stat.color}06` }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <div
            className="absolute top-0 left-0 h-3 w-3"
            style={{
              borderTop: `2px solid ${stat.color}`,
              borderLeft: `2px solid ${stat.color}`,
              opacity: 0.6,
            }}
          />
          <p className="text-2xl font-bold tracking-tight" style={{ color: stat.color }}>
            {stat.value}
          </p>
          <p
            className="mt-1 text-[10px] tracking-[2px]"
            style={{ color: "var(--text-secondary)", textTransform: "uppercase" }}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
      <div className="sm:col-span-3">
        <div
          className="mb-2 flex justify-between text-[10px] tracking-[2px]"
          style={{ textTransform: "uppercase" }}
        >
          <span style={{ color: "var(--text-dim)" }}>{t("progress")}</span>
          <span style={{ color: "var(--cyan)" }}>{pct}%</span>
        </div>
        <div className="h-1.5 w-full" style={{ background: "var(--cyan-glow)" }}>
          <motion.div
            className="h-full"
            style={{
              background: `linear-gradient(90deg, ${CYAN}, ${BLUE})`,
              boxShadow: "0 0 8px rgba(0,255,180,0.4)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

function StageCard({
  stage,
  locale,
  index,
}: {
  stage: LearningStage;
  locale: Locale;
  index: number;
}) {
  const t = useTranslations("learning");
  const sm = statusMeta[stage.status];
  const isPlanned = stage.status === "planned";
  const isActive = stage.status === "active";

  return (
    <motion.div
      className="relative flex gap-5"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isPlanned ? 0.5 : 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {/* Timeline connector */}
      <div
        className="hidden flex-col items-center sm:flex"
        style={{ width: "48px", flexShrink: 0 }}
      >
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center border text-sm font-bold"
          style={{ color: sm.color, borderColor: sm.border, background: sm.bg }}
        >
          {sm.symbol}
        </div>
        {index < learningPath.length - 1 && (
          <div
            className="mt-1 w-px flex-1"
            style={{
              background: `linear-gradient(to bottom, ${sm.color}44, transparent)`,
              minHeight: "24px",
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        className="mb-4 flex-1 border p-6 transition-all duration-300"
        style={{
          borderColor: isActive ? sm.border : `${sm.color}22`,
          background: isActive ? "var(--purple-subtle)" : `${sm.color}04`,
          boxShadow: isActive ? "0 0 24px var(--purple-glow)" : "none",
        }}
      >
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <div
                className="flex h-7 w-7 items-center justify-center border text-xs font-bold sm:hidden"
                style={{ color: sm.color, borderColor: sm.border, background: sm.bg }}
              >
                {sm.symbol}
              </div>
              <h2
                className="text-lg font-bold tracking-wide"
                style={{ color: isPlanned ? "var(--text-dim)" : "var(--text-primary)" }}
              >
                {stage.label}
              </h2>
            </div>
            <p
              className="text-[10px] tracking-[2px]"
              style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
            >
              {stage.year}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {isActive && (
              <span
                className="animate-pulse border px-2.5 py-1 text-[9px] tracking-[2px]"
                style={{
                  color: "var(--purple)",
                  borderColor: `${PURPLE}66`,
                  background: `${PURPLE}14`,
                  textTransform: "uppercase",
                }}
              >
                {t("active_badge")}
              </span>
            )}
            <span
              className="border px-2.5 py-1 text-[9px] tracking-[2px]"
              style={{
                color: sm.color,
                borderColor: sm.border,
                background: sm.bg,
                textTransform: "uppercase",
              }}
            >
              {locale === "pl" ? sm.labelPl : sm.labelEn}
            </span>
          </div>
        </div>

        <p className="mb-6 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {stage.description[locale]}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p
              className="mb-2 text-[9px] tracking-[2px]"
              style={{ color: sm.color, textTransform: "uppercase" }}
            >
              {t("skills_covered")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {stage.skills.map((skill) => (
                <span
                  key={skill}
                  className="border px-2 py-0.5 text-[9px] tracking-[1px]"
                  style={{
                    color: `${sm.color}cc`,
                    borderColor: `${sm.color}22`,
                    background: `${sm.color}06`,
                    textTransform: "uppercase",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p
              className="mb-2 text-[9px] tracking-[2px]"
              style={{ color: "var(--purple)", textTransform: "uppercase" }}
            >
              {t("projects_built")}
            </p>
            {stage.projects.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {stage.projects.map((slug) => (
                  <Link
                    key={slug}
                    href={`/projects/${slug}`}
                    className="border px-2 py-0.5 text-[9px] tracking-[1px] transition-colors"
                    style={{
                      color: `${PURPLE}b3`,
                      borderColor: `${PURPLE}33`,
                      background: `${PURPLE}0a`,
                      textTransform: "uppercase",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = PURPLE;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = `${PURPLE}b3`;
                    }}
                  >
                    {slug} →
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-[10px]" style={{ color: "var(--text-dim)" }}>
                {t("no_projects")}
              </p>
            )}
          </div>
        </div>

        {stage.keyLearnings.length > 0 && (
          <div className="mt-5 border-t pt-5" style={{ borderColor: `${sm.color}18` }}>
            <p
              className="mb-3 text-[9px] tracking-[2px]"
              style={{ color: "var(--blue)", textTransform: "uppercase" }}
            >
              {t("key_learnings")}
            </p>
            <ul className="space-y-2">
              {stage.keyLearnings.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: "var(--blue)" }}>
                    →
                  </span>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {l[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {stage.resources.length > 0 && (
          <div className="mt-5 border-t pt-5" style={{ borderColor: `${sm.color}18` }}>
            <p
              className="mb-3 text-[9px] tracking-[2px]"
              style={{ color: "var(--amber)", textTransform: "uppercase" }}
            >
              {t("resources")}
            </p>
            <div className="flex flex-wrap gap-2">
              {stage.resources.map((r, i) => {
                const rm = resourceTypeMeta[r.type];
                const inner = (
                  <span
                    className="flex items-center gap-1.5 border px-2.5 py-1 text-[9px] tracking-[1px] transition-colors"
                    style={{
                      color: `${AMBER}b3`,
                      borderColor: `${AMBER}33`,
                      background: `${AMBER}0a`,
                      textTransform: "uppercase",
                      cursor: r.url ? "pointer" : "default",
                    }}
                  >
                    <span>{rm.icon}</span>
                    {r.title}
                  </span>
                );
                return r.url ? (
                  <a
                    key={i}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => {
                      (e.currentTarget.firstChild as HTMLElement).style.color = AMBER;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget.firstChild as HTMLElement).style.color = `${AMBER}b3`;
                    }}
                  >
                    {inner}
                  </a>
                ) : (
                  <span key={i}>{inner}</span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function PhilosophySection() {
  const t = useTranslations("learning");
  const items = [t("philosophy_1"), t("philosophy_2"), t("philosophy_3")];
  const colors = [CYAN, PURPLE, BLUE];

  return (
    <motion.section
      className="relative mt-16 border p-8"
      style={{ borderColor: "var(--cyan-dim)", background: "var(--bg-card)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute top-0 left-0 h-4 w-4"
        style={{ borderTop: `2px solid ${CYAN}`, borderLeft: `2px solid ${CYAN}`, opacity: 0.6 }}
      />
      <p
        className="mb-6 text-[11px] tracking-[3px]"
        style={{ color: "var(--cyan)", textTransform: "uppercase" }}
      >
        {t("philosophy_title")}
      </p>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <span
              className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: colors[i], boxShadow: `0 0 6px ${colors[i]}` }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export function LearningView({ locale }: Props) {
  const t = useTranslations("learning");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? learningPath : learningPath.filter((s) => s.status === filter);

  const filterColor = (key: Filter): string => {
    if (key === "all") return BLUE;
    if (key === "done") return CYAN;
    if (key === "active") return PURPLE;
    return "#445566";
  };

  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-12">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="mb-3 text-[11px] tracking-[3px]"
          style={{ color: "var(--blue)", textTransform: "uppercase" }}
        >
          {t("label")}
        </p>
        <h1
          className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {t("page_title")}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {t("page_description")}
        </p>
      </motion.div>

      <StatsBar />

      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="mb-3 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = filter === f.key;
            const color = filterColor(f.key);
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className="border px-4 py-1.5 text-[10px] tracking-[2px] transition-all"
                style={{
                  textTransform: "uppercase",
                  color: isActive ? "var(--bg)" : "var(--text-secondary)",
                  background: isActive ? color : "transparent",
                  borderColor: isActive ? color : "rgba(136,153,170,0.2)",
                  clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                }}
              >
                {t(f.tKey)}
              </button>
            );
          })}
        </div>
        <p
          className="text-[10px] tracking-[2px]"
          style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
        >
          {filtered.length} {t("stages")}
        </p>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.map((stage, i) => (
            <StageCard key={stage.id} stage={stage} locale={locale} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      <PhilosophySection />

      <motion.div
        className="mt-8 border p-6"
        style={{ borderColor: "var(--blue-dim)", background: "var(--blue-glow)" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p
          className="mb-2 text-[10px] tracking-[2px]"
          style={{ color: "var(--blue)", textTransform: "uppercase" }}
        >
          {t("next_title")}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {t("next_desc")}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border px-5 py-2 text-[10px] tracking-[2px] transition-all hover:brightness-125"
            style={{
              color: "var(--cyan)",
              borderColor: "var(--cyan-border)",
              background: "transparent",
              textTransform: "uppercase",
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            {t("next_cta_projects")}
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 border px-5 py-2 text-[10px] tracking-[2px] transition-all hover:brightness-125"
            style={{
              color: "var(--text-secondary)",
              borderColor: "rgba(136,153,170,0.2)",
              background: "transparent",
              textTransform: "uppercase",
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            {t("next_cta_skills")}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
