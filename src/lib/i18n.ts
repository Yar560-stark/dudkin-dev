export type Locale = "ru" | "en";

const ru = {
  meta: {
    title: "Ярослав Дудкин — Senior UI/UX-дизайнер",
    description:
      "Личный сайт Ярослава Дудкина: опыт, кейсы и проекты в области UI/UX-дизайна.",
  },
  announcement:
    "Теперь доступно в Figma и в коде — настройте свой личный сайт уже сегодня.",
  hero: {
    name: "Ярослав Дудкин",
    role: "Senior UI/UX-дизайнер",
    location: "Москва, Россия",
    cta: "Связаться",
  },
  about: {
    kicker: "Обо мне",
    intro: {
      before: "Привет! Я Ярослав — UX/UI-дизайнер из Москвы, сейчас ",
      highlight: "создаю цифровые продукты",
      between: " в ",
      company: "WrapPixel",
      after:
        " — SaaS-стартапе, который занимается инструментами для продуктивности.",
    },
    previous:
      "Раньше работал в Oak Studio, автор продуктов DesignKit и MentalWell.",
    services: "Услуги",
    serviceBadges: [
      "Графический дизайн",
      "UX-исследования",
      "Дизайн мобильных приложений",
      "Бренд-айдентика",
      "Адаптивный дизайн",
      "Прототипирование",
      "Иллюстрация",
      "Моушн-дизайн",
      "Печатный дизайн",
      "UI-разработка",
      "Интерактивные медиа",
    ],
  },
  featuredWork: {
    kicker: "Избранные работы",
    cta: "Скачать портфолио",
    items: [
      {
        title: "Брендинг и веб-дизайн для клининговой компании",
        description:
          "Разработал современную айдентику и адаптивный сайт для профессиональной клининговой компании — с упором на ясность и удобство.",
        roles: ["UX-дизайнер", "Framer-дизайнер"],
        image: "/images/feature-work/feature-img-1.png",
      },
      {
        title: "Бренд-айдентика для медицинской компании",
        description:
          "Создал визуальный язык, который вызывает доверие и эмпатию — для современной медицинской организации.",
        roles: ["UX-дизайнер", "Framer-дизайнер"],
        image: "/images/feature-work/feature-img-2.png",
      },
    ],
  },
  experience: {
    kicker: "Опыт работы",
    items: [
      {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Продуктовый дизайнер, Tailwind",
        location: "Удалённо",
        startYear: "2022",
        endYear: "по н. в.",
        isPresent: true,
        bulletPoints: [
          "Провёл сквозной редизайн интерфейса дашборда — удержание пользователей выросло на 23%",
          "Работал в связке с инженерами и продакт-менеджерами, ускорив выпуск фич",
          "Спроектировал компоненты дизайн-системы, которую внедрили 4+ внутренние команды",
        ],
      },
      {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX-дизайнер — Asana",
        location: "Нью-Йорк, США",
        startYear: "2019",
        endYear: "2022",
        isPresent: false,
        bulletPoints: [
          "Создавал дизайн-системы для клиентских проектов в финтехе и медицине",
          "Проводил пользовательские тесты и исследования для валидации решений",
          "Помогал расти джуниор-дизайнерам как наставник",
        ],
      },
    ],
  },
  education: {
    kicker: "Образование",
    items: [
      {
        date: "Сен 2015 — Май 2019",
        title: "Бакалавр изящных искусств, графический дизайн",
        subtitle: "Pratt Institute — Бруклин, Нью-Йорк",
      },
      {
        date: "Мар 2021 — Авг 2021",
        title: "Сертификат по UX-дизайну",
        subtitle: "Google UX Design — Coursera",
      },
      {
        date: "Янв 2020 — Мар 2020",
        title: "Буткемп по фронтенд-разработке",
        subtitle: "General Assembly — Нью-Йорк, США",
      },
    ],
  },
  projects: {
    caseStudiesKicker: "Кейсы",
    sideProjectsKicker: "Личные проекты",
    comingSoon: "Скоро",
    caseStudies: [
      { name: "Wellnest", url: "#" },
      { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
      { name: "Formless", url: "#", comingSoon: false },
      { name: "Gridsnap", url: "#", comingSoon: true },
      { name: "OrbitPay — мобильное приложение", url: "#", comingSoon: true },
      { name: "Siteflow — конструктор страниц", url: "#", comingSoon: true },
    ],
  },
  footer: {
    prefix: "2026 © Дизайн — ",
    suffix: ". Все права защищены.",
  },
};

const en: typeof ru = {
  meta: {
    title: "Yaroslav Dudkin — Senior UI/UX Designer",
    description:
      "Personal site of Yaroslav Dudkin: experience, case studies and projects in UI/UX design.",
  },
  announcement:
    "Now available on Figma & Code — start customizing your personal site today.",
  hero: {
    name: "Yaroslav Dudkin",
    role: "Senior UI/UX Designer",
    location: "Moscow, Russia",
    cta: "Get in touch",
  },
  about: {
    kicker: "About Me",
    intro: {
      before: "Hey there. I'm Yaroslav — UX/UI designer based in Moscow, currently ",
      highlight: "crafting digital products",
      between: " at ",
      company: "WrapPixel",
      after: ", a SaaS startup focused on productivity tools.",
    },
    previous:
      "Previously at Oak Studio, and creator of DesignKit and MentalWell.",
    services: "Services",
    serviceBadges: [
      "Graphic Design",
      "User Experience",
      "Mobile App Design",
      "Brand Identity",
      "Responsive Design",
      "Prototyping",
      "Illustration",
      "Motion Graphics",
      "Print Design",
      "UI Development",
      "Interactive Media",
    ],
  },
  featuredWork: {
    kicker: "Featured work",
    cta: "Download Portfolio",
    items: [
      {
        title: "Branding + Web Design for Cleaning Services",
        description:
          "Developed a modern brand identity and a responsive web experience tailored for a professional cleaning company, focused on clarity and usability.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/feature-img-1.png",
      },
      {
        title: "Brand Identity for a Health Care Company",
        description:
          "Created a distinctive visual identity and design language to build trust and empathy for a forward-thinking health care provider.",
        roles: ["UX Designer", "Framer Designer"],
        image: "/images/feature-work/feature-img-2.png",
      },
    ],
  },
  experience: {
    kicker: "Experience",
    items: [
      {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Product Designer, Tailwind",
        location: "Remote",
        startYear: "2022",
        endYear: "Present",
        isPresent: true,
        bulletPoints: [
          "Led end-to-end redesign of dashboard UI, improving user retention by 23%",
          "Collaborated with engineers and product managers to ship features faster",
          "Designed components used in a system adopted by 4+ internal teams",
        ],
      },
      {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX Designer — Asana",
        location: "New York, NY",
        startYear: "2019",
        endYear: "2022",
        isPresent: false,
        bulletPoints: [
          "Created design systems for client projects across finance and healthcare",
          "Conducted user testing and research to validate designs",
          "Helped junior designers grow via mentorship",
        ],
      },
    ],
  },
  education: {
    kicker: "Education",
    items: [
      {
        date: "Sep 2015 — May 2019",
        title: "B.F.A. in Graphic Design",
        subtitle: "Pratt Institute — Brooklyn, NY",
      },
      {
        date: "Mar 2021 — Aug 2021",
        title: "UX Design Certificate",
        subtitle: "Google UX Design — Coursera",
      },
      {
        date: "Jan 2020 — Mar 2020",
        title: "Front-End Web Development Bootcamp",
        subtitle: "General Assembly — New York, NY",
      },
    ],
  },
  projects: {
    caseStudiesKicker: "Case studies",
    sideProjectsKicker: "Side Projects",
    comingSoon: "Coming Soon",
    caseStudies: [
      { name: "Wellnest", url: "#" },
      { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
      { name: "Formless", url: "#", comingSoon: false },
      { name: "Gridsnap", url: "#", comingSoon: true },
      { name: "OrbitPay Mobile App", url: "#", comingSoon: true },
      { name: "Siteflow Page Builder", url: "#", comingSoon: true },
    ],
  },
  footer: {
    prefix: "2026 © Designed by ",
    suffix: " — All rights reserved",
  },
};

export const dict = { ru, en };
