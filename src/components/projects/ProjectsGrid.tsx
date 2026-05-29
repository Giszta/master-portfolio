"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { statusColor, statusLabel, categoryColor } from "@/lib/projectHelpers";
import type { Locale, Project, ProjectCategory } from "@/types";

type Props = {
  projects: Project[];
  locale: Locale;
};

const FILTERS: { key: "all" | ProjectCategory; labelEn: string; labelPl: string }[] = [
  { key: "all", labelEn: "All", labelPl: "Wszystkie" },
  { key: "fullstack", labelEn: "Full-stack", labelPl: "Full-stack" },
  { key: "frontend", labelEn: "Frontend", labelPl: "Frontend" },
  { key: "landing-page", labelEn: "Landing page", labelPl: "Landing page" },
  { key: "practice", labelEn: "Practice", labelPl: "Ćwiczenia" },
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

const ExternalIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

function hoverCyan(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "#00ffb4";
}
function hoverReset(color: string) {
  return (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = color;
  };
}

function ProjectCard({
  project,
  locale,
  index,
}: {
  project: Project;
  locale: Locale;
  index: number;
}) {
  const t = useTranslations("projects");
  const sc = statusColor(project.status);
  const cc = categoryColor(project.category);

  const glowColor = index % 3 === 0 ? "#00ffb4" : index % 3 === 1 ? "#bf00ff" : "#00b4ff";
  const glowRgba =
    index % 3 === 0
      ? "rgba(0,255,180,0.06)"
      : index % 3 === 1
        ? "rgba(191,0,255,0.06)"
        : "rgba(0,180,255,0.06)";
  const glowHover =
    index % 3 === 0
      ? "rgba(0,255,180,0.18)"
      : index % 3 === 1
        ? "rgba(191,0,255,0.18)"
        : "rgba(0,180,255,0.18)";
  const borderClr =
    index % 3 === 0
      ? "rgba(0,255,180,0.28)"
      : index % 3 === 1
        ? "rgba(191,0,255,0.28)"
        : "rgba(0,180,255,0.28)";

  return (
    <article
      className="group relative flex flex-col transition-all duration-300"
      style={{
        border: `1px solid ${borderClr}`,
        background: "rgba(10,15,26,0.85)",
        boxShadow: `0 0 24px ${glowRgba}, inset 0 0 24px rgba(0,0,0,0.3)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px ${glowHover}, inset 0 0 24px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 24px ${glowRgba}, inset 0 0 24px rgba(0,0,0,0.3)`;
      }}
    >
      {/* Corner TL */}
      <div
        className="absolute top-0 left-0 z-10 h-4 w-4"
        style={{
          borderTop: `2px solid ${glowColor}`,
          borderLeft: `2px solid ${glowColor}`,
          opacity: 0.7,
        }}
      />
      {/* Corner BR */}
      <div
        className="absolute right-0 bottom-0 z-10 h-4 w-4"
        style={{
          borderBottom: `2px solid ${glowColor}`,
          borderRight: `2px solid ${glowColor}`,
          opacity: 0.7,
        }}
      />

      {/* Screenshot */}
      {project.image && (
        <div className="relative w-full overflow-hidden" style={{ height: "160px" }}>
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "brightness(0.75) saturate(0.85)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,15,26,0.05) 0%, rgba(10,15,26,0) 40%, rgba(10,15,26,0.95) 100%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: `${glowColor}0a`, mixBlendMode: "color" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute right-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              height: "2px",
              background: `linear-gradient(90deg, transparent, ${glowColor}99, transparent)`,
              boxShadow: `0 0 8px ${glowColor}66`,
            }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center border p-1.5 backdrop-blur-sm transition-colors"
                style={{
                  color: "#e8eaf0",
                  borderColor: "rgba(255,255,255,0.2)",
                  background: "rgba(5,8,16,0.7)",
                }}
                aria-label={`Live: ${project.title}`}
                onMouseEnter={hoverCyan}
                onMouseLeave={hoverReset("#e8eaf0")}
              >
                <ExternalIcon />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border p-1.5 backdrop-blur-sm transition-colors"
              style={{
                color: "#e8eaf0",
                borderColor: "rgba(255,255,255,0.2)",
                background: "rgba(5,8,16,0.7)",
              }}
              aria-label={`GitHub: ${project.title}`}
              onMouseEnter={hoverCyan}
              onMouseLeave={hoverReset("#e8eaf0")}
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex gap-2">
          <span
            className="border px-2 py-0.5 text-[9px] tracking-[2px]"
            style={{
              color: sc.color,
              borderColor: sc.border,
              background: sc.bg,
              textTransform: "uppercase",
            }}
          >
            {statusLabel(project.status, locale)}
          </span>
          <span
            className="border px-2 py-0.5 text-[9px] tracking-[2px]"
            style={{
              color: cc,
              borderColor: `${cc}44`,
              background: `${cc}0d`,
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
        </div>

        <h2 className="mb-2 text-base font-bold tracking-wide" style={{ color: "#e8eaf0" }}>
          {project.title}
        </h2>

        <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {project.shortDescription[locale]}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="border px-2 py-0.5 text-[9px] tracking-[1.5px]"
              style={{
                color: "rgba(0,255,180,0.6)",
                borderColor: "rgba(0,255,180,0.12)",
                background: "rgba(0,255,180,0.03)",
                textTransform: "uppercase",
              }}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              className="border px-2 py-0.5 text-[9px] tracking-[1.5px]"
              style={{
                color: "#445566",
                borderColor: "rgba(68,85,102,0.3)",
                textTransform: "uppercase",
              }}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="border-t pt-4" style={{ borderColor: `${glowColor}18` }}>
          <Link
            href={`/projects/${project.slug}`}
            className="text-[10px] tracking-[2px] transition-colors"
            style={{ color: "#445566", textTransform: "uppercase" }}
            onMouseEnter={hoverCyan}
            onMouseLeave={hoverReset("#445566")}
          >
            {t("case_study")} →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProjectsGrid({ projects, locale }: Props) {
  const t = useTranslations("projects");
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      {/* Header */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p
          className="mb-3 text-[11px] tracking-[3px]"
          style={{ color: "#00ffb4", textTransform: "uppercase" }}
        >
          {t("label")}
        </p>
        <h1
          className="mb-3 text-3xl font-bold tracking-tight lg:text-4xl"
          style={{ color: "#e8eaf0" }}
        >
          {t("page_title")}
        </h1>
        <p className="max-w-xl text-sm leading-relaxed" style={{ color: "#8899aa" }}>
          {t("page_description")}
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        className="mb-10 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {FILTERS.map((f) => {
          const isActive = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className="border px-4 py-1.5 text-[10px] tracking-[2px] transition-all"
              style={{
                textTransform: "uppercase",
                color: isActive ? "#050810" : "#8899aa",
                background: isActive ? "#00ffb4" : "transparent",
                borderColor: isActive ? "#00ffb4" : "rgba(136,153,170,0.2)",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
              }}
            >
              {locale === "pl" ? f.labelPl : f.labelEn}
            </button>
          );
        })}
        <span
          className="ml-auto self-center text-[10px] tracking-[2px]"
          style={{ color: "#445566", textTransform: "uppercase" }}
        >
          {filtered.length} {locale === "pl" ? "projektów" : "projects"}
        </span>
      </motion.div>

      {/* Grid — AnimatePresence na całym gridzie, nie na kartach */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={active}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} locale={locale} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            className="py-24 text-center text-sm"
            style={{ color: "#445566" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {t("no_results")}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
