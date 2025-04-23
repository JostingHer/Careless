export function getOrientationFromRef(
    ref: string,
): "vertical" | "horizontal" | "square" | null | "" {
    const match = ref.match(/-(\d+)x(\d+)-/);
    if (!match) return null;

    const width = parseInt(match[1], 10);
    const height = parseInt(match[2], 10);

    if (width > height) return "horizontal";
    return "";
}
