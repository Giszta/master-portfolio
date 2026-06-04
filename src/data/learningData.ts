import type { LocalizedText } from "@/types";

export type LearningStatus = "done" | "active" | "planned";

export type Resource = {
  title: string;
  type: "book" | "course" | "docs" | "project" | "video";
  url?: string;
};

export type LearningStage = {
  id: string;
  label: string;
  status: LearningStatus;
  year: string;
  description: LocalizedText;
  skills: string[];
  projects: string[];
  keyLearnings: LocalizedText[];
  resources: Resource[];
};

export const learningPath: LearningStage[] = [
  // ── 01 ───────────────────────────────────────────────────────────
  {
    id: "web-fundamentals",
    label: "Web Fundamentals",
    status: "done",
    year: "2022",
    description: {
      en: "Before going deep into frameworks, I studied how the web actually works. Not just syntax — the full picture: browser internals, request/response cycle, DNS, DOM, rendering, REST APIs, DevTools. Documented in 22-section personal notes.",
      pl: "Zanim wszedłem głębiej we frameworki, przestudiowałem jak web faktycznie działa. Nie tylko składnia — pełny obraz: internals przeglądarki, cykl request/response, DNS, DOM, renderowanie, REST API, DevTools. Udokumentowane w 22-sekcyjnych osobistych notatkach.",
    },
    skills: [
      "HTTP / HTTPS",
      "Request & Response",
      "REST API",
      "DNS",
      "DOM",
      "JSON",
      "CSR / SSR / SSG",
      "cookies",
      "localStorage / sessionStorage",
      "DevTools",
      "fetch API",
      "URL structure",
    ],
    projects: [],
    keyLearnings: [
      {
        en: "Understanding the browser's full rendering pipeline — from URL to pixels — changes how you think about performance",
        pl: "Zrozumienie pełnego pipeline renderowania przeglądarki — od URL do pikseli — zmienia myślenie o wydajności",
      },
      {
        en: "HTTP is stateless — cookies and localStorage solve the same problem in different ways, for different purposes",
        pl: "HTTP jest bezstanowy — cookies i localStorage rozwiązują ten sam problem na różne sposoby, do różnych celów",
      },
      {
        en: "CSR, SSR, SSG are not competing — they're tools for different use cases. Next.js lets you choose per page",
        pl: "CSR, SSR, SSG nie konkurują — to narzędzia do różnych przypadków. Next.js pozwala wybrać per strona",
      },
      {
        en: "DevTools Network tab is the most useful debugging tool for frontend-backend communication",
        pl: "Zakładka Network w DevTools to najużyteczniejsze narzędzie do debugowania komunikacji frontend-backend",
      },
    ],
    resources: [
      {
        title: "MDN Web Docs — HTTP",
        type: "docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
      },
      {
        title: "javascript.info — Network requests",
        type: "docs",
        url: "https://javascript.info/network",
      },
      { title: "Personal notes — Fundamenty webu (22 sections)", type: "project" },
    ],
  },

  // ── 02 ───────────────────────────────────────────────────────────
  {
    id: "html",
    label: "HTML",
    status: "done",
    year: "2022",
    description: {
      en: "Semantic HTML5 as a foundation — not just tags, but understanding why semantics matter for accessibility, SEO and maintainability. Forms, validation, ARIA basics, document structure.",
      pl: "Semantyczny HTML5 jako fundament — nie tylko tagi, ale zrozumienie dlaczego semantyka ma znaczenie dla dostępności, SEO i utrzymywalności. Formularze, walidacja, podstawy ARIA, struktura dokumentu.",
    },
    skills: [
      "Semantic HTML5",
      "Document structure",
      "Forms & inputs",
      "HTML validation",
      "Accessibility attributes",
      "ARIA basics",
      "header / main / section / article / nav / footer",
    ],
    projects: ["photopage"],
    keyLearnings: [
      {
        en: "Semantic tags aren't just names — they carry meaning for screen readers, search engines, and developers",
        pl: "Tagi semantyczne to nie tylko nazwy — niosą znaczenie dla czytników ekranu, wyszukiwarek i developerów",
      },
      {
        en: "A well-structured form with correct labels is an accessibility feature, not just styling",
        pl: "Dobrze zbudowany formularz z poprawnymi labelami to funkcja dostępności, nie tylko stylowanie",
      },
      {
        en: "button vs a is not a style question — it's a semantic and accessibility question",
        pl: "button vs a to nie kwestia stylu — to kwestia semantyki i dostępności",
      },
    ],
    resources: [
      {
        title: "MDN — HTML basics",
        type: "docs",
        url: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      },
      { title: "web.dev — Learn HTML", type: "docs", url: "https://web.dev/learn/html" },
    ],
  },

  // ── 03 ───────────────────────────────────────────────────────────
  {
    id: "css",
    label: "CSS",
    status: "done",
    year: "2022",
    description: {
      en: "CSS from box model through Flexbox and Grid to animations, custom properties and responsive design. Learned to reproduce layouts from designs, build reusable UI patterns and write CSS that scales.",
      pl: "CSS od box model przez Flexbox i Grid po animacje, custom properties i responsywny design. Nauka odtwarzania layoutów z projektów, budowania reużywalnych wzorców UI i pisania CSS który się skaluje.",
    },
    skills: [
      "Box model",
      "Flexbox",
      "CSS Grid",
      "CSS custom properties",
      "Media queries",
      "Responsive design",
      "Animations & transitions",
      "Pseudo-classes & pseudo-elements",
      "Specificity",
      "z-index & positioning",
    ],
    projects: ["photopage", "twoj-doradca"],
    keyLearnings: [
      {
        en: "Flexbox is for 1D layouts, Grid is for 2D — they solve different problems and work well together",
        pl: "Flexbox jest do layoutów 1D, Grid do 2D — rozwiązują różne problemy i dobrze ze sobą współpracują",
      },
      {
        en: "CSS custom properties enable consistent theming without preprocessors",
        pl: "CSS custom properties umożliwiają spójne temowanie bez preprocesorów",
      },
      {
        en: "Mobile-first with min-width queries is cleaner than max-width desktop-first",
        pl: "Mobile-first z zapytaniami min-width jest czystsze niż desktop-first z max-width",
      },
    ],
    resources: [
      { title: "Kevin Powell — CSS tutorials", type: "video" },
      {
        title: "CSS Tricks — A Complete Guide to Flexbox",
        type: "docs",
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox",
      },
      { title: "MDN — CSS", type: "docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    ],
  },

  // ── 04 ───────────────────────────────────────────────────────────
  {
    id: "javascript",
    label: "JavaScript",
    status: "done",
    year: "2022–2023",
    description: {
      en: "Deep vanilla JS — ES6+, closures, async/await, DOM manipulation, array methods, event handling, and browser APIs like Page Visibility. No frameworks — just understanding the foundation that React and Next.js build on.",
      pl: "Głęboki czysty JS — ES6+, domknięcia, async/await, manipulacja DOM, metody tablic, obsługa zdarzeń i API przeglądarki jak Page Visibility. Bez frameworków — tylko zrozumienie fundamentu na którym stoją React i Next.js.",
    },
    skills: [
      "ES6+",
      "async/await",
      "Closures",
      "DOM API",
      "Event handling",
      "Array methods (map/filter/reduce)",
      "fetch",
      "Promise",
      "try/catch",
      "Modules",
      "Destructuring",
      "Page Visibility API",
    ],
    projects: ["photopage", "sliding-game"],
    keyLearnings: [
      {
        en: "Understanding closures unlocks callbacks, event handlers and the module pattern",
        pl: "Zrozumienie domknięć otwiera callbacki, handlery zdarzeń i wzorzec modułu",
      },
      {
        en: "The event loop explains why async JS behaves the way it does — setTimeout 0 isn't instant",
        pl: "Event loop wyjaśnia dlaczego asynchroniczny JS zachowuje się tak jak się zachowuje — setTimeout 0 nie jest natychmiastowy",
      },
      {
        en: "Browser APIs are powerful and underused — Page Visibility saved the slideshow timer from accumulating in background tabs",
        pl: "API przeglądarki są potężne i niedoceniane — Page Visibility uratował timer slideshowa przed akumulacją w tle",
      },
    ],
    resources: [
      { title: "You Don't Know JS (Kyle Simpson)", type: "book" },
      { title: "javascript.info", type: "docs", url: "https://javascript.info" },
      { title: "MDN — JavaScript Guide", type: "docs" },
    ],
  },

  // ── 05 ───────────────────────────────────────────────────────────
  {
    id: "git",
    label: "Git & GitHub",
    status: "done",
    year: "2023",
    description: {
      en: "Working like a real developer from the start — branches, meaningful commits, pull requests, .gitignore, clean repo structure. Conventional commits for clear history. All portfolio projects are on GitHub.",
      pl: "Praca jak prawdziwy developer od początku — branche, sensowne commity, pull requesty, .gitignore, czysta struktura repo. Conventional commits dla przejrzystej historii. Wszystkie projekty portfolio są na GitHubie.",
    },
    skills: [
      "git init / clone / add / commit / push / pull",
      "Branching & merging",
      "Rebase basics",
      "Conflict resolution",
      "Pull requests",
      ".gitignore",
      "Conventional commits",
      "README",
    ],
    projects: [
      "ticket-dashboard",
      "photography-portfolio",
      "twoj-doradca",
      "postly",
      "portfolio-website",
    ],
    keyLearnings: [
      {
        en: "A commit message should explain why, not what — the diff already shows what changed",
        pl: "Commit message powinien wyjaśniać dlaczego, nie co — diff już pokazuje co się zmieniło",
      },
      {
        en: "Branching early makes rebasing and PRs cleaner — main should always be deployable",
        pl: "Wcześnie branchowanie sprawia że rebase i PR są czystsze — main powinien zawsze być deployowalny",
      },
      {
        en: "A clean README is part of the project, not an afterthought",
        pl: "Czysty README to część projektu, nie afterthought",
      },
    ],
    resources: [
      { title: "Pro Git (Scott Chacon)", type: "book", url: "https://git-scm.com/book/en/v2" },
      { title: "GitHub Docs", type: "docs", url: "https://docs.github.com" },
    ],
  },

  // ── 06 ───────────────────────────────────────────────────────────
  {
    id: "typescript",
    label: "TypeScript",
    status: "done",
    year: "2023–2024",
    description: {
      en: "Added TypeScript to React projects. Basic types → generics → utility types → discriminated unions → strict mode. Zod for runtime validation that mirrors compile-time types. No any in production code.",
      pl: "Dodałem TypeScript do projektów React. Podstawowe typy → generics → typy pomocnicze → discriminated unions → strict mode. Zod do walidacji runtime odzwierciedlającej typy compile-time. Żadnego any w kodzie produkcyjnym.",
    },
    skills: [
      "TypeScript strict mode",
      "Basic types",
      "Type & interface",
      "Generics",
      "Utility types",
      "Discriminated unions",
      "Type guards",
      "Type inference",
      "Zod",
      "unknown vs any",
    ],
    projects: ["twoj-doradca", "portfolio-website", "postly", "ticket-dashboard"],
    keyLearnings: [
      {
        en: "TypeScript is documentation that the compiler enforces — types tell the story of the data",
        pl: "TypeScript to dokumentacja którą kompilator wymusza — typy opowiadają historię danych",
      },
      {
        en: "Zod schemas bridge runtime data and compile-time types — one schema, one source of truth",
        pl: "Schematy Zod łączą dane runtime z typami compile-time — jeden schemat, jedno źródło prawdy",
      },
      {
        en: "noUnusedLocals and noUnusedParameters catch more bugs than expected during refactoring",
        pl: "noUnusedLocals i noUnusedParameters wyłapują więcej bugów niż oczekiwano przy refactoringu",
      },
    ],
    resources: [
      {
        title: "Total TypeScript (Matt Pocock)",
        type: "course",
        url: "https://www.totaltypescript.com",
      },
      { title: "TypeScript Handbook", type: "docs", url: "https://www.typescriptlang.org/docs" },
      { title: "Zod docs", type: "docs", url: "https://zod.dev" },
    ],
  },

  // ── 07 ───────────────────────────────────────────────────────────
  {
    id: "react",
    label: "React",
    status: "done",
    year: "2023",
    description: {
      en: "First framework after JS fundamentals. Hooks, component composition, state lifting, custom hooks, React context. Controlled inputs, conditional rendering, lists with keys, loading/error/empty states.",
      pl: "Pierwszy framework po podstawach JS. Hooks, kompozycja komponentów, unoszenie stanu, własne hooki, React context. Kontrolowane inputy, warunkowe renderowanie, listy z kluczami, stany loading/error/empty.",
    },
    skills: [
      "useState / useEffect",
      "useMemo / useCallback",
      "Custom hooks",
      "Component composition",
      "React context",
      "Lifting state",
      "Controlled inputs",
      "Conditional rendering",
      "Error boundaries",
    ],
    projects: ["sliding-game", "photopage", "photography-portfolio"],
    keyLearnings: [
      {
        en: "React's mental model — UI is a pure function of state. When state changes, UI re-renders",
        pl: "Model mentalny React — UI to czysta funkcja stanu. Gdy stan się zmienia, UI re-renderuje się",
      },
      {
        en: "Custom hooks are just functions — they extract logic, not components. The hook boundary is about reuse",
        pl: "Własne hooki to po prostu funkcje — wydzielają logikę, nie komponenty. Granica hooka to kwestia reużycia",
      },
      {
        en: "key in lists is critical for React's reconciliation — missing or wrong keys cause subtle bugs",
        pl: "key w listach jest krytyczny dla reconciliation React — brakujące lub złe klucze powodują subtelne bugi",
      },
    ],
    resources: [
      { title: "React docs — react.dev", type: "docs", url: "https://react.dev" },
      { title: "Scrimba React course", type: "course" },
    ],
  },

  // ── 08 ───────────────────────────────────────────────────────────
  {
    id: "nextjs",
    label: "Next.js",
    status: "done",
    year: "2024",
    description: {
      en: "App Router, Server Components, API routes, generateStaticParams, metadata API, middleware. i18n with next-intl for PL/EN routing. This portfolio is the most advanced Next.js project — built with production mindset.",
      pl: "App Router, Server Components, API routes, generateStaticParams, metadata API, middleware. i18n z next-intl dla routingu PL/EN. To portfolio jest dotychczas najbardziej zaawansowanym projektem Next.js — zbudowanym z myśleniem produkcyjnym.",
    },
    skills: [
      "App Router",
      "Server Components",
      "Client Components",
      "API Routes",
      "generateStaticParams",
      "Metadata API",
      "Middleware",
      "next-intl",
      "Tailwind CSS v4",
      "SSR / SSG / ISR",
    ],
    projects: ["ticket-dashboard", "twoj-doradca", "photography-portfolio", "portfolio-website"],
    keyLearnings: [
      {
        en: "Server Components change the mental model — fetch on the server, send rendered HTML, hydrate only what needs interactivity",
        pl: "Server Components zmieniają model mentalny — fetch na serwerze, wyślij wyrenderowany HTML, hydruj tylko to co potrzebuje interaktywności",
      },
      {
        en: "generateStaticParams enables SSG for dynamic routes without sacrificing flexibility",
        pl: "generateStaticParams umożliwia SSG dla dynamicznych tras bez poświęcania elastyczności",
      },
      {
        en: "Middleware is the right layer for auth redirects — not every page component",
        pl: "Middleware to właściwa warstwa dla przekierowań auth — nie każdy komponent strony",
      },
    ],
    resources: [
      { title: "Next.js docs", type: "docs", url: "https://nextjs.org/docs" },
      { title: "next-intl docs", type: "docs", url: "https://next-intl.dev" },
    ],
  },

  // ── 09 ───────────────────────────────────────────────────────────
  {
    id: "api-data",
    label: "API & Working with data",
    status: "done",
    year: "2024",
    description: {
      en: "Connecting frontends to real APIs — HTTP methods, loading/error/success/empty state handling, form submission, data transformation, filtering, sorting and pagination. Used in every production project.",
      pl: "Podłączanie frontendów do prawdziwych API — metody HTTP, obsługa stanów loading/error/success/empty, submit formularzy, transformacja danych, filtrowanie, sortowanie i paginacja. Używane w każdym projekcie produkcyjnym.",
    },
    skills: [
      "GET / POST / PUT / PATCH / DELETE",
      "fetch / Axios",
      "Loading state",
      "Error handling",
      "Empty state",
      "Data transformation",
      "Filtering & sorting",
      "Pagination",
      "Form submission",
      "API documentation reading",
    ],
    projects: ["ticket-dashboard", "twoj-doradca", "postly"],
    keyLearnings: [
      {
        en: "Every API call has 4 states: loading, success, error, empty — all 4 must be handled in the UI",
        pl: "Każde wywołanie API ma 4 stany: loading, success, error, empty — wszystkie 4 muszą być obsłużone w UI",
      },
      {
        en: "Data from an API rarely matches the shape your UI needs — transformation is part of the job",
        pl: "Dane z API rzadko mają kształt którego potrzebuje UI — transformacja to część pracy",
      },
      {
        en: "Shared Zod schemas between frontend forms and API handlers eliminate duplicated validation logic",
        pl: "Współdzielone schematy Zod między formularzami frontendu a handlerami API eliminują zduplikowaną logikę walidacji",
      },
    ],
    resources: [
      {
        title: "JSONPlaceholder — fake REST API for practice",
        type: "docs",
        url: "https://jsonplaceholder.typicode.com",
      },
      { title: "Zod — runtime schema validation", type: "docs", url: "https://zod.dev" },
    ],
  },

  // ── 10 ───────────────────────────────────────────────────────────
  {
    id: "vue",
    label: "Vue 3",
    status: "done",
    year: "2024",
    description: {
      en: "Learned Vue 3 deliberately as a React developer — to understand how another framework solves the same problems differently. Composition API, Vuex, Axios. Built Postly as the practice vehicle.",
      pl: "Nauczyłem się Vue 3 świadomie jako developer React — żeby zrozumieć jak inny framework rozwiązuje te same problemy inaczej. Composition API, Vuex, Axios. Postly jako projekt ćwiczeniowy.",
    },
    skills: [
      "Vue 3 Composition API",
      "Vuex",
      "Axios",
      "Vue Router",
      "Vue template syntax",
      "Reactivity system (ref / reactive)",
    ],
    projects: ["postly"],
    keyLearnings: [
      {
        en: "Vue's reactivity is more explicit than React's — ref() for primitives, reactive() for objects",
        pl: "Reaktywność Vue jest bardziej explicite niż React — ref() dla prymitywów, reactive() dla obiektów",
      },
      {
        en: "Vuex mutations/actions/getters map well to Redux reducers/selectors — state management patterns are universal",
        pl: "Mutacje/akcje/getters Vuex mapują się dobrze na reducery/selektory Redux — wzorce zarządzania stanem są uniwersalne",
      },
      {
        en: "Learning a second framework deepens understanding of the first — and of frameworks as a concept",
        pl: "Nauka drugiego frameworka pogłębia zrozumienie pierwszego — i frameworków jako konceptu",
      },
    ],
    resources: [
      { title: "Vue 3 official docs", type: "docs", url: "https://vuejs.org" },
      { title: "Vuex docs", type: "docs", url: "https://vuex.vuejs.org" },
    ],
  },

  // ── 11 ───────────────────────────────────────────────────────────
  {
    id: "accessibility",
    label: "Accessibility",
    status: "active",
    year: "2025",
    description: {
      en: "Building apps that work for everyone — semantic HTML, keyboard navigation, ARIA labels, focus management, color contrast, accessible forms. Currently applying it consistently across all new components.",
      pl: "Budowanie aplikacji które działają dla wszystkich — semantyczny HTML, nawigacja klawiaturą, ARIA labels, zarządzanie focusem, kontrast kolorów, dostępne formularze. Aktualnie stosowane konsekwentnie we wszystkich nowych komponentach.",
    },
    skills: [
      "Semantic HTML",
      "Keyboard navigation",
      "Focus management",
      "ARIA labels & roles",
      "Color contrast",
      "Accessible forms",
      "Screen reader basics",
      "focus-visible",
    ],
    projects: ["ticket-dashboard", "twoj-doradca"],
    keyLearnings: [
      {
        en: "Accessibility is not a feature to add at the end — it's a quality constraint like performance",
        pl: "Dostępność to nie funkcja do dodania na końcu — to ograniczenie jakości jak wydajność",
      },
      {
        en: "focus-visible is the right CSS selector for keyboard focus styles — not :focus which fires on click too",
        pl: "focus-visible to właściwy selektor CSS dla stylów focusa klawiatury — nie :focus który odpala się też na kliknięcie",
      },
    ],
    resources: [
      {
        title: "web.dev — Learn Accessibility",
        type: "docs",
        url: "https://web.dev/learn/accessibility",
      },
      {
        title: "MDN — Accessibility",
        type: "docs",
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
      },
    ],
  },

  // ── 12 ───────────────────────────────────────────────────────────
  {
    id: "testing",
    label: "Testing",
    status: "active",
    year: "2025",
    description: {
      en: "Building a solid testing practice — Vitest for unit tests, React Testing Library for component tests, Playwright for E2E. This portfolio already has 52 passing tests. Focus: test behavior, not implementation.",
      pl: "Budowanie solidnej praktyki testowania — Vitest dla testów jednostkowych, React Testing Library dla testów komponentów, Playwright dla E2E. To portfolio ma już 52 przechodzące testy. Fokus: testuj zachowanie, nie implementację.",
    },
    skills: [
      "Vitest",
      "React Testing Library",
      "Playwright",
      "Unit tests",
      "Component tests",
      "E2E tests",
      "Test isolation",
      "Mocking",
      "Coverage reports",
    ],
    projects: ["ticket-dashboard"],
    keyLearnings: [
      {
        en: "Test behavior, not implementation — a test that breaks on refactoring without behavior change is a bad test",
        pl: "Testuj zachowanie, nie implementację — test który psuje się przy refactoringu bez zmiany zachowania to zły test",
      },
      {
        en: "Unit tests for pure functions first — they're the fastest, most reliable and easiest to maintain",
        pl: "Najpierw testy jednostkowe dla czystych funkcji — są najszybsze, najbardziej niezawodne i najłatwiejsze do utrzymania",
      },
      {
        en: "52 passing tests — consistency beats perfection. A few good tests today beat a perfect suite never written",
        pl: "52 przechodzące testy — konsekwencja bije perfekcję. Kilka dobrych testów dziś bije idealny zestaw nigdy nienapisany",
      },
    ],
    resources: [
      { title: "Testing Library docs", type: "docs", url: "https://testing-library.com" },
      { title: "Playwright docs", type: "docs", url: "https://playwright.dev" },
      { title: "Vitest docs", type: "docs", url: "https://vitest.dev" },
    ],
  },

  // ── 13 ───────────────────────────────────────────────────────────
  {
    id: "tooling",
    label: "Tools & Code quality",
    status: "done",
    year: "2024",
    description: {
      en: "Working like it's a real project — ESLint, Prettier with Tailwind plugin, npm scripts for type-check/test/build/format, DevTools for debugging. Consistent tooling across all portfolio projects.",
      pl: "Praca jakby to był prawdziwy projekt — ESLint, Prettier z pluginem Tailwind, skrypty npm dla type-check/test/build/format, DevTools do debugowania. Spójny tooling we wszystkich projektach portfolio.",
    },
    skills: [
      "ESLint",
      "Prettier",
      "npm / package.json scripts",
      "TypeScript strict mode",
      "DevTools debugging",
      "Terminal basics",
      "Environment variables",
      "VS Code setup",
    ],
    projects: ["ticket-dashboard", "portfolio-website"],
    keyLearnings: [
      {
        en: "Linting catches class of bugs before runtime — ESLint noUnusedLocals finds dead code immediately",
        pl: "Linting wyłapuje klasy bugów przed runtime — ESLint noUnusedLocals znajduje martwy kod natychmiast",
      },
      {
        en: "Prettier with Tailwind plugin sorts utility classes automatically — no manual ordering debate",
        pl: "Prettier z pluginem Tailwind sortuje klasy utility automatycznie — żadnej debaty o ręcznej kolejności",
      },
      {
        en: "A validate script (type-check + test + build) before every commit catches integration issues early",
        pl: "Skrypt validate (type-check + test + build) przed każdym commitem wyłapuje problemy integracji wcześnie",
      },
    ],
    resources: [
      { title: "ESLint docs", type: "docs", url: "https://eslint.org/docs" },
      { title: "Prettier docs", type: "docs", url: "https://prettier.io/docs" },
    ],
  },

  // ── 14 ───────────────────────────────────────────────────────────
  {
    id: "performance-seo",
    label: "Performance & SEO",
    status: "planned",
    year: "2025",
    description: {
      en: "Going deeper into what makes apps fast and findable — Core Web Vitals, lazy loading, bundle analysis, image optimization, Next.js metadata API, semantic structure for search engines.",
      pl: "Głębsze wejście w to co sprawia że aplikacje są szybkie i znajdowalne — Core Web Vitals, lazy loading, analiza bundle, optymalizacja obrazów, metadata API Next.js, semantyczna struktura dla wyszukiwarek.",
    },
    skills: [
      "Core Web Vitals (LCP / CLS / FID)",
      "Lazy loading",
      "Bundle analysis",
      "Image optimization",
      "next/image",
      "Metadata API",
      "Semantic SEO structure",
      "Open Graph",
      "Lighthouse",
    ],
    projects: [],
    keyLearnings: [],
    resources: [
      { title: "web.dev — Performance", type: "docs", url: "https://web.dev/performance" },
      {
        title: "Next.js — Optimizing",
        type: "docs",
        url: "https://nextjs.org/docs/app/building-your-application/optimizing",
      },
    ],
  },

  // ── 15 ───────────────────────────────────────────────────────────
  {
    id: "fullstack",
    label: "Full-stack basics",
    status: "planned",
    year: "2025+",
    description: {
      en: "Going beyond API routes — databases, proper auth, deployment pipelines. Prisma, PostgreSQL, NextAuth. Already have foundation with Cloudinary, Vercel and Next.js API routes.",
      pl: "Wyjście poza API routes — bazy danych, właściwa autoryzacja, pipeline'y deployment. Prisma, PostgreSQL, NextAuth. Mam już fundament z Cloudinary, Vercel i API routes Next.js.",
    },
    skills: [
      "Prisma ORM",
      "PostgreSQL",
      "NextAuth",
      "Docker basics",
      "CI/CD pipelines",
      "Environment management",
      "Database migrations",
    ],
    projects: [],
    keyLearnings: [],
    resources: [
      { title: "Prisma docs", type: "docs", url: "https://prisma.io" },
      { title: "PostgreSQL tutorial", type: "docs", url: "https://www.postgresql.org/docs" },
      { title: "NextAuth docs", type: "docs", url: "https://next-auth.js.org" },
    ],
  },
];

export const statusMeta = {
  done: {
    color: "#00ffb4",
    border: "rgba(0,255,180,0.25)",
    bg: "rgba(0,255,180,0.05)",
    symbol: "✓",
    labelEn: "Done",
    labelPl: "Ukończone",
  },
  active: {
    color: "#d44dff",
    border: "rgba(191,0,255,0.35)",
    bg: "rgba(191,0,255,0.08)",
    symbol: "▶",
    labelEn: "Active",
    labelPl: "Aktywne",
  },
  planned: {
    color: "#445566",
    border: "rgba(68,85,102,0.2)",
    bg: "transparent",
    symbol: "○",
    labelEn: "Planned",
    labelPl: "Planowane",
  },
};

export const resourceTypeMeta = {
  book: { icon: "📖", labelEn: "Book", labelPl: "Książka" },
  course: { icon: "🎓", labelEn: "Course", labelPl: "Kurs" },
  docs: { icon: "📄", labelEn: "Docs", labelPl: "Docs" },
  project: { icon: "⚙", labelEn: "Project", labelPl: "Projekt" },
  video: { icon: "▶", labelEn: "Video", labelPl: "Video" },
};
