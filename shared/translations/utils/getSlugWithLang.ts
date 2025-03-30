import {DEFAULT_LANGUAGE, LANGUAGE, Languages} from "../domain/languages";

export function getSlugWithLang(
    slug?: string,
    language?: string | null | undefined,
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


function cleanSlashInPath(path: string): string {
    if (!path) {
        return "";
    }
    return path.replace(/(https?:\/\/)|\/\//g, function (match) {
        return match === "//" ? "/" : match;
    });
}

export const getLanguageTitle = (value: LANGUAGE): string | undefined => {
    const language = Languages.find(lang => lang.value === value);
    return language?.title; // Devuelve el 'title' o undefined si no encuentra coincidencia
};