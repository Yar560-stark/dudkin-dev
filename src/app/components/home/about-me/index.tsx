import { Badge } from "@/components/ui/badge";
import { getLocale } from "@/lib/get-locale";
import { dict } from "@/lib/i18n";

const AboutMe = async () => {
  const locale = await getLocale();
  const t = dict[locale].about;
  return (
    <section>
      <div className="container">
        <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                {t.kicker}
              </p>
              <h2>{t.heading}</h2>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-normal text-primary leading-snug">
                {t.intro.before}
                <span className="bg-brand/15 px-1 rounded">
                  {t.intro.highlight}
                </span>
                {t.intro.between}
                <span className="border-b-2 border-brand">{t.intro.company}</span>
                {t.intro.after}
              </p>
              <h5 className="text-secondary font-normal">
                {t.previous}
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                {t.services}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {t.serviceBadges?.map((value, index) => {
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
