import { ui, showDefaultLang } from "./ui";

import {
    DEFAULT_LANGUAGE,
    Languages,
} from "../../../company/settings/translations";

export function getLangFromUrl(url: URL) {
    const lang = url.pathname.split("/")[1];
    if (lang && lang in ui) {
        return lang as keyof typeof ui;
    }
    return DEFAULT_LANGUAGE;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof DEFAULT_LANGUAGE]) {
        return ui[lang][key] || ui[DEFAULT_LANGUAGE][key];
    };
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        return !showDefaultLang && l === DEFAULT_LANGUAGE
            ? path
            : `/${l}${path}`;
    };
}
