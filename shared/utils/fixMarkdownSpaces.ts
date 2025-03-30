export function fixMarkdown(text: string): string {
  if (!text) return text;
  return fixColonSpaces(fixMarkdownSpaces(fixLinkSpaces(text)));
}

function fixMarkdownSpaces(text: string): string {
  if (!text) return text;
  // Reemplaza los espacios entre las palabras y los signos ** o __
  return text.replace(
    /(\*\*|\*\*\*|__|___)\s*(.*?)\s*(\*\*|\*\*\*|__|___)/g,
    "$1$2$3",
  );
}
function fixColonSpaces(text: string): string {
  if (!text) return text;
  // Reemplaza los espacios entre : y **
  return text.replace(/:\s+\*\*/g, ":**");
}

function fixLinkSpaces(text: string): string {
  if (!text) return text;
  // Reemplaza los espacios entre ] y (
  return text.replace(/]\s+\(/g, "](");
}
