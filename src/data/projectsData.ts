import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ticket-dashboard",
    title: "Support Tickets Dashboard",
    shortDescription: {
      en: "Full-stack support ticket management system with role-based access, real-time filtering and Cloudinary image uploads.",
      pl: "Fullstackowy system zarządzania zgłoszeniami z dostępem opartym na rolach, filtrowaniem i uploadem zdjęć przez Cloudinary.",
    },
    longDescription: {
      en: "A production-ready support ticket platform built with Next.js App Router. Features role-based access control (admin/agent/user), advanced filtering and sorting, Cloudinary image attachments, API routes with Zod validation, and comprehensive E2E tests with Playwright.",
      pl: "Produkcyjny system ticketów wsparcia zbudowany w Next.js App Router. Zawiera kontrolę dostępu opartą na rolach (admin/agent/user), zaawansowane filtrowanie i sortowanie, załączniki przez Cloudinary, API routes z walidacją Zod oraz kompleksowe testy E2E z Playwright.",
    },
    category: "fullstack",
    status: "live",
    difficulty: "advanced",
    featured: true,
    priority: 1,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Playwright",
      "Cloudinary",
      "React Hook Form",
    ],
    features: [
      {
        en: "Role-based access control (Admin / Agent / User)",
        pl: "Kontrola dostępu oparta na rolach (Admin / Agent / User)",
      },
      {
        en: "Advanced filtering, sorting and search",
        pl: "Zaawansowane filtrowanie, sortowanie i wyszukiwanie",
      },
      {
        en: "Image attachments via Cloudinary",
        pl: "Załączniki zdjęć przez Cloudinary",
      },
      {
        en: "API routes with Zod validation",
        pl: "API routes z walidacją Zod",
      },
      {
        en: "E2E tests with Playwright",
        pl: "Testy E2E z Playwright",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to protect routes based on user role without a backend?",
          pl: "Jak chronić trasy na podstawie roli użytkownika bez backendu?",
        },
        decision: {
          en: "Used Next.js middleware with session-based role checking and redirect logic.",
          pl: "Użyłem middleware Next.js z weryfikacją roli z sesji i logiką przekierowania.",
        },
        result: {
          en: "Clean separation of access levels without duplicating logic in every page.",
          pl: "Czyste rozdzielenie poziomów dostępu bez duplikowania logiki na każdej stronie.",
        },
      },
      {
        problem: {
          en: "How to validate API data consistently on both client and server?",
          pl: "Jak spójnie walidować dane API zarówno po stronie klienta jak i serwera?",
        },
        decision: {
          en: "Shared Zod schemas used in React Hook Form and API route handlers.",
          pl: "Współdzielone schematy Zod używane w React Hook Form i handlerach API route.",
        },
        result: {
          en: "Single source of truth for validation, no duplicated rules.",
          pl: "Jedno źródło prawdy dla walidacji, brak powielonych reguł.",
        },
      },
    ],
    testingStrategy: {
      unit: [
        { en: "Ticket filtering logic", pl: "Logika filtrowania ticketów" },
        { en: "Role permission helpers", pl: "Helpery uprawnień ról" },
      ],
      component: [
        {
          en: "TicketCard renders correct status badge",
          pl: "TicketCard renderuje poprawną odznakę statusu",
        },
        {
          en: "FilterPanel updates query on change",
          pl: "FilterPanel aktualizuje zapytanie przy zmianie",
        },
      ],
      e2e: [
        { en: "Admin can create and close a ticket", pl: "Admin może utworzyć i zamknąć ticket" },
        { en: "User cannot access admin panel", pl: "Użytkownik nie ma dostępu do panelu admina" },
      ],
    },
    challenges: [
      {
        challenge: {
          en: "Cloudinary upload failing silently in production",
          pl: "Upload Cloudinary cicho zawodził w produkcji",
        },
        solution: {
          en: "Added explicit error boundaries and server-side validation of upload response.",
          pl: "Dodałem explicite error boundaries i walidację odpowiedzi uploadu po stronie serwera.",
        },
        result: {
          en: "Reliable uploads with user-friendly error messages.",
          pl: "Niezawodny upload z przyjaznymi komunikatami błędów.",
        },
      },
    ],
    learnings: [
      {
        en: "Role-based access patterns in Next.js",
        pl: "Wzorce dostępu opartego na rolach w Next.js",
      },
      {
        en: "Shared Zod schemas across client and server",
        pl: "Współdzielone schematy Zod między klientem a serwerem",
      },
      { en: "E2E testing with Playwright", pl: "Testy E2E z Playwright" },
    ],
    nextImprovements: [
      {
        en: "Real-time notifications with WebSockets",
        pl: "Powiadomienia w czasie rzeczywistym z WebSockets",
      },
      { en: "Email notifications via Resend", pl: "Powiadomienia email przez Resend" },
    ],
    githubUrl: "https://github.com/yourusername/ticket-dashboard",
    liveUrl: "https://ticket-dashboard.vercel.app",
    image: "/images/projects/ticket-dashboard.png",
    createdAt: "2024-11-01",
  },
  {
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    shortDescription: {
      en: "Minimalist photography portfolio with Cloudinary gallery, category filtering and lightbox viewer.",
      pl: "Minimalistyczne portfolio fotograficzne z galerią Cloudinary, filtrowaniem kategorii i przeglądarką lightbox.",
    },
    longDescription: {
      en: "A clean, performance-focused photography portfolio. Images served through Cloudinary CDN with automatic optimization. Features category filtering, fullscreen lightbox, lazy loading and smooth Framer Motion transitions.",
      pl: "Czyste, wydajne portfolio fotograficzne. Zdjęcia serwowane przez Cloudinary CDN z automatyczną optymalizacją. Filtrowanie kategorii, lightbox pełnoekranowy, lazy loading i płynne przejścia Framer Motion.",
    },
    category: "frontend",
    status: "live",
    difficulty: "intermediate",
    featured: true,
    priority: 2,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    features: [
      {
        en: "Cloudinary CDN with automatic image optimization",
        pl: "Cloudinary CDN z automatyczną optymalizacją zdjęć",
      },
      {
        en: "Category filtering with smooth transitions",
        pl: "Filtrowanie kategorii z płynnymi przejściami",
      },
      { en: "Fullscreen lightbox viewer", pl: "Przeglądarka lightbox pełnoekranowa" },
      { en: "Lazy loading for performance", pl: "Lazy loading dla wydajności" },
    ],
    techDecisions: [],
    testingStrategy: {
      unit: [],
      component: [
        {
          en: "Gallery filters correctly by category",
          pl: "Galeria poprawnie filtruje według kategorii",
        },
      ],
      e2e: [
        {
          en: "User can open and close lightbox",
          pl: "Użytkownik może otworzyć i zamknąć lightbox",
        },
      ],
    },
    challenges: [],
    learnings: [
      { en: "Cloudinary image transformations", pl: "Transformacje zdjęć Cloudinary" },
      { en: "Framer Motion layout animations", pl: "Animacje layoutu Framer Motion" },
    ],
    nextImprovements: [
      { en: "Password-protected client galleries", pl: "Galerie chronione hasłem dla klientów" },
    ],
    githubUrl: "https://github.com/yourusername/photography-portfolio",
    liveUrl: "https://photography.vercel.app",
    image: "/images/projects/photography-portfolio.png",
    createdAt: "2024-09-01",
  },
  {
    slug: "twoj-doradca",
    title: "Twój Doradca",
    shortDescription: {
      en: "Landing page for a financial advisory business with contact form, service sections and SEO optimization.",
      pl: "Landing page dla firmy doradztwa finansowego z formularzem kontaktowym, sekcjami usług i optymalizacją SEO.",
    },
    longDescription: {
      en: "A professional landing page built for a real client. Includes structured service presentation, React Hook Form contact form with Zod validation, SEO metadata, and responsive design optimized for conversion.",
      pl: "Profesjonalna strona landing page zbudowana dla prawdziwego klienta. Zawiera strukturalne przedstawienie usług, formularz kontaktowy React Hook Form z walidacją Zod, metadane SEO i responsywny design zoptymalizowany pod konwersję.",
    },
    category: "landing-page",
    status: "live",
    difficulty: "intermediate",
    featured: true,
    priority: 3,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    features: [
      {
        en: "Service sections with structured content",
        pl: "Sekcje usług ze strukturalną treścią",
      },
      { en: "Contact form with validation", pl: "Formularz kontaktowy z walidacją" },
      { en: "SEO metadata and Open Graph", pl: "Metadane SEO i Open Graph" },
      { en: "Fully responsive layout", pl: "W pełni responsywny layout" },
    ],
    techDecisions: [],
    testingStrategy: { unit: [], component: [], e2e: [] },
    challenges: [],
    learnings: [
      {
        en: "Real client requirements vs developer preferences",
        pl: "Wymagania prawdziwego klienta vs preferencje developera",
      },
      { en: "SEO optimization in Next.js", pl: "Optymalizacja SEO w Next.js" },
    ],
    nextImprovements: [
      { en: "CMS integration for content updates", pl: "Integracja CMS dla aktualizacji treści" },
    ],
    githubUrl: "https://github.com/yourusername/twoj-doradca",
    liveUrl: "https://twojdoradca.pl",
    image: "/images/projects/twoj-doradca.png",
    createdAt: "2024-07-01",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.priority - b.priority);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
