import { fixMarkdown } from "./fixMarkdownSpaces";

export function customObjectToSanity(
  docFlat: Record<string, string>,
): Record<string, string> {
  const result = docFlat;
  for (const field of Object.keys(docFlat)) {
    // regex que de true si esta _type por ahí escrito
    if (field.includes("slugSanity.current")) {
      const translatedSlug = docFlat[field] as string;
      result[field] = translatedSlug.toLowerCase().replace(/\s/g, "-");
      continue;
    }
    if (typeof docFlat[field] !== "string") {
      result[field] = docFlat[field];
      continue;
    }
    result[field] = fixMarkdown(docFlat[field]);
  }
  return result;
}
