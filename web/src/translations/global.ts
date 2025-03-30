import {
    DEFAULT_LANGUAGE,
    LANGUAGE,
} from "@global-shared/translations/domain/languages.ts";

type TranslationRecord = {
    [key: string]: {
        [key in LANGUAGE]?: string;
    };
};

const translations: TranslationRecord = {
    contacto: {
        [LANGUAGE.EN]: "contact",
    },
    "Lo que sea": {
        [LANGUAGE.EN]: "whatever",
    },
};

export const t = (key: string, language?: LANGUAGE) => {
    if (language === DEFAULT_LANGUAGE || !language) return key;

    const translation = translations[key]?.[language];

    return translation || key;
};
