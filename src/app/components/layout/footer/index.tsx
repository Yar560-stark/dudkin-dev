import Link from "next/link";
import { getLocale } from "@/lib/get-locale";
import { dict } from "@/lib/i18n";

const Footer = async () => {
  const locale = await getLocale();
  const t = dict[locale].footer;
  return (
    <footer className="-translate-y-px bg-white border-t border-border">
      <div className="container">
        <div className="border-x border-border">
          <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
            <p>
              {t.prefix}
              <Link
                href={"https://shadcnspace.com/"}
                target="_blank"
                className="hover:text-primary"
              >
                shadcnspace.com
              </Link>
              {t.suffix}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
