export type Locale = "ru" | "en";

const ru = {
  meta: {
    title: "Ярослав Дудкин — вайб-кодер",
    description:
      "Личный сайт Ярослава Дудкина: вайб-кодер из Москвы, собираю продукты с нуля вместе с нейросетями. Кейсы: kitlin.ru, boltphone.ru.",
  },
  hero: {
    name: "Ярослав Дудкин",
    role: "Вайб-кодер",
    location: "Москва, Россия",
    cta: "Связаться",
  },
  about: {
    kicker: "Обо мне",
    intro: {
      before: "Привет! Я Ярослав — вайб-кодер из Москвы. Уже 2 года ",
      highlight: "собираю продукты с нуля",
      between: " вместе с ",
      company: "нейросетями",
      after: " — от дизайна и архитектуры до кода и деплоя.",
    },
    previous:
      "Среди ключевых проектов — kitlin.ru и boltphone.ru. Параллельно делаю небольшие задачи на заказ.",
    services: "Чем занимаюсь",
    serviceBadges: [
      "Веб-разработка",
      "iOS-разработка",
      "CRM-системы",
      "UI-дизайн",
      "Архитектура продуктов",
      "Next.js",
      "Swift / SwiftUI",
      "Supabase",
      "Telegram Mini Apps",
      "Интеграции",
      "Vibe-coding",
      "AI-инструменты",
    ],
  },
  featuredWork: {
    kicker: "Главные проекты",
    items: [
      {
        title: "kitlin.ru — экосистема для логистики из Китая",
        description:
          "Веб-сайт, CRM для оператора, клиентское iOS-приложение и iOS-сканер для сотрудников склада. Дизайн, архитектура, верстка и код — собрал с нуля за ~2 месяца вместе с нейросетями.",
        roles: ["Дизайн", "Архитектура", "Web", "iOS"],
        image: "/images/feature-work/feature-img-1.png",
      },
      {
        title: "boltphone.ru — продукт того же типа",
        description:
          "Похожий набор: веб-сайт + CRM + мобильные приложения для клиентов и сотрудников. Полный цикл — от UI-кита до деплоя.",
        roles: ["Дизайн", "Архитектура", "Web", "iOS"],
        image: "/images/feature-work/feature-img-2.png",
      },
    ],
  },
  experience: {
    kicker: "Опыт",
    items: [
      {
        icon: "/images/icon/spark-icon.svg",
        role: "Вайб-кодер · самозанятый",
        location: "Москва · удалённо",
        startYear: "2024",
        endYear: "по н. в.",
        isPresent: true,
        bulletPoints: [
          "Собираю продукты с нуля вместе с нейросетями: от UI-дизайна и архитектуры до кода и деплоя",
          "Запустил kitlin.ru — экосистему из веб-сайта, CRM и двух iOS-приложений (клиент + сканер для склада) за ~2 месяца",
          "Запустил boltphone.ru — аналогичный набор: сайт, CRM и мобильные приложения",
        ],
      },
      {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Клиентские проекты",
        location: "Удалённо",
        startYear: "2024",
        endYear: "по н. в.",
        isPresent: true,
        bulletPoints: [
          "Реализую небольшие задачи на заказ: лендинги, мини-приложения, интеграции",
          "Полный цикл — от ТЗ и дизайна до деплоя на VPS",
        ],
      },
    ],
  },
  education: {
    kicker: "Обучение",
    items: [
      {
        date: "2024 — по н. в.",
        title: "Vibe-coding с нейросетями",
        subtitle: "Самообучение через AI, документацию и эксперименты",
      },
      {
        date: "2022 — 2024",
        title: "Frontend и UI-дизайн",
        subtitle: "Самообучение через open-source и практику",
      },
    ],
  },
  projects: {
    caseStudiesKicker: "Кейсы",
    sideProjectsKicker: "Другие проекты",
    comingSoon: "Скоро",
    caseStudies: [
      { name: "kitlin.ru", url: "https://kitlin.ru" },
      { name: "boltphone.ru", url: "https://boltphone.ru" },
    ],
    sideProjects: [
      { name: "Клиентские лендинги", url: "#", comingSoon: true },
      { name: "Telegram mini-apps", url: "#", comingSoon: true },
    ],
  },
  footer: "© 2026 Ярослав Дудкин",
};

const en: typeof ru = {
  meta: {
    title: "Yaroslav Dudkin — vibe-coder",
    description:
      "Personal site of Yaroslav Dudkin: vibe-coder from Moscow, shipping products end-to-end with AI. Case studies: kitlin.ru, boltphone.ru.",
  },
  hero: {
    name: "Yaroslav Dudkin",
    role: "Vibe-coder",
    location: "Moscow, Russia",
    cta: "Get in touch",
  },
  about: {
    kicker: "About Me",
    intro: {
      before: "Hey there. I'm Yaroslav — a vibe-coder from Moscow. For 2 years I've been ",
      highlight: "shipping products from scratch",
      between: " with ",
      company: "AI as a partner",
      after: " — from design and architecture to code and deploy.",
    },
    previous:
      "Key projects include kitlin.ru and boltphone.ru. Alongside that, I take on smaller client work.",
    services: "What I do",
    serviceBadges: [
      "Web Development",
      "iOS Development",
      "CRM Systems",
      "UI Design",
      "Product Architecture",
      "Next.js",
      "Swift / SwiftUI",
      "Supabase",
      "Telegram Mini Apps",
      "Integrations",
      "Vibe-coding",
      "AI Tools",
    ],
  },
  featuredWork: {
    kicker: "Featured Projects",
    items: [
      {
        title: "kitlin.ru — China-Russia logistics ecosystem",
        description:
          "Website, operator CRM, customer iOS app, and iOS scanner for warehouse staff. Design, architecture, frontend and code — built from scratch in ~2 months with AI as a partner.",
        roles: ["Design", "Architecture", "Web", "iOS"],
        image: "/images/feature-work/feature-img-1.png",
      },
      {
        title: "boltphone.ru — same blueprint, different domain",
        description:
          "The same stack: website + CRM + mobile apps for customers and staff. End-to-end ownership — from UI kit to deploy.",
        roles: ["Design", "Architecture", "Web", "iOS"],
        image: "/images/feature-work/feature-img-2.png",
      },
    ],
  },
  experience: {
    kicker: "Experience",
    items: [
      {
        icon: "/images/icon/spark-icon.svg",
        role: "Vibe-coder · independent",
        location: "Moscow · remote",
        startYear: "2024",
        endYear: "Present",
        isPresent: true,
        bulletPoints: [
          "Ship products end-to-end with AI as a partner: UI design, architecture, code, deploy",
          "Built kitlin.ru — an ecosystem of website, CRM and two iOS apps (customer + warehouse scanner) in ~2 months",
          "Built boltphone.ru — the same blueprint: website, CRM, mobile apps",
        ],
      },
      {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Client work",
        location: "Remote",
        startYear: "2024",
        endYear: "Present",
        isPresent: true,
        bulletPoints: [
          "Take on small client tasks: landing pages, mini apps, integrations",
          "End-to-end ownership — from spec and design to VPS deploy",
        ],
      },
    ],
  },
  education: {
    kicker: "Learning",
    items: [
      {
        date: "2024 — Present",
        title: "Vibe-coding with AI",
        subtitle: "Self-taught through AI, documentation and experiments",
      },
      {
        date: "2022 — 2024",
        title: "Frontend and UI design",
        subtitle: "Self-taught through open-source and practice",
      },
    ],
  },
  projects: {
    caseStudiesKicker: "Case Studies",
    sideProjectsKicker: "Other Projects",
    comingSoon: "Coming Soon",
    caseStudies: [
      { name: "kitlin.ru", url: "https://kitlin.ru" },
      { name: "boltphone.ru", url: "https://boltphone.ru" },
    ],
    sideProjects: [
      { name: "Client landing pages", url: "#", comingSoon: true },
      { name: "Telegram mini-apps", url: "#", comingSoon: true },
    ],
  },
  footer: "© 2026 Yaroslav Dudkin",
};

export const dict = { ru, en };
