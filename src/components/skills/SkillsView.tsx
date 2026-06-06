"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  skills,
  categoryMeta,
  levelMeta,
  getSkillsByCategory,
  type SkillCategoryKey,
} from "@/data/skillsData";
import type { Locale, Skill } from "@/types";

type Props = { locale: Locale };

const CATEGORY_ORDER: SkillCategoryKey[] = ["core", "ui", "state-data", "testing", "tooling"];
const ALL_FILTERS = ["all", ...CATEGORY_ORDER] as const;
type FilterKey = (typeof ALL_FILTERS)[number];

function setColor(color: string) {
  return (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = color;
  };
}

function LevelDot({ level }: { level: Skill["level"] }) {
  const meta = levelMeta[level];
  return (
    <span
      className="inline-block h-2 w-2 shrink-0 rounded-full"
      style={{ background: meta.color, boxShadow: `0 0 6px ${meta.color}` }}
      aria-label={meta.labelEn}
    />
  );
}

function SkillCard({ skill, locale }: { skill: Skill; locale: Locale }) {
  const t = useTranslations("skills");
  const cat = categoryMeta[skill.category as SkillCategoryKey];
  const lv = levelMeta[skill.level];

  return (
    <div
      className="group relative flex flex-col gap-3 p-5 transition-all duration-300"
      style={{
        border: `1px solid ${cat.border}`,
        background: "var(--bg-card)",
        boxShadow: `0 0 20px ${cat.glow}, inset 0 0 20px rgba(0,0,0,0.3)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 36px ${cat.glowHover}, inset 0 0 20px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${cat.glow}, inset 0 0 20px rgba(0,0,0,0.3)`;
      }}
    >
      <div
        className="absolute top-0 left-0 h-3.5 w-3.5"
        style={{
          borderTop: `2px solid ${cat.color}`,
          borderLeft: `2px solid ${cat.color}`,
          opacity: 0.6,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-3.5 w-3.5"
        style={{
          borderBottom: `2px solid ${cat.color}`,
          borderRight: `2px solid ${cat.color}`,
          opacity: 0.6,
        }}
      />

      <div className="flex items-start gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center border text-xs font-bold"
          style={{ color: cat.color, borderColor: cat.border, background: cat.glow }}
        >
          {skill.icon}
        </div>
        <div>
          <p className="text-sm font-bold tracking-wide" style={{ color: "var(--text-primary)" }}>
            {skill.name}
          </p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <LevelDot level={skill.level} />
            <span
              className="text-[9px] tracking-[1.5px]"
              style={{ color: lv.color, textTransform: "uppercase" }}
            >
              {locale === "pl" ? lv.labelPl : lv.labelEn}
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {skill.description[locale]}
      </p>

      {skill.usedIn.length > 0 && (
        <div className="border-t pt-3" style={{ borderColor: `${cat.color}18` }}>
          <p
            className="mb-1.5 text-[9px] tracking-[1.5px]"
            style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
          >
            {t("used_in")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skill.usedIn.slice(0, 3).map((slug) => (
              <Link
                key={slug}
                href={`/projects/${slug}`}
                className="border px-2 py-0.5 text-[8px] tracking-[1px] transition-colors"
                style={{
                  color: "var(--cyan-muted)",
                  borderColor: "var(--cyan-dim)",
                  background: "var(--cyan-subtle)",
                  textTransform: "uppercase",
                }}
                onMouseEnter={setColor("var(--cyan)")}
                onMouseLeave={setColor("var(--cyan-muted)")}
              >
                {slug}
              </Link>
            ))}
            {skill.usedIn.length > 3 && (
              <span
                className="border px-2 py-0.5 text-[8px] tracking-[1px]"
                style={{
                  color: "var(--text-dim)",
                  borderColor: "rgba(68,85,102,0.2)",
                  textTransform: "uppercase",
                }}
              >
                +{skill.usedIn.length - 3}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CategorySection({
  categoryKey,
  locale,
  skillsList,
}: {
  categoryKey: SkillCategoryKey;
  locale: Locale;
  skillsList: Skill[];
}) {
  const meta = categoryMeta[categoryKey];
  const t = useTranslations("skills");
  const catLabel: Record<SkillCategoryKey, string> = {
    core: t("cat_core"),
    ui: t("cat_ui"),
    "state-data": t("cat_state_data"),
    testing: t("cat_testing"),
    tooling: t("cat_tooling"),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="h-px w-6 shrink-0" style={{ background: meta.color }} />
        <h2
          className="text-[11px] font-bold tracking-[3px]"
          style={{ color: meta.color, textTransform: "uppercase" }}
        >
          {catLabel[categoryKey]}
        </h2>
        <div
          className="h-px flex-1"
          style={{ background: `linear-gradient(90deg, ${meta.color}44, transparent)` }}
        />
        <span
          className="text-[9px] tracking-[1.5px]"
          style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
        >
          {skillsList.length} {t("total_skills")}
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skillsList.map((skill) => (
          <SkillCard key={skill.id} skill={skill} locale={locale} />
        ))}
      </div>
    </motion.div>
  );
}

function Legend({ locale }: { locale: Locale }) {
  const t = useTranslations("skills");
  return (
    <div
      className="flex flex-wrap items-center gap-4 border p-4"
      style={{ borderColor: "var(--cyan-glow)", background: "rgba(10,15,26,0.6)" }}
    >
      <span
        className="text-[9px] tracking-[2px]"
        style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
      >
        {t("legend")}:
      </span>
      {(["confident", "comfortable", "learning"] as const).map((level) => {
        const lv = levelMeta[level];
        return (
          <div key={level} className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: lv.color, boxShadow: `0 0 6px ${lv.color}` }}
            />
            <span className="text-[10px] tracking-[1px]" style={{ color: "var(--text-secondary)" }}>
              {locale === "pl" ? lv.labelPl : lv.labelEn}
              <span className="ml-1" style={{ color: "var(--text-dim)" }}>
                — {lv.desc[locale]}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function SkillsView({ locale }: Props) {
  const t = useTranslations("skills");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const totalCount = skills.length;

  const filterLabel: Record<FilterKey, string> = {
    all: t("filter_all"),
    core: t("cat_core"),
    ui: t("cat_ui"),
    "state-data": t("cat_state_data"),
    testing: t("cat_testing"),
    tooling: t("cat_tooling"),
  };

  const categoriesToShow =
    activeFilter === "all" ? CATEGORY_ORDER : [activeFilter as SkillCategoryKey];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="mb-3 text-[11px] tracking-[3px]"
          style={{ color: "var(--cyan)", textTransform: "uppercase" }}
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

      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="mb-3 flex flex-wrap gap-2">
          {ALL_FILTERS.map((f) => {
            const isActive = activeFilter === f;
            const color = f === "all" ? "var(--cyan)" : categoryMeta[f as SkillCategoryKey].color;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="border px-4 py-1.5 text-[10px] tracking-[2px] transition-all"
                style={{
                  textTransform: "uppercase",
                  color: isActive ? "var(--bg)" : "var(--text-secondary)",
                  background: isActive ? color : "transparent",
                  borderColor: isActive ? color : "rgba(136,153,170,0.2)",
                  clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
                }}
              >
                {filterLabel[f]}
              </button>
            );
          })}
        </div>
        <p
          className="text-[10px] tracking-[2px]"
          style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
        >
          {totalCount} {t("total_skills")}
        </p>
      </motion.div>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Legend locale={locale} />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="space-y-14"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {categoriesToShow.map((cat) => {
            const catSkills = getSkillsByCategory(cat);
            if (catSkills.length === 0) return null;
            return (
              <CategorySection key={cat} categoryKey={cat} locale={locale} skillsList={catSkills} />
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
