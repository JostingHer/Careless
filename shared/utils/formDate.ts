import { getCodeLang } from "../../web/src/utils/getCodeLang";

export const formatDate = (dateString: Date, language?: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date(dateString).toLocaleDateString(`${getCodeLang(language) || "es-ES"}`, options);
};