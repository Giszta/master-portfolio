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
      en: "Forum-like app built with Vue 3 and TypeScript — posts, pagination, Vuex state management. A learning project from a React developer's perspective.",
      pl: "Aplikacja forum zbudowana w Vue 3 i TypeScript — posty, paginacja, zarządzanie stanem Vuex. Projekt nauki z perspektywy developera React.",
    },
    longDescription: {
      en: "A forum-style application built with Vue 3, TypeScript, Vuex, Tailwind CSS v4, and Vite. Fetches posts and users from the JSONPlaceholder API, implements client-side pagination, expandable post bodies with smooth CSS transitions, post deletion with fade-out animation, and scroll-to-top/bottom buttons. Built intentionally to learn the Vue 3 ecosystem coming from React — every feature was a chance to compare how things work differently.",
      pl: "Aplikacja w stylu forum zbudowana w Vue 3, TypeScript, Vuex, Tailwind CSS v4 i Vite. Pobiera posty i użytkowników z API JSONPlaceholder, implementuje paginację po stronie klienta, rozwijalne treści z płynnymi przejściami CSS, usuwanie postów z animacją zanikania i przyciski przewijania. Zbudowana świadomie, żeby nauczyć się ekosystemu Vue 3 przychodząc z React — każda funkcja była okazją do porównania jak rzeczy działają inaczej.",
    },
    category: "practice",
    status: "live",
    difficulty: "intermediate",
    featured: false,
    priority: 4,
    stack: ["Vue 3", "TypeScript", "Vuex", "Axios", "Tailwind CSS", "Vite"],
    features: [
      {
        en: "Posts and users fetched from JSONPlaceholder public API",
        pl: "Posty i użytkownicy pobierani z publicznego API JSONPlaceholder",
      },
      {
        en: "Client-side pagination — 10 posts per page, no full reload",
        pl: "Paginacja po stronie klienta — 10 postów na stronę, bez przeładowania",
      },
      {
        en: "Expandable post content — height animated via measured scrollHeight",
        pl: "Rozwijalna treść posta — wysokość animowana na podstawie zmierzonego scrollHeight",
      },
      {
        en: "Post deletion with fade-out animation using transition-group",
        pl: "Usuwanie postów z animacją zanikania przy użyciu transition-group",
      },
      {
        en: "Scroll-to-top and scroll-to-bottom floating buttons with visibility logic",
        pl: "Pływające przyciski przewijania w górę i w dół z logiką widoczności",
      },
      {
        en: "Modular Vuex store — state, actions, mutations, getters in separate files",
        pl: "Modularny store Vuex — state, actions, mutations, getters w osobnych plikach",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "As a React developer, how to approach state management in Vue without just recreating Redux patterns blindly?",
          pl: "Jako developer React, jak podejść do zarządzania stanem w Vue nie odtwarzając po prostu wzorców Redux na ślepo?",
        },
        decision: {
          en: "Used Vuex 4 with a single namespaced module, split into separate files per responsibility (state, actions, mutations, getters). The structure mirrors Redux intentionally — it made the mental model easier to transfer while forcing me to understand what's different.",
          pl: "Użyłem Vuex 4 z jednym modułem z przestrzenią nazw, podzielonym na osobne pliki według odpowiedzialności (state, actions, mutations, getters). Struktura celowo przypomina Redux — ułatwiło to transfer modelu mentalnego, jednocześnie zmuszając do zrozumienia różnic.",
        },
        result: {
          en: "Clear state flow and a solid understanding of how Vuex mutations differ from Redux reducers — and why Vue's reactivity makes some patterns unnecessary.",
          pl: "Przejrzysty przepływ stanu i solidne zrozumienie jak mutacje Vuex różnią się od reducerów Redux — i dlaczego reaktywność Vue sprawia, że niektóre wzorce są zbędne.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "Animating expand/collapse of post bodies when the content height is unknown — CSS can't transition from height: auto.",
          pl: "Animowanie rozwijania/zwijania treści postów gdy wysokość treści jest nieznana — CSS nie może animować z height: auto.",
        },
        solution: {
          en: "Measured each post's real scrollHeight via a template ref inside onMounted + nextTick, stored it per post ID in a ref object, and used it as the maxHeight target in the inline style during transition.",
          pl: "Zmierzyłem prawdziwy scrollHeight każdego posta przez ref szablonu w onMounted + nextTick, zapisałem per ID posta w obiekcie ref i użyłem go jako docelowy maxHeight w inline style podczas przejścia.",
        },
        result: {
          en: "Smooth CSS height animation that works for any post length without JavaScript animation libraries.",
          pl: "Płynna animacja wysokości CSS działająca dla dowolnej długości posta bez bibliotek animacji JavaScript.",
        },
      },
      {
        challenge: {
          en: "Making post deletion feel smooth — removing from store immediately causes the list to jump.",
          pl: "Płynne usuwanie postów — natychmiastowe usunięcie ze store powoduje skok listy.",
        },
        solution: {
          en: "Tracked removing post IDs in a local Set, hid them with v-show immediately, then committed the actual store removal after a 300ms timeout — letting the CSS transition finish first. Used transition-group on the list for coordinated exit animations.",
          pl: "Śledzę usuwane ID postów w lokalnym Set, ukrywam je v-show natychmiast, a dopiero po 300ms timeout committuję faktyczne usunięcie ze store — pozwalając przejściu CSS skończyć się. Użyłem transition-group na liście dla skoordynowanych animacji wyjścia.",
        },
        result: {
          en: "Deletion feels instant to the user but plays the fade animation through to completion.",
          pl: "Usunięcie czuje się natychmiastowe dla użytkownika, ale animacja zanikania gra do końca.",
        },
      },
    ],
    learnings: [
      {
        en: "Vue 3 Composition API feels similar to React Hooks but the mental model is different — reactivity is opt-in in React, automatic in Vue",
        pl: "Composition API Vue 3 jest podobne do React Hooks, ale model mentalny jest inny — reaktywność jest opt-in w React, automatyczna w Vue",
      },
      {
        en: "Vuex mutations vs Redux reducers — both are pure state updates, but Vuex mutates directly while Redux returns new state",
        pl: "Mutacje Vuex vs reducery Redux — oba to czyste aktualizacje stanu, ale Vuex mutuje bezpośrednio, a Redux zwraca nowy stan",
      },
      {
        en: "How to animate unknown heights in CSS using scrollHeight measured at runtime",
        pl: "Jak animować nieznane wysokości w CSS używając scrollHeight mierzonego w runtime",
      },
      {
        en: "The importance of syncing UI state (animation) with data state (store) — removing too early causes visual glitches",
        pl: "Znaczenie synchronizacji stanu UI (animacja) z stanem danych (store) — zbyt wczesne usunięcie powoduje glitche wizualne",
      },
      {
        en: "Created an axiosClient with baseURL but forgot to use it in actions — noticed only later. A reminder to actually use abstractions you create",
        pl: "Stworzyłem axiosClient z baseURL, ale zapomniałem go użyć w akcjach — zauważyłem dopiero później. Przypomnienie, żeby faktycznie używać abstrakcji które się tworzy",
      },
    ],
    githubUrl: "https://github.com/Giszta/Postly",
    liveUrl: "https://postly-seven.vercel.app/",
    image: "/images/projects/postly.png",
    createdAt: "2025-08-04",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio v1",
    shortDescription: {
      en: "My first personal portfolio — a single-page Next.js app with Framer Motion animations, a tabbed About section and a contact form powered by Resend.",
      pl: "Moje pierwsze portfolio — jednostronicowa aplikacja Next.js z animacjami Framer Motion, sekcją About z zakładkami i formularzem kontaktowym opartym na Resend.",
    },
    longDescription: {
      en: "A single-page portfolio built to publish my first personal website quickly and start showing my projects online. It includes a Hero section with a TypeAnimation typewriter effect, an About section with tabs for skills, education and certifications, a project grid with staggered viewport animations, an Engineer Manifest section and a contact form connected to Resend. The project fulfilled its purpose, but it also exposed the limitations of my first architecture: content was stored directly in components, there was no i18n, no tests and the component structure was flat. Those limitations became the direct motivation for designing Portfolio v2 with a stronger architecture from the start.",
      pl: "Jednostronicowe portfolio zbudowane po to, żeby szybko opublikować pierwszą wersję strony osobistej i zacząć prezentować projekty online. Zawiera Hero z efektem maszyny do pisania TypeAnimation, sekcję About z zakładkami dotyczącymi umiejętności, edukacji i certyfikatów, siatkę projektów z animacjami przy wejściu w viewport, sekcję Engineer Manifest oraz formularz kontaktowy połączony z Resend. Projekt spełnił swoje zadanie, ale pokazał też ograniczenia pierwszej architektury: treści były trzymane bezpośrednio w komponentach, nie było i18n, testów ani wyraźnego podziału struktury komponentów. Te ograniczenia stały się bezpośrednią motywacją do zaprojektowania Portfolio v2 od początku z mocniejszą architekturą.",
    },
    category: "frontend",
    status: "live",
    difficulty: "beginner",
    featured: false,
    priority: 5,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
    features: [
      {
        en: "Single-page layout with smooth scroll navigation between sections",
        pl: "Układ jednostronicowy z płynną nawigacją między sekcjami",
      },
      {
        en: "Animated profile photo with a rotating SVG circle built with Framer Motion",
        pl: "Animowane zdjęcie profilowe z obracającym się okręgiem SVG zbudowanym we Framer Motion",
      },
      {
        en: "Hero heading with a typewriter effect using react-type-animation",
        pl: "Nagłówek Hero z efektem maszyny do pisania opartym na react-type-animation",
      },
      {
        en: "Tabbed About section for skills, education and certifications with AnimatePresence transitions",
        pl: "Sekcja About z zakładkami dotyczącymi umiejętności, edukacji i certyfikatów oraz przejściami AnimatePresence",
      },
      {
        en: "Project grid with staggered Framer Motion animations on viewport entry",
        pl: "Siatka projektów ze stopniowanymi animacjami Framer Motion przy wejściu w viewport",
      },
      {
        en: "Contact form with Resend integration and react-hot-toast notifications",
        pl: "Formularz kontaktowy z integracją Resend i powiadomieniami react-hot-toast",
      },
      {
        en: "CV download button with delayed reveal animation",
        pl: "Przycisk pobierania CV z animacją opóźnionego pojawienia się",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "I needed a working contact form without setting up a separate backend or SMTP server.",
          pl: "Potrzebowałem działającego formularza kontaktowego bez tworzenia osobnego backendu ani konfiguracji serwera SMTP.",
        },
        decision: {
          en: "Used Resend with a Next.js API route, which allowed me to send emails with minimal infrastructure and keep the implementation inside the Next.js project.",
          pl: "Użyłem Resend z trasą API w Next.js, co pozwoliło wysyłać wiadomości bez dodatkowej infrastruktury i utrzymać implementację wewnątrz projektu Next.js.",
        },
        result: {
          en: "The contact form worked reliably and Resend became my default choice for simple email flows in later Next.js projects.",
          pl: "Formularz kontaktowy działał stabilnie, a Resend stał się moim domyślnym wyborem do prostych przepływów emailowych w kolejnych projektach Next.js.",
        },
      },
      {
        problem: {
          en: "I was still learning how to structure a Next.js project and how to split UI, content and reusable components.",
          pl: "Dopiero uczyłem się, jak strukturyzować projekt Next.js oraz jak rozdzielać UI, treści i komponenty wielokrotnego użycia.",
        },
        decision: {
          en: "I used the App Router and kept the structure simple, with most components placed in one flat components directory.",
          pl: "Użyłem App Routera i utrzymałem prostą strukturę, umieszczając większość komponentów w jednym płaskim katalogu components.",
        },
        result: {
          en: "The project worked, but the lack of structure quickly showed why folder conventions, content separation and component co-location matter.",
          pl: "Projekt działał, ale brak struktury szybko pokazał mi, dlaczego konwencje folderów, oddzielenie treści od UI i co-location komponentów mają znaczenie.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "The contact form initially failed without clear feedback when something went wrong.",
          pl: "Formularz kontaktowy początkowo kończył się błędem bez czytelnej informacji dla użytkownika.",
        },
        solution: {
          en: "Added react-hot-toast for success and error notifications, and improved API route error handling so it always returned a proper JSON response.",
          pl: "Dodałem react-hot-toast do komunikatów sukcesu i błędu oraz poprawiłem obsługę błędów w trasie API, aby zawsze zwracała poprawną odpowiedź JSON.",
        },
        result: {
          en: "The form started giving clear feedback in both success and error states. It was my first practical lesson in why async UI feedback matters.",
          pl: "Formularz zaczął dawać czytelny komunikat zarówno przy sukcesie, jak i błędzie. To była moja pierwsza praktyczna lekcja, dlaczego informacja zwrotna przy akcjach asynchronicznych ma znaczenie.",
        },
      },
      {
        challenge: {
          en: "Project card hover effects did not work well on touch devices.",
          pl: "Efekty hover na kartach projektów nie działały dobrze na urządzeniach dotykowych.",
        },
        solution: {
          en: "Adjusted the card interaction logic for touch devices and tested it on a real phone instead of relying only on DevTools simulation.",
          pl: "Dostosowałem logikę interakcji kart do urządzeń dotykowych i przetestowałem ją na prawdziwym telefonie zamiast polegać wyłącznie na symulacji w DevTools.",
        },
        result: {
          en: "Cards became usable on mobile and I learned that real-device testing can reveal issues that DevTools does not show clearly.",
          pl: "Karty stały się wygodne w użyciu na mobile, a ja nauczyłem się, że testowanie na prawdziwym urządzeniu potrafi ujawnić problemy niewidoczne w samej symulacji DevTools.",
        },
      },
    ],
    learnings: [
      {
        en: "Next.js App Router basics — layouts, API routes and the difference between Server and Client Components",
        pl: "Podstawy Next.js App Router — layouty, trasy API oraz różnica między komponentami server i client",
      },
      {
        en: "Framer Motion in practice — variants, AnimatePresence, viewport triggers and SVG animation",
        pl: "Framer Motion w praktyce — warianty, AnimatePresence, animacje przy wejściu w viewport i animacje SVG",
      },
      {
        en: "Integrating Resend for transactional email inside a Next.js API route",
        pl: "Integracja Resend do emaili transakcyjnych w trasie API Next.js",
      },
      {
        en: "Hardcoded content inside components becomes difficult to maintain as a project grows",
        pl: "Treści wpisane bezpośrednio w komponentach stają się trudne w utrzymaniu, gdy projekt rośnie",
      },
      {
        en: "Mobile testing on a real device is not the same as DevTools simulation",
        pl: "Testowanie mobile na prawdziwym urządzeniu to nie to samo co symulacja w DevTools",
      },
      {
        en: "What to build differently in v2 — i18n, component architecture, data layer and testing",
        pl: "Co zbudować inaczej w v2 — i18n, architektura komponentów, warstwa danych i testy",
      },
    ],
    githubUrl: "https://github.com/Giszta/portfolio-website",
    liveUrl: "https://www.giszter.com/",
    image: "/images/projects/portfolio-v1.png",
    createdAt: "2025-03-11",
  },
  {
    slug: "sliding-game",
    title: "Sliding Puzzle Game",
    shortDescription: {
      en: "Classic 15-puzzle built with React and TypeScript — shuffled tiles, timer, keyboard support and solvability check.",
      pl: "Klasyczna gra 15-puzzle w React i TypeScript — tasowanie, timer, obsługa klawiatury i weryfikacja rozwiązywalności.",
    },
    longDescription: {
      en: "A classic 15-puzzle game built with React, TypeScript and Vite as a practice project for state management and game logic. I implemented shuffled tile generation with guaranteed solvability using a parity algorithm, a timer that starts on the first move, keyboard arrow controls and CSS transition animations. The trickiest part was handling mathematically unsolvable boards — about half of all random shuffles are unsolvable, which I did not know when starting the project.",
      pl: "Klasyczna gra 15-puzzle zbudowana w React, TypeScript i Vite jako projekt ćwiczeniowy do nauki zarządzania stanem i logiki gry. Zaimplementowałem tasowanie z gwarancją rozwiązywalności oparte na algorytmie parzystości, timer startujący przy pierwszym ruchu, sterowanie strzałkami oraz animacje CSS. Najtrudniejszą częścią było obsłużenie plansz matematycznie nierozwiązywalnych — około połowa losowych tasowań jest niemożliwa do ukończenia, czego wcześniej nie wiedziałem.",
    },
    category: "practice",
    status: "live",
    difficulty: "beginner",
    featured: false,
    priority: 6,
    stack: ["React", "TypeScript", "Vite", "CSS", "Firebase"],
    features: [
      {
        en: "Shuffled board with guaranteed solvability using a parity algorithm",
        pl: "Tasowanie planszy z gwarancją rozwiązywalności dzięki algorytmowi parzystości",
      },
      {
        en: "Smooth CSS transition animations — tiles slide into place",
        pl: "Płynne animacje CSS — kafelki wsuwają się na swoje miejsce",
      },
      {
        en: "Keyboard arrow support alongside click controls",
        pl: "Obsługa strzałek klawiatury obok sterowania kliknięciem",
      },
      {
        en: "Timer that starts on the first move and stops on win",
        pl: "Timer startujący przy pierwszym ruchu i zatrzymujący się po wygranej",
      },
      {
        en: "Visual highlight for correctly placed tiles",
        pl: "Wizualne podświetlenie poprawnie ustawionych kafelków",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to animate tiles moving across the board without a heavy animation library?",
          pl: "Jak animować kafelki poruszające się po planszy bez ciężkiej biblioteki animacji?",
        },
        decision: {
          en: "Tiles are absolutely positioned inside the board. Each tile gets a slot--{index} CSS class that maps to fixed left/top coordinates. Swapping the class triggers CSS transitions automatically.",
          pl: "Kafelki są pozycjonowane absolutnie wewnątrz planszy. Każdy kafelek dostaje klasę slot--{index}, która mapuje się na stałe wartości left/top. Zamiana klasy automatycznie wyzwala przejścia CSS.",
        },
        result: {
          en: "Smooth slide animations with zero JavaScript animation logic — just CSS transition: left 0.4s, top 0.4s. Simple and performant.",
          pl: "Płynne animacje przesuwania bez logiki animacji w JavaScripcie — tylko CSS transition: left 0.4s, top 0.4s. Proste i wydajne.",
        },
      },
      {
        problem: {
          en: "How to represent tile positions as React state in a way that is easy to update and check for win?",
          pl: "Jak reprezentować pozycje kafelków jako stan Reacta w sposób łatwy do aktualizacji i sprawdzania wygranej?",
        },
        decision: {
          en: "Used a flat array of { value, index } objects — value is the tile number, index is its current board position. The blank tile is represented as value 16.",
          pl: "Użyłem płaskiej tablicy obiektów { value, index } — value to numer kafelka, a index to jego aktualna pozycja na planszy. Pusty kafelek jest reprezentowany jako value 16.",
        },
        result: {
          en: "Win check becomes every(n => n.value === n.index + 1), and moving a tile is just swapping two indexes. The state stays simple and easy to reason about.",
          pl: "Sprawdzenie wygranej sprowadza się do every(n => n.value === n.index + 1), a ruch kafelka to zamiana dwóch indeksów. Stan pozostaje prosty i łatwy do zrozumienia.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "About half of all randomly shuffled 15-puzzle boards are mathematically unsolvable, so a player could end up with a board that has no solution.",
          pl: "Około połowa losowo potasowanych plansz 15-puzzle jest matematycznie nierozwiązywalna, więc gracz mógłby trafić na układ bez rozwiązania.",
        },
        solution: {
          en: "Implemented a parity check based on inversion counting. For a 4x4 grid, solvability depends on both the number of inversions and the row position of the blank tile. Shuffling repeats in a do...while loop until the board passes the check.",
          pl: "Zaimplementowałem sprawdzanie parzystości oparte na liczeniu inwersji. Dla siatki 4x4 rozwiązywalność zależy zarówno od liczby inwersji, jak i od wiersza, w którym znajduje się pusty kafelek. Tasowanie powtarza się w pętli do...while, aż plansza przejdzie sprawdzanie.",
        },
        result: {
          en: "Every generated board is guaranteed to be solvable. I learned a real algorithm with actual math behind it — probably the most interesting thing I took from this project.",
          pl: "Każda wygenerowana plansza jest możliwa do rozwiązania. Nauczyłem się prawdziwego algorytmu z matematyką w tle — to chyba najciekawsza rzecz, jaką wyniosłem z tego projektu.",
        },
      },
    ],
    learnings: [
      {
        en: "TypeScript interfaces for component props and shared data shapes",
        pl: "Interfejsy TypeScript dla propsów komponentów i współdzielonych struktur danych",
      },
      {
        en: "Parity algorithm for 15-puzzle solvability — inversion counting on even-sized grids",
        pl: "Algorytm parzystości dla rozwiązywalności 15-puzzle — liczenie inwersji na siatkach o parzystym rozmiarze",
      },
      {
        en: "CSS absolute positioning and class swapping as a simple animation technique",
        pl: "Absolutne pozycjonowanie CSS i zamiana klas jako prosta technika animacji",
      },
      {
        en: "Keyboard event listeners in React with proper cleanup in useEffect",
        pl: "Nasłuchiwanie zdarzeń klawiatury w React z poprawnym czyszczeniem w useEffect",
      },
      {
        en: "Firebase Hosting deployment for a Vite project",
        pl: "Deploy projektu Vite na Firebase Hosting",
      },
    ],
    githubUrl: "https://github.com/Giszta/sliding-game---react-practice",
    liveUrl: "https://sliding-game-65029.web.app/",
    image: "/images/projects/sliding-game.png",
    createdAt: "2023-11-20",
  },
  {
    slug: "photopage",
    title: "Fotoroman",
    shortDescription: {
      en: "Photography website for my dad — album galleries with filtering, a full-featured lightbox viewer, built with vanilla HTML, CSS and JavaScript.",
      pl: "Strona fotograficzna dla mojego taty — galerie albumów z filtrowaniem, rozbudowana przeglądarka lightbox, zbudowana w czystym HTML, CSS i JavaScript.",
    },
    longDescription: {
      en: "A photography website I built for my father so he could publish and share his photos online. It includes three pages: a home page with a randomly selected photo and quote on every load, an album gallery with category filtering, and an about page. The lightbox viewer was the most complex part — thumbnails, prev/next arrows, keyboard navigation, autoplay with an animated circular progress bar, and fade transitions, all implemented manually. Navigation and footer are injected into every page via JavaScript to avoid copy-pasting HTML across three files. Apart from Font Awesome icons loaded from CDN, the project uses no external libraries. It was a personal project with a real user who actually requested new features.",
      pl: "Strona fotograficzna zbudowana dla mojego taty, żeby mógł publikować i udostępniać swoje zdjęcia online. Zawiera trzy podstrony: stronę główną z losowo wybranym zdjęciem i cytatem przy każdym załadowaniu, galerię albumów z filtrowaniem według kategorii oraz stronę o autorze. Najbardziej złożona była przeglądarka lightbox — miniatury, strzałki nawigacji, obsługa klawiatury, autoodtwarzanie z animowanym kołowym paskiem postępu i przejścia fade, wszystko zaimplementowane ręcznie. Nawigacja i footer są wstrzykiwane do każdej strony przez JavaScript, żeby uniknąć kopiowania tego samego HTML w trzech plikach. Poza ikonami Font Awesome ładowanymi z CDN projekt nie używa zewnętrznych bibliotek. To projekt osobisty z prawdziwym użytkownikiem, który faktycznie prosił o nowe funkcje.",
    },
    category: "frontend",
    status: "live",
    difficulty: "beginner",
    featured: false,
    priority: 7,
    stack: ["HTML5", "CSS3", "JavaScript"],
    features: [
      {
        en: "Album gallery with category filtering: Poland, Europe and Other",
        pl: "Galeria albumów z filtrowaniem według kategorii: Polska, Europa i Inne",
      },
      {
        en: "Lightbox viewer with thumbnails, prev/next arrows, keyboard navigation and photo counter",
        pl: "Przeglądarka lightbox z miniaturami, strzałkami nawigacji, obsługą klawiatury i licznikiem zdjęć",
      },
      {
        en: "Autoplay with animated circular progress bar and collapsible thumbnail strip",
        pl: "Autoodtwarzanie z animowanym kołowym paskiem postępu i zwijanym paskiem miniatur",
      },
      {
        en: "Home page with a randomly selected photo and photography quote on each load",
        pl: "Strona główna z losowo wybranym zdjęciem i cytatem fotograficznym przy każdym załadowaniu",
      },
      {
        en: "Navigation and footer injected via JavaScript — one source of truth across all three pages",
        pl: "Nawigacja i footer wstrzykiwane przez JavaScript — jeden punkt prawdy dla wszystkich trzech podstron",
      },
      {
        en: "Responsive layout with hamburger sidebar on mobile devices",
        pl: "Responsywny layout z bocznym menu hamburger na urządzeniach mobilnych",
      },
    ],
    techDecisions: [
      {
        problem: {
          en: "How to filter albums without a framework or build tool?",
          pl: "Jak filtrować albumy bez frameworka ani narzędzia budowania?",
        },
        decision: {
          en: "Used filter buttons with data-filter attributes and toggled CSS classes on gallery items to show or hide them through pure DOM manipulation.",
          pl: "Użyłem przycisków filtrów z atrybutami data-filter i przełączałem klasy CSS na elementach galerii, aby pokazywać lub ukrywać je przez czystą manipulację DOM.",
        },
        result: {
          en: "The filtering worked instantly with no framework overhead. It also helped me understand how much repetitive DOM work modern frameworks abstract away.",
          pl: "Filtrowanie działało natychmiast i bez narzutu frameworka. Pomogło mi też zrozumieć, jak dużo powtarzalnej pracy z DOM abstrahują nowoczesne frameworki.",
        },
      },
      {
        problem: {
          en: "Three HTML pages needed the same navigation and footer — how to avoid copy-pasting the same markup?",
          pl: "Trzy strony HTML potrzebowały tej samej nawigacji i footera — jak uniknąć kopiowania tego samego kodu?",
        },
        decision: {
          en: "Rendered the navigation and footer as template literals in separate JavaScript files and injected them via innerHTML into placeholder elements on each page.",
          pl: "Wyrenderowałem nawigację i footer jako template literals w osobnych plikach JavaScript, a następnie wstrzyknąłem je przez innerHTML do elementów placeholder na każdej stronie.",
        },
        result: {
          en: "One change updated all pages. It was not an ideal solution, but it worked and showed me why component systems and templating engines exist.",
          pl: "Jedna zmiana aktualizowała wszystkie podstrony. Nie było to idealne rozwiązanie, ale działało i pokazało mi, dlaczego istnieją systemy komponentów oraz silniki szablonów.",
        },
      },
    ],
    challenges: [
      {
        challenge: {
          en: "The lightbox had many moving parts — current image index, active thumbnail highlight, album reference, autoplay interval and progress bar animation all needed to stay in sync.",
          pl: "Lightbox miał dużo zależnych elementów — aktualny indeks zdjęcia, podświetloną miniaturę, referencję do albumu, interwał autoodtwarzania i animację paska postępu, które musiały pozostać zsynchronizowane.",
        },
        solution: {
          en: "Centralized the state in module-level variables and made sure every navigation function — next, previous, thumbnail click and autoplay — updated the related values in the same order.",
          pl: "Scentralizowałem stan w zmiennych na poziomie modułu i zadbałem, aby każda funkcja nawigacji — następne zdjęcie, poprzednie zdjęcie, kliknięcie miniatury i autoodtwarzanie — aktualizowała powiązane wartości w tej samej kolejności.",
        },
        result: {
          en: "The lightbox worked, but the code became long and repetitive. This was the moment I understood why state management and component-based UI matter.",
          pl: "Lightbox działał, ale kod stał się długi i powtarzalny. To był moment, w którym zrozumiałem, dlaczego zarządzanie stanem i komponentowe UI mają znaczenie.",
        },
      },
      {
        challenge: {
          en: "I discovered a mismatch between JavaScript data and HTML classes — Slovenia albums had filter: 'Polska' in the data file but class='europa' in HTML, so filtering broke without a clear error.",
          pl: "Odkryłem niezgodność między danymi JavaScript a klasami HTML — albumy ze Słowenii miały filter: 'Polska' w pliku danych, ale class='europa' w HTML, przez co filtrowanie przestało działać bez wyraźnego błędu.",
        },
        solution: {
          en: "Fixed the data file to match the HTML. The real lesson, however, was that keeping the same information in two places eventually leads to inconsistencies.",
          pl: "Poprawiłem plik danych, żeby był zgodny z HTML. Prawdziwa lekcja była jednak taka, że trzymanie tych samych informacji w dwóch miejscach prędzej czy później prowadzi do niespójności.",
        },
        result: {
          en: "Filtering started working correctly, and I understood why a single source of truth matters even in a small project.",
          pl: "Filtrowanie zaczęło działać poprawnie, a ja zrozumiałem, dlaczego jeden punkt prawdy ma znaczenie nawet w małym projekcie.",
        },
      },
    ],
    learnings: [
      {
        en: "Vanilla JavaScript DOM manipulation without framework abstractions",
        pl: "Manipulacja DOM w czystym JavaScripcie bez abstrakcji frameworków",
      },
      {
        en: "Why component systems exist — I felt the pain of manually syncing the same HTML across multiple files",
        pl: "Dlaczego istnieją systemy komponentów — poczułem problem ręcznej synchronizacji tego samego HTML w wielu plikach",
      },
      {
        en: "Why state management exists — coordinating multiple interdependent variables manually gets messy fast",
        pl: "Dlaczego istnieje zarządzanie stanem — ręczna koordynacja wielu zależnych zmiennych szybko staje się chaotyczna",
      },
      {
        en: "Building for a real user — feature requests, feedback and responsibility for something that is actually used",
        pl: "Budowanie dla realnego użytkownika — prośby o funkcje, informacja zwrotna i odpowiedzialność za coś, z czego ktoś faktycznie korzysta",
      },
    ],
    githubUrl: "https://github.com/Giszta/photopage",
    liveUrl: "https://giszta.github.io/photopage/",
    image: "/images/projects/photopage.png",
    createdAt: "2023-08-18",
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
