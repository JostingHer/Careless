const enum LANGUAGE {
    ES = "es",
    EN = "en",
}
const DEFAULT_LANGUAGE: LANGUAGE = LANGUAGE.ES;

export { DEFAULT_LANGUAGE, LANGUAGE };
export const LIMIT_CHARACTERS_IN_TRANSLATION = 9200;

export const Languages = [
    { title: "Español", value: LANGUAGE.ES },
    { title: "Inglés", value: LANGUAGE.EN },
];
