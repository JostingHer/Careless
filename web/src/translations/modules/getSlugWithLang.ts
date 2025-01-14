import { DEFAULT_LANGUAGE, LANGUAGE } from "@/translations/domain/languages.ts";
import { cleanSlashInPath } from "@/shared/utils/cleanSplash.ts";

export function getSlugWithLang(
    slug?: string | null | undefined,
    language?: string,
): string {
    const lang = language || DEFAULT_LANGUAGE;

    if (!slug) {
        console.error(`getSlugWithLand, path, lang, slug`, lang, slug);
        return "undefined";
    }

    if (lang === DEFAULT_LANGUAGE) {
        if (slug === "/") {
            return "/";
        }
        return cleanSlashInPath(`/${slug}/`);
    }
    if (slug === "/") {
        return `/${lang}/`;
    }
    return cleanSlashInPath(`/${lang}/${slug}/`);
}
