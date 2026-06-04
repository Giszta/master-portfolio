import type { Skill } from "@/types";

export const skills: Skill[] = [
  // ── CORE ──────────────────────────────────────────────────────────
  {
    id: "typescript",
    name: "TypeScript",
    level: "confident",
    category: "core",
    icon: "TS",
    description: {
      en: "Strict mode, generics, utility types, shared schemas with Zod. No any in production code.",
      pl: "Strict mode, generics, typy pomocnicze, współdzielone schematy z Zod. Żadnego any w kodzie produkcyjnym.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio", "twoj-doradca", "postly", "portfolio-website"],
  },
  {
    id: "react",
    name: "React",
    level: "confident",
    category: "core",
    icon: "⚛",
    description: {
      en: "Hooks, custom hooks, context, composition patterns, controlled components. Daily driver.",
      pl: "Hooks, własne hooki, context, wzorce kompozycji, kontrolowane komponenty. Codzienny użytek.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio", "twoj-doradca", "portfolio-website", "sliding-game"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    level: "confident",
    category: "core",
    icon: "N↗",
    description: {
      en: "App Router, RSC, Server Actions, API routes, generateStaticParams, metadata, i18n with next-intl.",
      pl: "App Router, RSC, Server Actions, API routes, generateStaticParams, metadata, i18n z next-intl.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio", "twoj-doradca", "portfolio-website"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    level: "confident",
    category: "core",
    icon: "JS",
    description: {
      en: "ES6+, async/await, closures, event loop, DOM API, Page Visibility API. Solid fundamentals.",
      pl: "ES6+, async/await, domknięcia, event loop, DOM API, Page Visibility API. Solidne podstawy.",
    },
    usedIn: ["sliding-game", "photopage"],
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    level: "confident",
    category: "core",
    icon: "</>",
    description: {
      en: "Semantic HTML5, Flexbox, Grid, CSS custom properties, animations, accessibility attributes.",
      pl: "Semantyczny HTML5, Flexbox, Grid, CSS custom properties, animacje, atrybuty dostępności.",
    },
    usedIn: ["photopage", "photography-portfolio", "twoj-doradca"],
  },

  // ── UI ────────────────────────────────────────────────────────────
  {
    id: "tailwind",
    name: "Tailwind CSS",
    level: "confident",
    category: "ui",
    icon: "TW",
    description: {
      en: "Tailwind v4, custom design tokens, responsive utilities, dark mode. No more writing CSS by hand.",
      pl: "Tailwind v4, własne tokeny designu, responsywne utility, dark mode. Koniec ręcznego pisania CSS.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio", "twoj-doradca", "postly", "portfolio-website"],
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    level: "comfortable",
    category: "ui",
    icon: "FM",
    description: {
      en: "Variants, AnimatePresence, whileInView, layout animations, staggered reveals.",
      pl: "Warianty, AnimatePresence, whileInView, animacje layoutu, staggered reveals.",
    },
    usedIn: ["photography-portfolio", "portfolio-website"],
  },
  {
    id: "cva",
    name: "CVA",
    level: "comfortable",
    category: "ui",
    icon: "CV",
    description: {
      en: "Class Variance Authority for typed component variants — Button, Badge, and design system primitives.",
      pl: "Class Variance Authority dla typowanych wariantów komponentów — Button, Badge i prymitywy design systemu.",
    },
    usedIn: ["ticket-dashboard"],
  },

  // ── STATE & DATA ──────────────────────────────────────────────────
  {
    id: "zod",
    name: "Zod",
    level: "confident",
    category: "state-data",
    icon: "ZD",
    description: {
      en: "Schema validation shared between client forms and server API routes. Single source of truth.",
      pl: "Walidacja schematów współdzielona między formularzami klienta a API routes serwera. Jedno źródło prawdy.",
    },
    usedIn: ["ticket-dashboard", "twoj-doradca"],
  },
  {
    id: "react-hook-form",
    name: "React Hook Form",
    level: "confident",
    category: "state-data",
    icon: "RHF",
    description: {
      en: "Uncontrolled forms with Zod resolvers, field-level validation, submission handling.",
      pl: "Niekontrolowane formularze z resolverami Zod, walidacja na poziomie pola, obsługa submitu.",
    },
    usedIn: ["ticket-dashboard", "twoj-doradca"],
  },
  {
    id: "axios",
    name: "Axios",
    level: "comfortable",
    category: "state-data",
    icon: "AX",
    description: {
      en: "HTTP requests with interceptors, error handling, and request cancellation in Vue projects.",
      pl: "Zapytania HTTP z interceptorami, obsługą błędów i anulowaniem zapytań w projektach Vue.",
    },
    usedIn: ["postly"],
  },
  {
    id: "vuex",
    name: "Vuex",
    level: "learning",
    category: "state-data",
    icon: "VX",
    description: {
      en: "Vue state management — used in Postly for posts store, mutations, and actions.",
      pl: "Zarządzanie stanem Vue — użyte w Postly dla store postów, mutacji i akcji.",
    },
    usedIn: ["postly"],
  },

  // ── TESTING ───────────────────────────────────────────────────────
  {
    id: "vitest",
    name: "Vitest",
    level: "comfortable",
    category: "testing",
    icon: "VT",
    description: {
      en: "Unit tests for pure functions and data helpers. Fast, ESM-native, great DX.",
      pl: "Testy jednostkowe dla czystych funkcji i helperów danych. Szybki, ESM-native, świetne DX.",
    },
    usedIn: ["ticket-dashboard"],
  },
  {
    id: "rtl",
    name: "Testing Library",
    level: "learning",
    category: "testing",
    icon: "🧪",
    description: {
      en: "Component testing with React Testing Library — testing user behavior, not implementation details.",
      pl: "Testy komponentów z React Testing Library — testowanie zachowania użytkownika, nie detali implementacji.",
    },
    usedIn: ["ticket-dashboard"],
  },
  {
    id: "playwright",
    name: "Playwright",
    level: "learning",
    category: "testing",
    icon: "PW",
    description: {
      en: "E2E tests for critical auth flows and ticket lifecycle — learning proper test isolation.",
      pl: "Testy E2E dla krytycznych przepływów autoryzacji i cyklu życia ticketa — nauka właściwej izolacji testów.",
    },
    usedIn: ["ticket-dashboard"],
  },

  // ── TOOLING ───────────────────────────────────────────────────────
  {
    id: "git",
    name: "Git",
    level: "confident",
    category: "tooling",
    icon: "GT",
    description: {
      en: "Conventional commits, branching strategies, PR workflow, resolving merge conflicts.",
      pl: "Conventional commits, strategie branchy, workflow PR, rozwiązywanie konfliktów merge.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio", "twoj-doradca"],
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    level: "comfortable",
    category: "tooling",
    icon: "CL",
    description: {
      en: "CDN image delivery, URL-based transformations, upload API with signed requests.",
      pl: "Dostarczanie zdjęć przez CDN, transformacje przez URL, upload API z podpisanymi zapytaniami.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio"],
  },
  {
    id: "vercel",
    name: "Vercel",
    level: "comfortable",
    category: "tooling",
    icon: "▲",
    description: {
      en: "Deployment, preview URLs, environment variables, edge functions basics.",
      pl: "Deployment, preview URLs, zmienne środowiskowe, podstawy edge functions.",
    },
    usedIn: ["ticket-dashboard", "photography-portfolio", "twoj-doradca", "postly"],
  },
  {
    id: "next-intl",
    name: "next-intl",
    level: "comfortable",
    category: "tooling",
    icon: "i18",
    description: {
      en: "PL/EN routing with locale middleware, server and client translations, localized data.",
      pl: "Routing PL/EN z middleware locale, tłumaczenia serwer i klient, zlokalizowane dane.",
    },
    usedIn: ["ticket-dashboard"],
  },
];

export type SkillCategoryKey = "core" | "ui" | "state-data" | "testing" | "tooling";

export const categoryMeta: Record<SkillCategoryKey, { labelEn: string; labelPl: string; color: string; border: string; glow: string }> = {
  core:        { labelEn: "Core languages & frameworks", labelPl: "Języki i frameworki",         color: "#00ffb4", border: "rgba(0,255,180,0.28)",  glow: "rgba(0,255,180,0.06)"  },
  ui:          { labelEn: "UI & styling",                labelPl: "UI i stylowanie",              color: "#d44dff", border: "rgba(191,0,255,0.28)", glow: "rgba(191,0,255,0.06)" },
  "state-data":{ labelEn: "State & data",               labelPl: "Stan i dane",                  color: "#00b4ff", border: "rgba(0,180,255,0.28)",  glow: "rgba(0,180,255,0.06)"  },
  testing:     { labelEn: "Testing",                     labelPl: "Testowanie",                   color: "#ff6b6b", border: "rgba(255,107,107,0.28)", glow: "rgba(255,107,107,0.06)"},
  tooling:     { labelEn: "Tools & deployment",          labelPl: "Narzędzia i deployment",       color: "#ffb800", border: "rgba(255,184,0,0.28)",  glow: "rgba(255,184,0,0.06)"  },
};

export const levelMeta = {
  confident:   { labelEn: "Confident",   labelPl: "Pewny",       color: "#00ffb4", desc: { en: "Used in multiple production projects", pl: "Używane w wielu projektach produkcyjnych" } },
  comfortable: { labelEn: "Comfortable", labelPl: "Komfortowy",  color: "#00b4ff", desc: { en: "Used in projects, still deepening knowledge", pl: "Używane w projektach, nadal pogłębiam wiedzę" } },
  learning:    { labelEn: "Learning",    labelPl: "W nauce",     color: "#ffb800", desc: { en: "Actively learning, used in practice projects", pl: "Aktywnie się uczę, używane w projektach ćwiczeniowych" } },
};

export function getSkillsByCategory(category: SkillCategoryKey): Skill[] {
  return skills.filter(s => s.category === category);
}

export function getSkillById(id: string): Skill | undefined {
  return skills.find(s => s.id === id);
}
