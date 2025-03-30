// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { typesToLock } from "./cleanObject";

export type RecursiveRecord = Record<
  string,
  string | number | null | boolean | unknown[] | RecursiveRecord
>;

export function flattenObject(
  obj: RecursiveRecord,
  parentKey = "",
  result: RecursiveRecord = {},
): { key: string; value: string | Record<string, undefined> } {
  for (const [key, value] of Object.entries(obj)) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (
      value &&
      typeof value === "object" &&
      Object.hasOwn(value as object, "_type") &&
      typesToLock.includes(value["_type"])
    ) {
      result[newKey] = value;
      continue;
    }
    if (
      typeof value === "object" &&
      !typesToLock.includes(key) &&
      value !== null &&
      !Array.isArray(value)
    ) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }

  return result;
}
