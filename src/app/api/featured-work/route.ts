import { NextResponse } from "next/server";

const featureWork = [
    {
        title: "Брендинг и веб-дизайн для клининговой компании",
        description: "Разработал современную айдентику и адаптивный сайт для профессиональной клининговой компании — с упором на ясность и удобство.",
        roles: ["UX-дизайнер", "Framer-дизайнер"],
        image: "/images/feature-work/feature-img-1.png"
    },
    {
        title: "Бренд-айдентика для медицинской компании",
        description: "Создал визуальный язык, который вызывает доверие и эмпатию — для современной медицинской организации.",
        roles: ["UX-дизайнер", "Framer-дизайнер"],
        image: "/images/feature-work/feature-img-2.png"
    }
]

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};