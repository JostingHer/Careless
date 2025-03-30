export const typesToLock = ["cloudinary.asset", "url"];

export function cleanObject(
  obj: Record<string, unknown> | null,
): Record<string, unknown> | undefined {
  if (obj === null) {
    return undefined;
  }
  const fieldsToDelete = [
    "_id",
    "language",
    "_rev",
    "_createdAt",
    "_updatedAt",
  ];
  const typesToDelete: string[] = [];
  if (obj["_type"] && typesToDelete.includes(obj["_type"] as string)) {
    return undefined;
  }
  if (obj["_type"] && typesToLock.includes(obj["_type"] as string)) {
    return obj;
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    // const ignoreProperty = key.startsWith("_") && key !== "_key";
    if (fieldsToDelete.includes(key)) continue;
    if (Array.isArray(value)) {
      const filteredArray = value
        .map((item) =>
          typeof item === "object" && item !== null ? cleanObject(item) : item,
        )
        .filter((item) => item !== undefined);
      // Si después de filtrar los objetos anidados el array no está vacío, lo incluye; si no, omite la propiedad.
      if (filteredArray.length > 0) {
        result[key] = filteredArray;
      }
      continue;
    }
    if (typeof value === "object" && value !== null) {
      const cleanedObj = cleanObject(value as Record<string, unknown>);
      if (cleanedObj !== undefined) {
        result[key] = cleanedObj;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}
