export const normalizeString = (str: string): string =>
    str.toLowerCase().replace(/[-_ ]/g, "");
