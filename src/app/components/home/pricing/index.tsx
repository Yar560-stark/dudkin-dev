import Link from "next/link";
import { getLocale } from "@/lib/get-locale";
import { dict } from "@/lib/i18n";

const Pricing = async () => {
  const locale = await getLocale();
  const t = dict[locale].pricing;

  return (
    <section id="contact" className="scroll-mt-8">
      <div className="container">
        <div className="border-x border-border">
          <div className="flex flex-col gap-4 max-w-3xl mx-auto py-10 md:py-14 px-4 sm:px-7">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              {t.kicker}
            </p>
            <h2>{t.heading}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border">
            {t.tiers.map((tier, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-2 p-5 sm:p-7"
                >
                  <h4 className="text-lg sm:text-xl font-medium text-primary">
                    {tier.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {tier.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-border bg-[linear-gradient(180deg,_rgba(146,130,248,0.06)_0%,_rgba(243,202,77,0.06)_100%)]">
            <div className="flex flex-col gap-6 max-w-3xl mx-auto px-4 sm:px-7 py-12 md:py-16 text-center items-center">
              <h3 className="text-2xl sm:text-3xl font-medium text-primary max-w-xl">
                {t.ctaTitle}
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                {t.ctaSubtitle}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
                <Link
                  href={t.contacts.telegram.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 py-2.5 px-5 bg-primary text-white rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  {t.contacts.telegram.label}
                </Link>
                <Link
                  href={t.contacts.whatsapp.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 py-2.5 px-5 border border-border rounded-full text-sm sm:text-base font-medium text-primary hover:bg-primary/5 transition-colors"
                >
                  {t.contacts.whatsapp.label}
                </Link>
                <Link
                  href={t.contacts.email.href}
                  className="inline-flex items-center gap-2 py-2.5 px-5 border border-border rounded-full text-sm sm:text-base font-medium text-primary hover:bg-primary/5 transition-colors"
                >
                  {t.contacts.email.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
