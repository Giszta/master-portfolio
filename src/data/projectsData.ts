import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ticket-dashboard",
    title: "Support Tickets Dashboard",
    shortDescription: {
      en: "Full-stack ticket management with role-based access, filtering and Cloudinary uploads.",
      pl: "Fullstackowy system ticketów z dostępem opartym na rolach i uploadem przez Cloudinary.",
    },
    longDescription: {
      en: "A production-ready support ticket platform built with Next.js App Router. Features role-based access control (admin/agent/user), advanced filtering and sorting, Cloudinary image attachments, API routes with Zod validation, and E2E tests with Playwright.",
      pl: "Produkcyjny system ticketów wsparcia zbudowany w Next.js App Router. Zawiera kontrolę dostępu opartą na rolach (admin/agent/user), zaawansowane filtrowanie, załączniki przez Cloudinary, API routes z walidacją Zod oraz testy E2E z Playwright.",
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
        en: "Advanced filtering, sorting and full-text search",
        pl: "Zaawansowane filtrowanie, sortowanie i wyszukiwanie pełnotekstowe",
      },
      { en: "Image attachments via Cloudinary CDN", pl: "Załączniki zdjęć przez Cloudinary CDN" },
      { en: "API routes with Zod schema validation", pl: "API routes z walidacją schematów Zod" },
      {
        en: "E2E tests covering critical user flows",
        pl: "Testy E2E pokrywające krytyczne przepływy użytkownika",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to protect routes based on user role without a dedicated backend?",
          pl: "Jak chronić trasy na podstawie roli użytkownika bez dedykowanego backendu?",
        },
        decision: {
          en: "Used Next.js middleware with session-based role checking and redirect logic per route group.",
          pl: "Użyłem middleware Next.js z weryfikacją roli z sesji i logiką przekierowania per grupa tras.",
        },
        result: {
          en: "Clean separation of access levels without duplicating auth logic in every page component.",
          pl: "Czyste rozdzielenie poziomów dostępu bez duplikowania logiki autoryzacji na każdej stronie.",
        },
      },
      {
        problem: {
          en: "How to validate API data consistently on both client and server side?",
          pl: "Jak spójnie walidować dane API zarówno po stronie klienta jak i serwera?",
        },
        decision: {
          en: "Shared Zod schemas used in both React Hook Form and API route handlers.",
          pl: "Współdzielone schematy Zod używane zarówno w React Hook Form jak i w handlerach API route.",
        },
        result: {
          en: "Single source of truth for validation rules — no duplication, no drift between client and server.",
          pl: "Jedno źródło prawdy dla reguł walidacji — brak duplikacji i rozbieżności między klientem a serwerem.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Cloudinary uploads failing silently in production environment.",
          pl: "Uploady Cloudinary cicho zawodzące w środowisku produkcyjnym.",
        },
        solution: {
          en: "Added explicit error boundaries, server-side validation of upload response, and user-facing error messages.",
          pl: "Dodałem explicite error boundaries, walidację odpowiedzi uploadu po stronie serwera i czytelne komunikaty błędów.",
        },
        result: {
          en: "Reliable file uploads with graceful degradation and clear feedback on failure.",
          pl: "Niezawodny upload plików z graceful degradation i czytelnym feedbackiem przy błędzie.",
        },
      },
    ],
    learnings: [
      {
        en: "Role-based access patterns in Next.js App Router",
        pl: "Wzorce dostępu opartego na rolach w Next.js App Router",
      },
      {
        en: "Shared Zod schemas across client and server boundaries",
        pl: "Współdzielone schematy Zod między granicami klient-serwer",
      },
      {
        en: "E2E testing with Playwright for auth flows",
        pl: "Testy E2E z Playwright dla przepływów autoryzacji",
      },
      {
        en: "Cloudinary API integration with proper error handling",
        pl: "Integracja Cloudinary API z właściwą obsługą błędów",
      },
    ],
    githubUrl: "https://github.com/Giszta/ticket-dashboard",
    liveUrl: "https://ticket-dashboard.vercel.app",
    image: "/images/projects/ticket-dashboard.png",
    createdAt: "2024-11-01",
  },
  {
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    shortDescription: {
      en: "Minimalist photography portfolio with Cloudinary gallery and lightbox viewer.",
      pl: "Minimalistyczne portfolio fotograficzne z galerią Cloudinary i przeglądarką lightbox.",
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
        en: "Category filtering with smooth animated transitions",
        pl: "Filtrowanie kategorii z płynnymi animowanymi przejściami",
      },
      {
        en: "Fullscreen lightbox with keyboard navigation",
        pl: "Przeglądarka lightbox pełnoekranowa z nawigacją klawiaturą",
      },
      { en: "Lazy loading for optimal performance", pl: "Lazy loading dla optymalnej wydajności" },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to serve high-quality images without sacrificing page performance?",
          pl: "Jak serwować wysokiej jakości zdjęcia bez poświęcania wydajności strony?",
        },
        decision: {
          en: "Cloudinary CDN with automatic format conversion (WebP/AVIF) and responsive transformations via URL parameters.",
          pl: "Cloudinary CDN z automatyczną konwersją formatów (WebP/AVIF) i responsywnymi transformacjami przez parametry URL.",
        },
        result: {
          en: "Images load significantly faster with zero manual optimization work.",
          pl: "Zdjęcia ładują się znacznie szybciej bez ręcznej optymalizacji.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Lightbox breaking scroll position and causing layout shift on mobile.",
          pl: "Lightbox psujący pozycję scrolla i powodujący layout shift na mobile.",
        },
        solution: {
          en: "Used body scroll lock with proper cleanup, and CSS contain property to isolate lightbox from document flow.",
          pl: "Użyłem body scroll lock z właściwym cleanup i właściwości CSS contain do izolacji lightboxa od document flow.",
        },
        result: {
          en: "Smooth lightbox experience on all devices with no layout shift or scroll issues.",
          pl: "Płynne działanie lightboxa na wszystkich urządzeniach bez layout shift i problemów ze scrollem.",
        },
      },
    ],
    learnings: [
      {
        en: "Cloudinary image transformations and responsive delivery",
        pl: "Transformacje zdjęć Cloudinary i responsywne dostarczanie",
      },
      {
        en: "Framer Motion layout animations with AnimatePresence",
        pl: "Animacje layoutu Framer Motion z AnimatePresence",
      },
      { en: "Body scroll management in React", pl: "Zarządzanie scrollem body w React" },
    ],
    githubUrl: "https://github.com/Giszta/photography-portfolio",
    liveUrl: "https://photography.vercel.app",
    image: "/images/projects/photography-portfolio.png",
    createdAt: "2024-09-01",
  },
  {
    slug: "twoj-doradca",
    title: "Twój Doradca",
    shortDescription: {
      en: "Landing page for a financial advisory business with contact form and SEO optimization.",
      pl: "Landing page dla firmy doradztwa finansowego z formularzem kontaktowym i SEO.",
    },
    longDescription: {
      en: "A professional landing page built for a real client in the renewable energy advisory space. Includes structured service presentation, validated contact form, SEO metadata, Open Graph tags, and responsive design optimized for conversion.",
      pl: "Profesjonalna strona landing page zbudowana dla prawdziwego klienta z branży doradztwa OZE. Zawiera strukturalne przedstawienie usług, walidowany formularz kontaktowy, metadane SEO, tagi Open Graph i responsywny design zoptymalizowany pod konwersję.",
    },
    category: "landing-page",
    status: "live",
    difficulty: "intermediate",
    featured: true,
    priority: 3,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod"],
    features: [
      {
        en: "Service sections with structured content hierarchy",
        pl: "Sekcje usług ze strukturalną hierarchią treści",
      },
      {
        en: "Contact form with client-side and server-side validation",
        pl: "Formularz kontaktowy z walidacją po stronie klienta i serwera",
      },
      {
        en: "SEO metadata and Open Graph for social sharing",
        pl: "Metadane SEO i Open Graph dla udostępniania w mediach społecznościowych",
      },
      {
        en: "Fully responsive layout optimized for conversion",
        pl: "W pełni responsywny layout zoptymalizowany pod konwersję",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "Client wanted content updates without touching code — how to balance simplicity with maintainability?",
          pl: "Klient chciał aktualizować treści bez dotykania kodu — jak balansować prostotę z utrzymywalnością?",
        },
        decision: {
          en: "Centralized content in a single TypeScript data file with typed structures — easy to update, no CMS overhead.",
          pl: "Scentralizowana treść w jednym pliku TypeScript z typowanymi strukturami — łatwa do aktualizacji, bez narzutu CMS.",
        },
        result: {
          en: "Client can request content changes as a single file update, no deployment complexity.",
          pl: "Klient może zlecać zmiany treści jako aktualizację jednego pliku, bez złożoności deploymentu.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Balancing client's design preferences with web performance best practices.",
          pl: "Balansowanie preferencji designu klienta z najlepszymi praktykami wydajności webowej.",
        },
        solution: {
          en: "Used Next.js Image component with priority loading for above-fold content, deferred loading for the rest.",
          pl: "Użyłem komponentu Image Next.js z priority loading dla treści above-fold i deferred loading dla reszty.",
        },
        result: {
          en: "Lighthouse score above 90 across all categories while meeting all visual requirements.",
          pl: "Wynik Lighthouse powyżej 90 we wszystkich kategoriach przy spełnieniu wszystkich wymagań wizualnych.",
        },
      },
    ],
    learnings: [
      {
        en: "Real client requirements vs developer preferences",
        pl: "Wymagania prawdziwego klienta vs preferencje developera",
      },
      {
        en: "SEO optimization patterns in Next.js App Router",
        pl: "Wzorce optymalizacji SEO w Next.js App Router",
      },
      {
        en: "Form UX — validation feedback timing and error messaging",
        pl: "UX formularzy — timing feedbacku walidacji i komunikaty błędów",
      },
    ],
    githubUrl: "https://github.com/Giszta/twoj-doradca",
    liveUrl: "https://twojdoradca.pl",
    image: "/images/projects/twoj-doradca.png",
    createdAt: "2024-07-01",
  },
  {
    slug: "postly",
    title: "Postly",
    shortDescription: {
      en: "Minimalist forum-like app built with Vue 3 and TypeScript — posts, pagination, Vuex state management.",
      pl: "Minimalistyczna aplikacja forum zbudowana w Vue 3 i TypeScript — posty, paginacja, zarządzanie stanem Vuex.",
    },
    longDescription: {
      en: "A clean forum-like application built with Vue 3, TypeScript, Vuex, and Tailwind CSS. Fetches posts from JSONPlaceholder API, supports pagination without full page reload, expandable post content with smooth animations, random author assignment, and post deletion. A deliberate practice project to learn Vue 3 ecosystem as a React developer.",
      pl: "Czysta aplikacja forum zbudowana w Vue 3, TypeScript, Vuex i Tailwind CSS. Pobiera posty z JSONPlaceholder API, obsługuje paginację bez przeładowania strony, rozwijalne treści z animacjami, losowe przypisanie autorów i usuwanie postów. Świadomy projekt ćwiczeniowy do nauki ekosystemu Vue 3 jako developer React.",
    },
    category: "practice",
    status: "live",
    difficulty: "intermediate",
    featured: false,
    priority: 4,
    stack: ["Vue 3", "TypeScript", "Vuex", "Axios", "Tailwind CSS"],
    features: [
      {
        en: "Posts fetched from JSONPlaceholder public API",
        pl: "Posty pobierane z publicznego API JSONPlaceholder",
      },
      {
        en: "Pagination — 10 posts per page without full reload",
        pl: "Paginacja — 10 postów na stronę bez przeładowania",
      },
      {
        en: "Expandable/collapsible post content with animation",
        pl: "Rozwijalna/zwijalna treść posta z animacją",
      },
      {
        en: "Random author assignment and post deletion",
        pl: "Losowe przypisanie autorów i usuwanie postów",
      },
      { en: "Modular component architecture", pl: "Modularna architektura komponentów" },
    ],
    techDecisions: [
      {
        problem: {
          en: "As a React developer, how to approach state management in Vue without overcomplicating it?",
          pl: "Jako developer React, jak podejść do zarządzania stanem w Vue bez nadmiernego komplikowania?",
        },
        decision: {
          en: "Used Vuex with a single store module — mirrors Redux/Context patterns familiar from React, making the transition intentional.",
          pl: "Użyłem Vuex z jednym modułem store — odzwierciedla wzorce Redux/Context znane z React, czyniąc przejście świadomym.",
        },
        result: {
          en: "Clean state flow, easy to reason about, and a solid understanding of how Vue's reactivity differs from React.",
          pl: "Czysty przepływ stanu, łatwy do zrozumienia i solidne pojęcie jak reaktywność Vue różni się od React.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Pagination state getting out of sync when posts are deleted mid-page.",
          pl: "Stan paginacji wychodzący z synchronizacji przy usuwaniu postów w środku strony.",
        },
        solution: {
          en: "Computed current page posts from filtered store state, auto-redirecting to previous page when current becomes empty.",
          pl: "Obliczanie postów bieżącej strony z filtrowanego stanu store, automatyczny powrót do poprzedniej strony gdy bieżąca jest pusta.",
        },
        result: {
          en: "Consistent pagination behavior regardless of deletion order or current page position.",
          pl: "Spójne zachowanie paginacji niezależnie od kolejności usuwania i pozycji bieżącej strony.",
        },
      },
    ],
    learnings: [
      {
        en: "Vue 3 Composition API vs React Hooks — key differences",
        pl: "Vue 3 Composition API vs React Hooks — kluczowe różnice",
      },
      {
        en: "Vuex state management patterns compared to Redux/Context",
        pl: "Wzorce zarządzania stanem Vuex w porównaniu do Redux/Context",
      },
      {
        en: "Vue's template syntax and reactivity system",
        pl: "Składnia szablonów Vue i system reaktywności",
      },
      {
        en: "How to approach learning a new framework as a developer",
        pl: "Jak podejść do nauki nowego frameworka jako developer",
      },
    ],
    githubUrl: "https://github.com/Giszta/Postly",
    liveUrl: "https://postly-seven.vercel.app/",
    image: "/images/projects/postly.png",
    createdAt: "2024-05-01",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio v1",
    shortDescription: {
      en: "First version of my personal portfolio — Next.js, Tailwind CSS, Framer Motion, contact form.",
      pl: "Pierwsza wersja mojego portfolio — Next.js, Tailwind CSS, Framer Motion, formularz kontaktowy.",
    },
    longDescription: {
      en: "My first personal portfolio website built to showcase projects, skills and professional background. Features a modern responsive design with Framer Motion animations, project showcase, social links, and a functional contact form. The predecessor to this portfolio — built before I knew about i18n, testing, or proper component architecture.",
      pl: "Moja pierwsza strona portfolio zbudowana do prezentacji projektów, umiejętności i doświadczenia. Nowoczesny responsywny design z animacjami Framer Motion, showcase projektów, linki społecznościowe i działający formularz kontaktowy. Poprzednik tego portfolio — zbudowany zanim poznałem i18n, testy i właściwą architekturę komponentów.",
    },
    category: "frontend",
    status: "live",
    difficulty: "beginner",
    featured: false,
    priority: 5,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      {
        en: "Modern responsive design for all screen sizes",
        pl: "Nowoczesny responsywny design na wszystkie rozmiary ekranu",
      },
      { en: "Framer Motion animations and transitions", pl: "Animacje i przejścia Framer Motion" },
      {
        en: "Project showcase with dynamic content",
        pl: "Showcase projektów z dynamiczną treścią",
      },
      { en: "Contact form with email integration", pl: "Formularz kontaktowy z integracją email" },
      {
        en: "Social media links and personal branding",
        pl: "Linki społecznościowe i personal branding",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "First real Next.js project — how to structure it without overengineering?",
          pl: "Pierwszy prawdziwy projekt Next.js — jak go ustrukturyzować bez nadmiernej inżynierii?",
        },
        decision: {
          en: "Flat component structure with no abstractions — prioritized shipping over architecture at this stage of learning.",
          pl: "Płaska struktura komponentów bez abstrakcji — priorytet dostarczenia nad architekturą na tym etapie nauki.",
        },
        result: {
          en: "Portfolio live and functional. The technical debt became the motivation to build a better v2 (this site).",
          pl: "Portfolio live i funkcjonalne. Dług techniczny stał się motywacją do zbudowania lepszej wersji v2 (tej strony).",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "No understanding of performance optimization — images causing slow initial load.",
          pl: "Brak wiedzy o optymalizacji wydajności — zdjęcia powodujące wolne pierwsze ładowanie.",
        },
        solution: {
          en: "Switched to Next.js Image component and added proper loading states — discovered the impact of LCP on user experience.",
          pl: "Przejście na komponent Image Next.js i dodanie właściwych stanów ładowania — odkrycie wpływu LCP na UX.",
        },
        result: {
          en: "Significantly faster load time and a lesson about web performance fundamentals that shaped future projects.",
          pl: "Znacząco szybszy czas ładowania i lekcja o podstawach wydajności webowej kształtująca kolejne projekty.",
        },
      },
    ],
    learnings: [
      {
        en: "Next.js fundamentals — routing, pages, Image optimization",
        pl: "Podstawy Next.js — routing, strony, optymalizacja Image",
      },
      {
        en: "Framer Motion basics — variants, transitions, viewport triggers",
        pl: "Podstawy Framer Motion — warianty, przejścia, wyzwalacze viewport",
      },
      {
        en: "The value of component architecture learned from shipping messy code first",
        pl: "Wartość architektury komponentów poznana po wysłaniu nieporządnego kodu",
      },
      {
        en: "What to do differently in v2 — i18n, testing, structure",
        pl: "Co zrobić inaczej w v2 — i18n, testy, struktura",
      },
    ],
    githubUrl: "https://github.com/Giszta/portfolio-website",
    liveUrl: "https://www.giszter.com/",
    image: "/images/projects/portfolio-v1.png",
    createdAt: "2024-03-01",
  },
  {
    slug: "sliding-game",
    title: "Sliding Puzzle Game",
    shortDescription: {
      en: "Classic sliding puzzle game built with React — shuffled tiles, timer, solvability check.",
      pl: "Klasyczna gra puzzle przesuwanych kafelków w React — tasowanie, timer, weryfikacja rozwiązywalności.",
    },
    longDescription: {
      en: "A classic sliding puzzle game built with React and Vite as a deliberate practice project for state management and game logic. Features shuffled tile generation with guaranteed solvability, move counter, timer, and win detection. Fixed a tricky bug where randomly generated boards were mathematically unsolvable.",
      pl: "Klasyczna gra puzzle przesuwanych kafelków zbudowana w React i Vite jako świadomy projekt ćwiczeniowy dla zarządzania stanem i logiki gry. Tasowanie z gwarancją rozwiązywalności, licznik ruchów, timer i detekcja wygranej. Naprawiony trudny bug gdzie losowo generowane plansze były matematycznie nierozwiązywalne.",
    },
    category: "practice",
    status: "live",
    difficulty: "beginner",
    featured: false,
    priority: 6,
    stack: ["React", "JavaScript", "Vite", "CSS Modules"],
    features: [
      {
        en: "Shuffled board with guaranteed solvability algorithm",
        pl: "Tasowanie planszy z algorytmem gwarancji rozwiązywalności",
      },
      { en: "Move counter and game timer", pl: "Licznik ruchów i timer gry" },
      { en: "Win detection and completion screen", pl: "Detekcja wygranej i ekran ukończenia" },
      { en: "Responsive tile grid layout", pl: "Responsywny grid układ kafelków" },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to model tile positions as React state without performance issues from frequent updates?",
          pl: "Jak modelować pozycje kafelków jako stan React bez problemów wydajnościowych przy częstych aktualizacjach?",
        },
        decision: {
          en: "Flat array of tile values with index representing position — simple to update, easy to compare against solved state.",
          pl: "Płaska tablica wartości kafelków z indeksem reprezentującym pozycję — prosta do aktualizacji, łatwa do porównania ze stanem rozwiązanym.",
        },
        result: {
          en: "Fast re-renders, simple win-check logic, and a data model easy to reason about.",
          pl: "Szybkie re-rendery, prosta logika sprawdzania wygranej i model danych łatwy do zrozumienia.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Randomly shuffled boards were sometimes mathematically unsolvable — game would be impossible to complete.",
          pl: "Losowo tasowane plansze były czasem matematycznie nierozwiązywalne — gra byłaby niemożliwa do ukończenia.",
        },
        solution: {
          en: "Implemented parity-based solvability check — counts inversions to determine if a board configuration is reachable from the solved state.",
          pl: "Zaimplementowałem sprawdzanie rozwiązywalności opartej na parzystości — liczy inwersje by sprawdzić czy konfiguracja planszy jest osiągalna ze stanu rozwiązanego.",
        },
        result: {
          en: "Every generated board is guaranteed solvable. Learned a valuable algorithm with real mathematical grounding.",
          pl: "Każda wygenerowana plansza jest gwarantowanie rozwiązywalna. Nauczyłem się cennego algorytmu z prawdziwymi podstawami matematycznymi.",
        },
      },
    ],
    learnings: [
      {
        en: "React useState and useEffect for game loop logic",
        pl: "React useState i useEffect dla logiki pętli gry",
      },
      {
        en: "Parity algorithm for puzzle solvability verification",
        pl: "Algorytm parzystości do weryfikacji rozwiązywalności puzzli",
      },
      {
        en: "CSS Modules for component-scoped styling",
        pl: "CSS Modules dla stylowania w zakresie komponentu",
      },
      {
        en: "Importance of edge case testing in game logic",
        pl: "Ważność testowania przypadków brzegowych w logice gry",
      },
    ],
    githubUrl: "https://github.com/Giszta/sliding-game---react-practice",
    liveUrl: "https://sliding-game-65029.web.app/",
    image: "/images/projects/sliding-game.png",
    createdAt: "2023-11-01",
  },
  {
    slug: "photopage",
    title: "Fotoroman",
    shortDescription: {
      en: "Photography showcase page for my father — dynamic galleries, slideshow viewer, built with vanilla HTML/CSS/JS.",
      pl: "Strona fotograficzna dla mojego taty — dynamiczne galerie, przeglądarka slideshow, zbudowana w czystym HTML/CSS/JS.",
    },
    longDescription: {
      en: "A photography showcase website built for my father to publish and share his photos online. Features organized album galleries with filtering, a manual and automatic slideshow viewer, and a responsive design for both desktop and mobile. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. A personal project with real users.",
      pl: "Strona fotograficzna zbudowana dla mojego taty do publikacji i udostępniania jego zdjęć online. Zorganizowane galerie albumów z filtrowaniem, ręczna i automatyczna przeglądarka slideshow oraz responsywny design na desktop i mobile. Zbudowana w czystym HTML, CSS i JavaScript — bez frameworków, bez zależności. Projekt osobisty z prawdziwymi użytkownikami.",
    },
    category: "frontend",
    status: "live",
    difficulty: "beginner",
    featured: false,
    priority: 7,
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      {
        en: "Dynamic photo galleries with album filtering",
        pl: "Dynamiczne galerie zdjęć z filtrowaniem albumów",
      },
      {
        en: "Manual and automatic slideshow viewer",
        pl: "Ręczna i automatyczna przeglądarka slideshow",
      },
      {
        en: "Randomly loaded photos and quotes on homepage",
        pl: "Losowo ładowane zdjęcia i cytaty na stronie głównej",
      },
      {
        en: "About me section with photographer's background",
        pl: "Sekcja o mnie z informacjami o fotografie",
      },
      {
        en: "Responsive design for desktop and mobile",
        pl: "Responsywny design na desktop i mobile",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to build a gallery with filtering without any framework or build tool?",
          pl: "Jak zbudować galerię z filtrowaniem bez żadnego frameworka ani narzędzia budowania?",
        },
        decision: {
          en: "Pure DOM manipulation with data attributes for filtering — show/hide elements based on album category attribute.",
          pl: "Czysta manipulacja DOM z atrybutami data dla filtrowania — pokazywanie/ukrywanie elementów na podstawie atrybutu kategorii albumu.",
        },
        result: {
          en: "Zero dependencies, instant filtering, and a deep understanding of how frameworks abstract DOM work.",
          pl: "Zero zależności, natychmiastowe filtrowanie i głębokie zrozumienie jak frameworki abstrahują pracę z DOM.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Slideshow autoplay causing layout issues when browser tab is inactive — timer accumulating in the background.",
          pl: "Autoodtwarzanie slideshowa powodujące problemy layoutu gdy zakładka przeglądarki jest nieaktywna — akumulacja timera w tle.",
        },
        solution: {
          en: "Used Page Visibility API to pause the slideshow timer when the tab is hidden and resume when it becomes active again.",
          pl: "Użyłem Page Visibility API do wstrzymania timera slideshowa gdy zakładka jest ukryta i wznowienia gdy staje się aktywna.",
        },
        result: {
          en: "Smooth slideshow behavior regardless of tab switching — and knowledge of a browser API most developers learn much later.",
          pl: "Płynne działanie slideshowa niezależnie od przełączania zakładek — i znajomość API przeglądarki której większość developerów uczy się znacznie później.",
        },
      },
    ],
    learnings: [
      {
        en: "Vanilla JS DOM manipulation without framework abstractions",
        pl: "Czyste manipulacje DOM w JS bez abstrakcji frameworka",
      },
      {
        en: "Page Visibility API for background tab handling",
        pl: "Page Visibility API do obsługi zakładek w tle",
      },
      {
        en: "Building for real users — feedback loop from a family member",
        pl: "Budowanie dla prawdziwych użytkowników — pętla feedbacku od członka rodziny",
      },
      {
        en: "Why frameworks exist — appreciation through vanilla JS pain",
        pl: "Dlaczego frameworki istnieją — docenienie przez ból czystego JS",
      },
    ],
    githubUrl: "https://github.com/Giszta/photopage",
    liveUrl: "https://giszta.github.io/photopage/",
    image: "/images/projects/photopage.png",
    createdAt: "2023-06-01",
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

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((p) => p.category === category);
}
