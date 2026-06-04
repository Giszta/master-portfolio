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

const FILTERS: { key: Filter; tKey: string }[] = [
  { key: "all",     tKey: "filter_all"     },
  { key: "done",    tKey: "filter_done"    },
  { key: "active",  tKey: "filter_active"  },
  { key: "planned", tKey: "filter_planned" },
];

/* ── Stats bar ──────────────────────────────────────────────── */
function StatsBar({ locale: _l }: { locale: Locale }) {
  const t = useTranslations("learning");
  const done      = learningPath.filter(s => s.status === "done").length;
  const total     = learningPath.length;
  const projects  = new Set(learningPath.flatMap(s => s.projects)).size;
  const pct       = Math.round((done / total) * 100);

  return (
    <div className="mb-12 grid gap-4 sm:grid-cols-3">
      {[
        { value: `${done}/${total}`, label: t("stat_done"),     color: "#00ffb4" },
        { value: projects.toString(), label: t("stat_projects"), color: "#d44dff" },
        { value: "52",               label: t("stat_tests"),    color: "#00b4ff" },
      ].map((stat, i) => (
        <motion.div
          key={i}
          className="relative border p-5"
          style={{ borderColor: `${stat.color}33`, background: `${stat.color}06` }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <div className="absolute left-0 top-0 h-3 w-3" style={{ borderTop: `2px solid ${stat.color}`, borderLeft: `2px solid ${stat.color}`, opacity: 0.6 }} />
          <p className="text-2xl font-bold tracking-tight" style={{ color: stat.color }}>{stat.value}</p>
          <p className="mt-1 text-[10px] tracking-[2px]" style={{ color: "#8899aa", textTransform: "uppercase" }}>{stat.label}</p>
        </motion.div>
      ))}

      {/* Progress bar — full width */}
      <div className="sm:col-span-3">
        <div className="mb-2 flex justify-between text-[10px] tracking-[2px]" style={{ color: "#445566", textTransform: "uppercase" }}>
          <span>{t("progress")}</span>
          <span style={{ color: "#00ffb4" }}>{pct}%</span>
        </div>
        <div className="h-1.5 w-full" style={{ background: "rgba(0,255,180,0.08)" }}>
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, #00ffb4, #00b4ff)", boxShadow: "0 0 8px rgba(0,255,180,0.4)" }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ── Stage card ─────────────────────────────────────────────── */
function StageCard({ stage, locale, index }: { stage: LearningStage; locale: Locale; index: number }) {
  const t = useTranslations("learning");
  const sm = statusMeta[stage.status];
  const isPlanned = stage.status === "planned";
  const isActive  = stage.status === "active";

  return (
    <motion.div
      className="relative flex gap-5"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: isPlanned ? 0.5 : 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      {/* Left — timeline connector */}
      <div className="hidden flex-col items-center sm:flex" style={{ width: "48px", flexShrink: 0 }}>
        {/* Status icon */}
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center border text-sm font-bold"
          style={{ color: sm.color, borderColor: sm.border, background: sm.bg }}
        >
          {sm.symbol}
        </div>
        {/* Connector line — hide after last */}
        {index < learningPath.length - 1 && (
          <div className="mt-1 flex-1 w-px" style={{ background: `linear-gradient(to bottom, ${sm.color}44, transparent)`, minHeight: "24px" }} />
        )}
      </div>

      {/* Right — card content */}
      <div
        className="mb-4 flex-1 border p-6 transition-all duration-300"
        style={{
          borderColor: isActive ? sm.border : `${sm.color}22`,
          background: isActive ? "rgba(191,0,255,0.05)" : `${sm.color}04`,
          boxShadow: isActive ? "0 0 24px rgba(191,0,255,0.08)" : "none",
        }}
      >
        {/* Header */}
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center gap-3">
              {/* Mobile status icon */}
              <div className="flex h-7 w-7 items-center justify-center border text-xs font-bold sm:hidden"
                style={{ color: sm.color, borderColor: sm.border, background: sm.bg }}>
                {sm.symbol}
              </div>
              <h2 className="text-lg font-bold tracking-wide" style={{ color: isPlanned ? "#445566" : "#e8eaf0" }}>
                {stage.label}
              </h2>
            </div>
            <p className="text-[10px] tracking-[2px]" style={{ color: "#445566", textTransform: "uppercase" }}>
              {stage.year}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {isActive && (
              <span className="border px-2.5 py-1 text-[9px] tracking-[2px] animate-pulse"
                style={{ color: "#d44dff", borderColor: "rgba(191,0,255,0.4)", background: "rgba(191,0,255,0.08)", textTransform: "uppercase" }}>
                {t("active_badge")}
              </span>
            )}
            <span className="border px-2.5 py-1 text-[9px] tracking-[2px]"
              style={{ color: sm.color, borderColor: sm.border, background: sm.bg, textTransform: "uppercase" }}>
              {locale === "pl" ? statusMeta[stage.status].labelPl : statusMeta[stage.status].labelEn}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {stage.description[locale]}
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Skills */}
          <div>
            <p className="mb-2 text-[9px] tracking-[2px]" style={{ color: sm.color, textTransform: "uppercase" }}>
              {t("skills_covered")}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {stage.skills.map(skill => (
                <span key={skill} className="border px-2 py-0.5 text-[9px] tracking-[1px]"
                  style={{ color: `${sm.color}cc`, borderColor: `${sm.color}22`, background: `${sm.color}06`, textTransform: "uppercase" }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <p className="mb-2 text-[9px] tracking-[2px]" style={{ color: "#d44dff", textTransform: "uppercase" }}>
              {t("projects_built")}
            </p>
            {stage.projects.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {stage.projects.map(slug => (
                  <Link key={slug} href={`/projects/${slug}`}
                    className="border px-2 py-0.5 text-[9px] tracking-[1px] transition-colors"
                    style={{ color: "rgba(191,0,255,0.7)", borderColor: "rgba(191,0,255,0.2)", background: "rgba(191,0,255,0.04)", textTransform: "uppercase" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#d44dff"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(191,0,255,0.7)"; }}>
                    {slug} →
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-[10px]" style={{ color: "#445566" }}>{t("no_projects")}</p>
            )}
          </div>
        </div>

        {/* Key learnings */}
        {stage.keyLearnings.length > 0 && (
          <div className="mt-5 border-t pt-5" style={{ borderColor: `${sm.color}18` }}>
            <p className="mb-3 text-[9px] tracking-[2px]" style={{ color: "#00b4ff", textTransform: "uppercase" }}>
              {t("key_learnings")}
            </p>
            <ul className="space-y-2">
              {stage.keyLearnings.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: "#00b4ff" }}>→</span>
                  <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>{l[locale]}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Resources */}
        {stage.resources.length > 0 && (
          <div className="mt-5 border-t pt-5" style={{ borderColor: `${sm.color}18` }}>
            <p className="mb-3 text-[9px] tracking-[2px]" style={{ color: "#ffb800", textTransform: "uppercase" }}>
              {t("resources")}
            </p>
            <div className="flex flex-wrap gap-2">
              {stage.resources.map((r, i) => {
                const rm = resourceTypeMeta[r.type];
                const inner = (
                  <span className="flex items-center gap-1.5 border px-2.5 py-1 text-[9px] tracking-[1px] transition-colors"
                    style={{ color: "rgba(255,184,0,0.7)", borderColor: "rgba(255,184,0,0.2)", background: "rgba(255,184,0,0.04)", textTransform: "uppercase", cursor: r.url ? "pointer" : "default" }}>
                    <span>{rm.icon}</span>
                    {r.title}
                  </span>
                );
                return r.url ? (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={e => { (e.currentTarget.firstChild as HTMLElement).style.color = "#ffb800"; }}
                    onMouseLeave={e => { (e.currentTarget.firstChild as HTMLElement).style.color = "rgba(255,184,0,0.7)"; }}>
                    {inner}
                  </a>
                ) : <span key={i}>{inner}</span>;
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ── Philosophy section ─────────────────────────────────────── */
function PhilosophySection({ locale: _locale }: { locale: Locale }) {
  const t = useTranslations("learning");
  const items = [t("philosophy_1"), t("philosophy_2"), t("philosophy_3")];
  const colors = ["#00ffb4", "#d44dff", "#00b4ff"];

  return (
    <motion.section
      className="mt-16 border p-8"
      style={{ borderColor: "rgba(0,255,180,0.15)", background: "rgba(10,15,26,0.85)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-0 h-4 w-4" style={{ borderTop: "2px solid #00ffb4", borderLeft: "2px solid #00ffb4", opacity: 0.6 }} />
      <p className="mb-6 text-[11px] tracking-[3px]" style={{ color: "#00ffb4", textTransform: "uppercase" }}>
        // {t("philosophy_title")}
      </p>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="mt-0.5 shrink-0 h-1.5 w-1.5 rounded-full" style={{ background: colors[i], boxShadow: `0 0 6px ${colors[i]}` }} />
            <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>{item}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ── Main view ──────────────────────────────────────────────── */
export function LearningView({ locale }: Props) {
  const t = useTranslations("learning");
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all"
    ? learningPath
    : learningPath.filter(s => s.status === filter);

  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-12">

      {/* Header */}
      <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="mb-3 text-[11px] tracking-[3px]" style={{ color: "#00b4ff", textTransform: "uppercase" }}>
          // {t("label")}
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: "#e8eaf0" }}>
          {t("page_title")}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {t("page_description")}
        </p>
      </motion.div>

      {/* Stats */}
      <StatsBar locale={locale} />

      {/* Filters */}
      <motion.div
        className="mb-10 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {FILTERS.map(f => {
          const isActive = filter === f.key;
          const color = f.key === "all" ? "#00b4ff"
            : f.key === "done" ? "#00ffb4"
            : f.key === "active" ? "#d44dff"
            : "#445566";
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className="border px-4 py-1.5 text-[10px] tracking-[2px] transition-all"
              style={{
                textTransform: "uppercase",
                color: isActive ? "#050810" : "#8899aa",
                background: isActive ? color : "transparent",
                borderColor: isActive ? color : "rgba(136,153,170,0.2)",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
              }}
            >
              {t(f.tKey)}
            </button>
          );
        })}
        <span className="ml-auto self-center text-[10px] tracking-[2px]" style={{ color: "#445566", textTransform: "uppercase" }}>
          {filtered.length} {t("stages")}
        </span>
      </motion.div>

      {/* Timeline */}
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

      {/* Philosophy */}
      <div className="relative">
        <PhilosophySection locale={locale} />
      </div>

      {/* What's next */}
      <motion.div
        className="mt-8 border p-6"
        style={{ borderColor: "rgba(0,180,255,0.2)", background: "rgba(0,180,255,0.04)" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-2 text-[10px] tracking-[2px]" style={{ color: "#00b4ff", textTransform: "uppercase" }}>
          // {t("next_title")}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {t("next_desc")}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/projects"
            className="inline-flex items-center gap-2 border px-5 py-2 text-[10px] tracking-[2px] transition-all hover:brightness-125"
            style={{ color: "#00ffb4", borderColor: "rgba(0,255,180,0.3)", background: "transparent", textTransform: "uppercase", clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}>
            {locale === "pl" ? "Zobacz projekty →" : "See projects →"}
          </Link>
          <Link href="/skills"
            className="inline-flex items-center gap-2 border px-5 py-2 text-[10px] tracking-[2px] transition-all hover:brightness-125"
            style={{ color: "#8899aa", borderColor: "rgba(136,153,170,0.2)", background: "transparent", textTransform: "uppercase", clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}>
            {locale === "pl" ? "Umiejętności" : "Skills"}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
