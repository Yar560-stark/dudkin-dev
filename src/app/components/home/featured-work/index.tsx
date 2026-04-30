import Image from "next/image";
import Link from "next/link";
import { getLocale } from "@/lib/get-locale";
import { dict } from "@/lib/i18n";

const FeaturedWork = async () => {
  const locale = await getLocale();
  const t = dict[locale].featuredWork;

  return (
    <section>
      <div className="container">
        <div className="border-x border-border">
          <div className="flex flex-col gap-4 max-w-3xl mx-auto py-10 md:py-14 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              {t.kicker}
            </p>
            <h2>{t.heading}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              {t.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            {t.items.map((value, index) => {
              const isRightCol = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-border" : ""}`}
                >
                  <Link href={"/"} className="overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={490}
                      height={300}
                      className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                  </Link>
                  <div className="flex flex-col gap-1 sm:gap-2 px-2">
                    <Link href={"/"}>
                      <h3 className="text-xl sm:text-2xl font-medium text-primary">
                        {value.title}
                      </h3>
                    </Link>
                    <p className="text-base text-muted-foreground">
                      {value.description}
                    </p>
                    <div className="flex pt-1">
                      <p className="text-sm text-secondary">
                        {value.roles.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
