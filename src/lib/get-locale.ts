import { headers } from "next/headers";

const RU_LOCALES = new Set(["ru", "be", "kk", "ky", "uz", "uk"]);

export type Locale = "ru" | "en";

export async function getLocale(): Promise<Locale> {
  try {
    const h = await headers();
    const accept = h.get("accept-language");
    if (!accept) return "ru";
    const primary = accept
      .split(",")[0]
      ?.split("-")[0]
      ?.trim()
      .toLowerCase();
    if (!primary) return "ru";
    if (RU_LOCALES.has(primary)) return "ru";
    return "en";
  } catch {
    return "ru";
  }
}
