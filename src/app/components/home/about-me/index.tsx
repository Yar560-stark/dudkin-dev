import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  const servicesBedge = [
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
  ];
  return (
    <section>
      <div className="container">
        <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Обо мне
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Привет! Я Ярослав — UX/UI-дизайнер из Москвы, сейчас{" "}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  создаю цифровые продукты
                </span>{" "}
                в <span className="border-b-2">WrapPixel</span> — SaaS-стартапе,
                который занимается инструментами для продуктивности.
              </h2>
              <h5 className="text-secondary font-normal">
                Раньше работал в Oak Studio, автор продуктов DesignKit и
                MentalWell.
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Услуги
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesBedge?.map((value, index) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={index}
                      className="py-1.5 px-3 rounded-lg h-full"
                    >
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {value}
                      </p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
