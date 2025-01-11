const enum LANGUAGE {
  ES = "es",
  EN = "en",
}
const DEFAULT_LANGUAGE: LANGUAGE = LANGUAGE.ES;

export { DEFAULT_LANGUAGE, LANGUAGE };

export const Languages = [
  { title: "Español", value: LANGUAGE.ES },
  { title: "Inglés", value: LANGUAGE.EN },
];
