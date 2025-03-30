export function unflattenObject(obj) {
  const result = {};

  for (const i in obj) {
    const keys = i.split(".");
    keys.reduce(function (r, e, j) {
      return (
        r[e] ||
        (r[e] = isNaN(Number(keys[j + 1]))
          ? keys.length - 1 === j
            ? obj[i]
            : {}
          : [])
      );
    }, result);
  }

  return result;
}
