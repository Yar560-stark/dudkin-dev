import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/footer";
import { getLocale } from "@/lib/get-locale";
import { dict } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const SITE_URL = "https://dudkin.dev";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = dict[locale].meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    alternates: {
      canonical: "/",
      languages: {
        ru: SITE_URL,
        en: SITE_URL,
        "x-default": SITE_URL,
      },
    },
    openGraph: {
      type: "website",
      url: SITE_URL,
      title: m.title,
      description: m.description,
      siteName: "dudkin.dev",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: m.title,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const t = dict[locale];

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: locale === "ru" ? "Ярослав Дудкин" : "Yaroslav Dudkin",
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-sec/user-img.png`,
    jobTitle: locale === "ru" ? "Вайб-кодер" : "Vibe-coder",
    description: t.meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ru" ? "Москва" : "Moscow",
      addressCountry: "RU",
    },
    email: "dudkinyaroslav02@gmail.com",
    knowsAbout: [
      "Web Development",
      "iOS Development",
      "Next.js",
      "React",
      "Supabase",
      "Swift",
      "SwiftUI",
      "CRM",
      "UI Design",
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t.meta.title,
    description: t.meta.description,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-sec/user-img.png`,
    provider: {
      "@type": "Person",
      name: locale === "ru" ? "Ярослав Дудкин" : "Yaroslav Dudkin",
    },
    areaServed: {
      "@type": "Country",
      name: locale === "ru" ? "Россия" : "Russia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "ru" ? "Услуги разработки" : "Development services",
      itemListElement: t.pricing.tiers.map((tier, idx) => ({
        "@type": "Offer",
        position: idx + 1,
        itemOffered: {
          "@type": "Service",
          name: tier.title,
          description: tier.description,
        },
      })),
    },
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
        />
      </body>
    </html>
  );
}
