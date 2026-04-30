export type Locale = "ru" | "en";

const ru = {
  meta: {
    title: "Разработка сайтов и мобильных приложений под ключ — Ярослав Дудкин",
    description:
      "Разработка сайтов и мобильных приложений под ключ. Лендинги, корпоративные сайты, веб-приложения с CRM, iOS-приложения. Полный цикл: дизайн, архитектура, код, деплой.",
  },
  hero: {
    kicker: "Ярослав Дудкин · вайб-кодер · Москва",
    headline: "Разработка сайтов и мобильных приложений под ключ",
    subtitle:
      "Сайты, CRM-системы и iOS-приложения — от идеи до деплоя. Полный цикл: дизайн, архитектура, frontend, бэкенд.",
    cta: "Обсудить проект",
  },
  about: {
    kicker: "Что я делаю",
    heading: "Создание сайтов для бизнеса",
    intro: {
      before: "Разрабатываю сайты и мобильные приложения ",
      highlight: "под ключ",
      between: " — от простых лендингов до ",
      company: "веб-приложений с CRM и iOS-приложений",
      after:
        " для сотрудников. Делаю всё сам: дизайн, архитектура, frontend, бэкенд, деплой — без команды на 5 человек.",
    },
    previous:
      "Стек — Next.js, Supabase, Swift / SwiftUI. Параллельно беру небольшие задачи: создание сайтов для бизнеса, разработка лендингов, мини-приложения и интеграции.",
    services: "Стек и направления",
    serviceBadges: [
      "Разработка сайтов под ключ",
      "Веб-приложения с CRM",
      "Лендинги",
      "iOS-приложения",
      "Telegram Mini Apps",
      "Дизайн интерфейсов",
      "Next.js · React",
      "Supabase · PostgreSQL",
      "Swift · SwiftUI",
      "Интеграции и API",
      "Деплой и инфраструктура",
      "Vibe-coding с AI",
    ],
  },
  featuredWork: {
    kicker: "Кейсы",
    heading: "Разработка мобильных приложений iOS и Android",
    subheading:
      "Помимо сайтов, делаю мобильные приложения с нуля. Ниже — комплексные кейсы, где в одной экосистеме собраны сайт, CRM-система и iOS-приложения для клиентов и сотрудников.",
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
  pricing: {
    kicker: "Стоимость",
    heading: "Сколько стоит разработка сайта или приложения",
    description:
      "Цена зависит от объёма работ, сложности дизайна и инфраструктуры. Ниже — ориентир по типам проектов. Точную оценку и сроки дам после короткого разговора — обычно в день обращения.",
    tiers: [
      {
        title: "Лендинг",
        description:
          "Одностраничный сайт с формой заявки и аналитикой. От нескольких дней работы.",
      },
      {
        title: "Корпоративный сайт или веб-приложение",
        description:
          "Многостраничный сайт или веб-приложение с CRM, авторизацией и базой данных. От 1 до 3 недель.",
      },
      {
        title: "Мобильное приложение iOS",
        description:
          "Полноценное приложение под публикацию в App Store. От 1–2 месяцев в зависимости от объёма функций.",
      },
    ],
    ctaTitle: "Напишите — обсудим задачу",
    ctaSubtitle:
      "Отвечаю обычно в течение часа в рабочее время. Расскажите коротко, что нужно — пришлю оценку и сроки.",
    contacts: {
      telegram: { label: "Telegram", href: "#" },
      whatsapp: { label: "WhatsApp", href: "#" },
      email: { label: "Email", href: "mailto:dudkinyaroslav02@gmail.com" },
    },
  },
  footer: "© 2026 Ярослав Дудкин · разработка сайтов и приложений под ключ",
};

const en: typeof ru = {
  meta: {
    title: "End-to-end web and mobile development — Yaroslav Dudkin",
    description:
      "End-to-end web and mobile development. Landing pages, corporate sites, web apps with CRM, iOS apps. Full cycle: design, architecture, code, deploy.",
  },
  hero: {
    kicker: "Yaroslav Dudkin · vibe-coder · Moscow",
    headline: "End-to-end web and mobile development",
    subtitle:
      "Websites, CRM systems and iOS apps — from idea to deploy. Full cycle: design, architecture, frontend, backend.",
    cta: "Discuss your project",
  },
  about: {
    kicker: "What I do",
    heading: "Websites for business",
    intro: {
      before: "I build websites and mobile apps ",
      highlight: "end-to-end",
      between: " — from simple landing pages to ",
      company: "web apps with CRM and iOS apps",
      after:
        " for staff. I handle everything myself: design, architecture, frontend, backend, deploy — no team of five.",
    },
    previous:
      "Stack — Next.js, Supabase, Swift / SwiftUI. I also take on smaller jobs: business websites, landing pages, mini apps and integrations.",
    services: "Stack and focus areas",
    serviceBadges: [
      "End-to-end websites",
      "Web apps with CRM",
      "Landing pages",
      "iOS apps",
      "Telegram Mini Apps",
      "UI design",
      "Next.js · React",
      "Supabase · PostgreSQL",
      "Swift · SwiftUI",
      "Integrations and APIs",
      "Deploy and infrastructure",
      "Vibe-coding with AI",
    ],
  },
  featuredWork: {
    kicker: "Case Studies",
    heading: "iOS and Android mobile app development",
    subheading:
      "Beyond websites, I build mobile apps from scratch. Below are full-stack case studies that bundle a website, CRM system and iOS apps for customers and staff into one ecosystem.",
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
  pricing: {
    kicker: "Pricing",
    heading: "How much does a website or app cost",
    description:
      "Pricing depends on scope, design complexity and infrastructure. Below is a rough guide by project type. I'll give a precise estimate and timeline after a short call — usually the same day.",
    tiers: [
      {
        title: "Landing page",
        description:
          "Single-page website with a lead form and analytics. From a few days of work.",
      },
      {
        title: "Corporate site or web app",
        description:
          "Multi-page site or web app with CRM, auth and a database. From 1 to 3 weeks.",
      },
      {
        title: "iOS mobile app",
        description:
          "Production-ready app for the App Store. From 1–2 months depending on scope.",
      },
    ],
    ctaTitle: "Write me — let's discuss",
    ctaSubtitle:
      "I usually reply within an hour during work hours. Tell me briefly what you need — I'll send back an estimate and timeline.",
    contacts: {
      telegram: { label: "Telegram", href: "#" },
      whatsapp: { label: "WhatsApp", href: "#" },
      email: { label: "Email", href: "mailto:dudkinyaroslav02@gmail.com" },
    },
  },
  footer: "© 2026 Yaroslav Dudkin · end-to-end web and mobile development",
};

export const dict = { ru, en };
