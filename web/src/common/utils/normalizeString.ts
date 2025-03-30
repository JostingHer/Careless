export const normalizeString = (str: string): string =>
    str.toLowerCase().replace(/[-_ ]/g, "");

export const removeAccents = (str: string): string =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
