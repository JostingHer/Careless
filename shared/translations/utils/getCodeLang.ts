import {DEFAULT_LANGUAGE, LANGUAGE} from "../domain/languages";

export function getCodeLang(language?: LANGUAGE): string {
    const code = language || DEFAULT_LANGUAGE;

    return code.replace("_", "-");
}

export function getLangNormalize(language?: LANGUAGE): string {
    const code = language || DEFAULT_LANGUAGE;
    return code.replace("-", "_");
}
