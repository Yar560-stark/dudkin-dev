import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/get-locale";
import { dict } from "@/lib/i18n";

const HeroSection = async () => {
  const locale = await getLocale();
  const t = dict[locale];
  const socialIcon = [
    {
      img: "/images/icon/twitter-icon.svg",
      href: "https://twitter.com",
      icon: "Twitter",
    },
    {
      img: "/images/icon/behance-icon.svg",
      href: "https://behance.com",
      icon: "Behance",
    },
    {
      img: "/images/icon/dribble-icon.svg",
      href: "https://dribble.com",
      icon: "Dribble",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image
              src={"/images/hero-sec/banner-bg-img.png"}
              alt="banner-img"
              width={1080}
              height={267}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-x border-border">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image
                  src={"/images/hero-sec/user-img.png"}
                  alt={t.hero.kicker}
                  width={145}
                  height={145}
                  className="border-4 border-white rounded-full"
                />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start xs:text-left max-w-xl">
                <p className="text-xs sm:text-sm tracking-[1.5px] text-secondary uppercase font-medium">
                  {t.hero.kicker}
                </p>
                <h1 className="leading-tight">{t.hero.headline}</h1>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 shrink-0">
                <div className="flex items-center gap-2">
                  {socialIcon?.map((value, index) => {
                    return (
                      <Link
                        href={value?.href}
                        key={index}
                        className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-border rounded-full"
                      >
                        <Image
                          src={value?.img}
                          alt={value?.icon}
                          width={18}
                          height={18}
                        />
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2.5 bg-brand hover:bg-brand/90 transition-colors py-3 px-5 rounded-full"
                >
                  <Image
                    src="/images/icon/spark-icon.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="brightness-0 invert"
                  />
                  <span className="text-sm sm:text-base font-semibold text-brand-foreground whitespace-nowrap">
                    {t.hero.cta}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
