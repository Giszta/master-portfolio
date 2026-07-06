import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ticket-dashboard",
    title: "Support Tickets Dashboard",
    shortDescription: {
      en: "A full-stack helpdesk application built with Next.js, TypeScript and PostgreSQL, featuring role-based access, activity history, ticket filtering and E2E tests.",
      pl: "Full-stackowa aplikacja helpdeskowa w Next.js, TypeScript i PostgreSQL, z rolami użytkowników, historią aktywności, filtrowaniem zgłoszeń i testami E2E.",
    },
    longDescription: {
      en: "A full-stack helpdesk application built with Next.js, TypeScript and PostgreSQL. It simulates a real-world support ticket workflow, including role-based access for three user types, activity history, ticket filtering and E2E tests for critical user flows.",
      pl: "Full-stackowa aplikacja helpdeskowa zbudowana w Next.js, TypeScript i PostgreSQL. Projekt symuluje realny proces obsługi zgłoszeń — z dostępem opartym na rolach dla trzech typów użytkowników, historią aktywności, filtrowaniem zgłoszeń i testami E2E dla kluczowych przepływów.",
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
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Zod",
      "React Hook Form",
      "Playwright",
    ],
    features: [
      {
        en: "Three user roles — Admin, Agent and Customer — each with different permissions",
        pl: "Trzy role użytkowników — Administrator, Agent i Klient — każda z innymi uprawnieniami",
      },
      {
        en: "Ticket filtering, sorting and search stored in the URL",
        pl: "Filtrowanie, sortowanie i wyszukiwanie ticketów zapisane w URL",
      },
      {
        en: "Activity log that tracks every change made to a ticket",
        pl: "Historia aktywności śledząca każdą zmianę wprowadzoną w tickecie",
      },
      {
        en: "Internal comments visible only to agents and admins",
        pl: "Wewnętrzne komentarze widoczne tylko dla agentów i adminów",
      },
      {
        en: "E2E tests covering login and core ticket flows",
        pl: "Testy E2E pokrywające logowanie i główne przepływy ticketów",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to restrict pages based on user role without repeating auth logic on every page?",
          pl: "Jak ograniczać dostęp do stron na podstawie roli bez powtarzania logiki autoryzacji na każdej stronie?",
        },
        decision: {
          en: "Used Next.js middleware that reads the session and redirects based on the user's role before the page loads.",
          pl: "Użyłem middleware Next.js, który odczytuje sesję i przekierowuje na podstawie roli użytkownika zanim strona się załaduje.",
        },
        result: {
          en: "One place handles all access control — no duplicated checks across page components.",
          pl: "Jedno miejsce obsługuje całą kontrolę dostępu — brak zduplikowanych sprawdzeń w komponentach stron.",
        },
      },
      {
        problem: {
          en: "How to avoid writing the same validation rules twice — once for the form and once for the server?",
          pl: "Jak uniknąć pisania tych samych reguł walidacji dwa razy — raz dla formularza i raz dla serwera?",
        },
        decision: {
          en: "Created shared Zod schemas imported by both React Hook Form on the client and Server Actions on the server.",
          pl: "Stworzyłem współdzielone schematy Zod importowane zarówno przez React Hook Form po stronie klienta, jak i przez Server Actions po stronie serwera.",
        },
        result: {
          en: "One schema per form — changing a validation rule updates both sides automatically.",
          pl: "Jeden schemat dla każdego formularza — zmiana reguły walidacji aktualizuje obie strony automatycznie.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Keeping filter and search state in sync with the URL without managing it in React state.",
          pl: "Utrzymanie stanu filtrów i wyszukiwania zsynchronizowanego z URL bez trzymania go w stanie Reacta.",
        },
        solution: {
          en: "Used Next.js search params as the single source of truth — filters read from the URL, updated via router.push.",
          pl: "Użyłem search params Next.js jako jedynego źródła prawdy — filtry odczytywane z URL, aktualizowane przez router.push.",
        },
        result: {
          en: "Filters work with browser back/forward and can be shared as a link.",
          pl: "Filtry działają z przyciskami wstecz/dalej w przeglądarce i można je udostępnić jako link.",
        },
      },
    ],
    learnings: [
      {
        en: "How middleware-based auth works in Next.js App Router",
        pl: "Jak działa autoryzacja przez middleware w Next.js App Router",
      },
      {
        en: "Sharing Zod schemas between client forms and Server Actions",
        pl: "Współdzielenie schematów Zod między formularzami klienta a Server Actions",
      },
      {
        en: "Using URL search params as state for filters and pagination",
        pl: "Używanie search params URL jako stanu dla filtrów i paginacji",
      },
      {
        en: "Writing E2E tests with Playwright for authenticated user flows",
        pl: "Pisanie testów E2E w Playwright dla przepływów z zalogowanym użytkownikiem",
      },
    ],
    githubUrl: "https://github.com/Giszta/ticket-dashboard",
    liveUrl: "https://ticket-dashboard-black.vercel.app",
    image: "/images/projects/ticket-dashboard.png",
    createdAt: "2026-04-26",
  },
  {
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    shortDescription: {
      en: "Photography portfolio built with Next.js and Cloudinary — album gallery with tag filtering and lightbox viewer.",
      pl: "Portfolio fotograficzne w Next.js z Cloudinary — galeria albumów z filtrowaniem po tagach i przeglądarką lightbox.",
    },
    longDescription: {
      en: "A portfolio site for a photographer friend. Photos are stored and served from Cloudinary, organized into albums by folder structure. The gallery fetches all resources in one request, builds a manifest cached for an hour, and invalidates it automatically via a Cloudinary webhook when new photos are uploaded. Albums can be filtered by tags and open in a fullscreen lightbox with thumbnails and slideshow.",
      pl: "Strona portfolio dla fotografa. Zdjęcia przechowywane i serwowane z Cloudinary, podzielone na albumy według struktury folderów. Galeria pobiera wszystkie zasoby jednym requestem, buduje manifest cache'owany na godzinę i unieważnia go automatycznie przez webhook Cloudinary po wgraniu nowych zdjęć. Albumy można filtrować po tagach, a zdjęcia otwierają się w pełnoekranowym lightboxie z miniaturkami i trybem slideshow.",
    },
    category: "frontend",
    status: "live",
    difficulty: "intermediate",
    featured: true,
    priority: 2,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    features: [
      {
        en: "Gallery manifest cached server-side with Next.js unstable_cache (1h revalidation)",
        pl: "Manifest galerii cache'owany po stronie serwera przez Next.js unstable_cache (rewalidacja co 1h)",
      },
      {
        en: "Cloudinary webhook automatically invalidates cache after uploading new photos",
        pl: "Webhook Cloudinary automatycznie unieważnia cache po wgraniu nowych zdjęć",
      },
      {
        en: "Tag-based album filtering with staggered reveal animation",
        pl: "Filtrowanie albumów po tagach z animowanym stopniowym pojawianiem się kart",
      },
      {
        en: "Fullscreen lightbox with thumbnails, slideshow and counter",
        pl: "Pełnoekranowy lightbox z miniaturkami, trybem slideshow i licznikiem",
      },
      {
        en: "Cloudinary URL optimization — automatic format (WebP/AVIF) and quality via f_auto,q_auto",
        pl: "Optymalizacja URL Cloudinary — automatyczny format (WebP/AVIF) i jakość przez f_auto,q_auto",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "Fetching photos separately for each album would mean a lot of Cloudinary API calls on every page load.",
          pl: "Pobieranie zdjęć osobno dla każdego albumu oznaczałoby dużo wywołań Cloudinary API przy każdym ładowaniu strony.",
        },
        decision: {
          en: "One paginated request fetches all gallery resources from Cloudinary, then a manifest is built in memory — albums grouped by folder, sorted alphabetically. The whole thing is cached with Next.js unstable_cache for an hour.",
          pl: "Jeden paginowany request pobiera wszystkie zasoby galerii z Cloudinary, potem manifest jest budowany w pamięci — albumy pogrupowane po folderach, posortowane alfabetycznie. Całość jest cache'owana przez Next.js unstable_cache na godzinę.",
        },
        result: {
          en: "API routes for albums and individual album photos both serve from the same cached manifest — fast response times without hitting Cloudinary on every request.",
          pl: "Endpointy dla listy albumów i zdjęć konkretnego albumu serwują z tego samego cache'owanego manifestu — szybkie czasy odpowiedzi bez odpytywania Cloudinary przy każdym requeście.",
        },
      },
      {
        problem: {
          en: "Cache cached for an hour means newly uploaded photos wouldn't appear until the next revalidation cycle.",
          pl: "Cache trzymany przez godzinę oznaczał, że nowo wgrane zdjęcia nie pojawiałyby się aż do kolejnego cyklu rewalidacji.",
        },
        decision: {
          en: "Set up a Cloudinary webhook pointing to /api/cloudinary-webhook. On upload, Cloudinary calls the endpoint which calls revalidateTag on all three cache tags and revalidatePath on all pages.",
          pl: "Skonfigurowałem webhook Cloudinary wskazujący na /api/cloudinary-webhook. Po wgraniu zdjęć Cloudinary wywołuje endpoint, który wywołuje revalidateTag na wszystkich trzech tagach cache i revalidatePath na wszystkich stronach.",
        },
        result: {
          en: "New photos show up immediately after upload without any manual action.",
          pl: "Nowe zdjęcia pojawiają się od razu po wgraniu bez żadnej ręcznej akcji.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "After implementing album filtering, switching tags caused all albums to flash in at once instead of animating in one by one.",
          pl: "Po zaimplementowaniu filtrowania albumów, przełączanie tagów powodowało że wszystkie albumy pojawiały się naraz zamiast animować się jeden po drugim.",
        },
        solution: {
          en: "Used a setInterval that increments a visible count every 180ms — only albums up to that count render. On tag change the counter resets to 0. Framer Motion handles the individual card entrance animation.",
          pl: "Użyłem setInterval który co 180ms zwiększa licznik widocznych albumów — renderują się tylko albumy do tej liczby. Przy zmianie tagu licznik resetuje się do 0. Framer Motion obsługuje animację wejścia pojedynczych kart.",
        },
        result: {
          en: "Albums reveal one by one on every filter change, which feels much more intentional than all appearing at once.",
          pl: "Albumy pojawiają się jeden po drugim przy każdej zmianie filtra, co wygląda o wiele bardziej zamierzenie niż pojawienie się wszystkich naraz.",
        },
      },
      {
        challenge: {
          en: "Photos inside an album were showing up in random order depending on Cloudinary's response — not the order they were uploaded in.",
          pl: "Zdjęcia wewnątrz albumu wyświetlały się w losowej kolejności zależnej od odpowiedzi Cloudinary — nie w kolejności wgrywania.",
        },
        solution: {
          en: "Added alphabetical sort by filename using localeCompare with numeric:true option, so files named 001, 002, 003 sort correctly.",
          pl: "Dodałem sortowanie alfabetyczne po nazwie pliku używając localeCompare z opcją numeric:true, żeby pliki nazwane 001, 002, 003 sortowały się poprawnie.",
        },
        result: {
          en: "Photos in every album now appear in the intended sequence.",
          pl: "Zdjęcia w każdym albumie pojawiają się teraz we właściwej kolejności.",
        },
      },
    ],
    learnings: [
      {
        en: "Next.js unstable_cache and cache tag invalidation — how to cache expensive fetches and selectively revalidate them",
        pl: "Next.js unstable_cache i inwalidacja tagów cache — jak cache'ować kosztowne requesty i selektywnie je rewalidować",
      },
      {
        en: "Cloudinary API — paginated resource fetching, URL transformation parameters, webhook setup",
        pl: "Cloudinary API — paginowane pobieranie zasobów, parametry transformacji URL, konfiguracja webhooków",
      },
      {
        en: "Framer Motion animations combined with interval-based rendering for staggered list reveals",
        pl: "Animacje Framer Motion w połączeniu z renderowaniem opartym o interwał do stopniowego ujawniania listy",
      },
    ],
    githubUrl: "https://github.com/Giszta/photography-portfolio",
    liveUrl: "https://www.fotoroman.pl/",
    image: "/images/projects/photography-portfolio.png",
    createdAt: "2025-02-04",
  },
  {
    slug: "twoj-doradca",
    title: "Twój Doradca",
    shortDescription: {
      en: "Landing page for a renewable energy advisor with a multi-step contact form and email integration.",
      pl: "Landing page dla doradcy OZE z wielokrokowym formularzem kontaktowym i integracją emailową.",
    },
    longDescription: {
      en: "A landing page built for a real client running a renewable energy advisory business. The site covers the full sales funnel — from presenting services and government grants, through a photo gallery of past realizations, to a multi-step contact form that collects product-specific answers and sends a formatted email to the client via Resend. The project went through many rounds of client feedback and multiple redesigns of nearly every section.",
      pl: "Landing page zbudowany dla prawdziwego klienta prowadzącego firmę doradztwa OZE. Strona obsługuje cały lejek sprzedażowy — od prezentacji usług i dofinansowań rządowych, przez galerię zdjęć realizacji, po wielokrokowy formularz kontaktowy zbierający odpowiedzi specyficzne dla produktu i wysyłający sformatowanego emaila do klienta przez Resend. Projekt przechodził przez wiele rund feedbacku klienta i kilka przeprojektowań prawie każdej sekcji.",
    },
    category: "landing-page",
    status: "live",
    difficulty: "intermediate",
    featured: true,
    priority: 3,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion", "Resend"],
    features: [
      {
        en: "Multi-step contact form with dynamic questions based on selected product (6 product types)",
        pl: "Wielokrokowy formularz kontaktowy z dynamicznymi pytaniami zależnymi od wybranego produktu (6 typów)",
      },
      {
        en: "Email delivery via Resend — formatted HTML email sent to the client on every submission",
        pl: "Wysyłka emaili przez Resend — sformatowany HTML email trafia do klienta przy każdym zgłoszeniu",
      },
      {
        en: "Government grants section with expandable cards and requirements per program",
        pl: "Sekcja dofinansowań rządowych z rozwijanymi kartami i wymaganiami dla każdego programu",
      },
      {
        en: "Realizations photo gallery with marquee animation and lightbox",
        pl: "Galeria zdjęć realizacji z animacją marquee i lightboxem",
      },
      {
        en: "GDPR-compliant cookie banner and legal pages (privacy policy, terms, social media policy)",
        pl: "Banner cookies zgodny z RODO oraz strony prawne (polityka prywatności, regulamin, polityka SM)",
      },
      {
        en: "Fully responsive layout with scroll animations via Motion",
        pl: "W pełni responsywny layout z animacjami przewijania przez Motion",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "The contact form needed to collect very different information depending on which product the user was interested in — a heat pump inquiry needs different questions than a photovoltaics one.",
          pl: "Formularz kontaktowy musiał zbierać zupełnie inne dane w zależności od produktu — zapytanie o pompę ciepła wymaga innych pytań niż o fotowoltaikę.",
        },
        decision: {
          en: "Built a multi-step wizard driven by a config file — each product has its own question array, and a custom useContactForm hook manages step state, validation, and submission.",
          pl: "Zbudowałem wielokrokowy wizard sterowany plikiem konfiguracyjnym — każdy produkt ma własną tablicę pytań, a customowy hook useContactForm zarządza stanem kroków, walidacją i wysyłką.",
        },
        result: {
          en: "Adding a new product or changing questions requires editing one config file, no logic changes needed.",
          pl: "Dodanie nowego produktu lub zmiana pytań wymaga edycji jednego pliku konfiguracyjnego, bez zmian w logice.",
        },
      },
      {
        problem: {
          en: "Client needed to receive structured lead data by email without any backend infrastructure or database.",
          pl: "Klient potrzebował otrzymywać ustrukturyzowane dane leadów emailem bez żadnej infrastruktury backendowej ani bazy danych.",
        },
        decision: {
          en: "Used Resend with a Next.js API route — the route assembles an HTML email with the user's answers, contact details, and marketing consents, then sends it directly to the client.",
          pl: "Użyłem Resend z API route Next.js — route składa HTML email z odpowiedziami użytkownika, danymi kontaktowymi i zgodami marketingowymi, a następnie wysyła go bezpośrednio do klienta.",
        },
        result: {
          en: "Zero database, zero admin panel — client gets a clean, readable email for every lead.",
          pl: "Zero bazy danych, zero panelu admina — klient dostaje czytelny email dla każdego leada.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "The client had a lot of feedback across many iterations — almost every section went through at least two redesigns based on their input.",
          pl: "Klient miał dużo uwag w wielu iteracjach — prawie każda sekcja przeszła co najmniej dwa przeprojektowania na podstawie jego feedbacku.",
        },
        solution: {
          en: "Kept the codebase component-based and data-driven from the start, which made swapping layouts and updating content much less painful.",
          pl: "Od początku trzymałem codebase oparty na komponentach i danych, co sprawiło, że zamiana layoutów i aktualizacja treści była znacznie mniej bolesna.",
        },
        result: {
          en: "Changes that would have been painful in a monolithic structure took minutes — and I learned to scope client feedback early.",
          pl: "Zmiany, które byłyby bolesne w monolitycznej strukturze, zajmowały minuty — i nauczyłem się wcześniej precyzować feedback klienta.",
        },
      },
      {
        challenge: {
          en: "Implementing GDPR-compliant consent handling — the form captures marketing consents and the cookie banner needs to respect user choices.",
          pl: "Implementacja obsługi zgód zgodnej z RODO — formularz zbiera zgody marketingowe, a baner cookies musi respektować wybory użytkownika.",
        },
        solution: {
          en: "Added three separate marketing consent checkboxes to the form (email, phone, newsletter) and built a cookie banner with persistent preference storage.",
          pl: "Dodałem trzy osobne checkboxy zgód marketingowych w formularzu (email, telefon, newsletter) i zbudowałem baner cookies z trwałym przechowywaniem preferencji.",
        },
        result: {
          en: "Legal requirements met, and client's submitted leads come with clearly recorded consent state.",
          pl: "Wymagania prawne spełnione, a zgłoszenia klienta przychodzą z wyraźnie zapisanym stanem zgód.",
        },
      },
    ],
    learnings: [
      {
        en: "Client feedback rarely comes in one batch — building for iteration from the start saves a lot of refactoring later",
        pl: "Feedback klienta rzadko przychodzi jednorazowo — budowanie pod iteracje od początku oszczędza dużo refaktoringu później",
      },
      {
        en: "Email as an integration layer — Resend + API route covers a lot of use cases without needing a database",
        pl: "Email jako warstwa integracyjna — Resend + API route pokrywa wiele przypadków bez potrzeby bazy danych",
      },
      {
        en: "Multi-step forms UX — managing step state, validation per step, and error recovery is more complex than it looks",
        pl: "UX wielokrokowych formularzy — zarządzanie stanem kroków, walidacją per krok i obsługą błędów jest bardziej złożone niż wygląda",
      },
      {
        en: "GDPR basics in practice — consent fields, cookie banners, and why legal pages matter for real clients",
        pl: "Podstawy RODO w praktyce — pola zgód, bannery cookies i dlaczego strony prawne mają znaczenie dla prawdziwych klientów",
      },
    ],
    githubUrl: "https://github.com/Giszta/twoj-doradca",
    liveUrl: "https://twojdoradca.pl",
    image: "/images/projects/twoj-doradca.png",
    createdAt: "2025-08-28",
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
