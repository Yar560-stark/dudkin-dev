import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/tailwind-icon.svg",
        role: "Продуктовый дизайнер, Tailwind",
        location: "Удалённо",
        startYear: "2022",
        endYear: "по н. в.",
        bulletPoints: [
            "Провёл сквозной редизайн интерфейса дашборда — удержание пользователей выросло на 23%",
            "Работал в связке с инженерами и продакт-менеджерами, ускорив выпуск фич",
            "Спроектировал компоненты дизайн-системы, которую внедрили 4+ внутренние команды"
        ]
    },
    {
        icon: "/images/icon/asana-icon.svg",
        role: "UI/UX-дизайнер — Asana",
        location: "Нью-Йорк, США",
        startYear: "2019",
        endYear: "2022",
        bulletPoints: [
            "Создавал дизайн-системы для клиентских проектов в финтехе и медицине",
            "Проводил пользовательские тесты и исследования для валидации решений",
            "Помогал расти джуниор-дизайнерам как наставник"
        ]
    },
]

const educationData = [
    {
        date: "Сен 2015 — Май 2019",
        title: "Бакалавр изящных искусств, графический дизайн",
        subtitle: "Pratt Institute — Бруклин, Нью-Йорк"
    },
    {
        date: "Мар 2021 — Авг 2021",
        title: "Сертификат по UX-дизайну",
        subtitle: "Google UX Design — Coursera"
    },
    {
        date: "Янв 2020 — Мар 2020",
        title: "Буткемп по фронтенд-разработке",
        subtitle: "General Assembly — Нью-Йорк, США"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Wellnest", url: "#" },
        { name: "ScoutHire", url: "#" },
    ],
    sideProjects: [
        { name: "Formless", url: "#" },
        { name: "Gridsnap", comingSoon: true },
        { name: "OrbitPay — мобильное приложение", comingSoon: true },
        { name: "Siteflow — конструктор страниц", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};