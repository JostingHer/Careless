export function svgToString(jsxObj: SVGAElement | any): string {
    if (!jsxObj || typeof jsxObj !== "object" || !jsxObj.props) {
        return "";
    }

    const { type, props } = jsxObj;

    let result = `<${type}`;

    // Añadir todos los atributos, excluyendo children y convirtiendo className a class
    for (const [key, value] of Object.entries(props)) {
        if (key === "children") continue;
        if (key === "className") {
            result += ` class="${value}"`;
        } else if (
            typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean"
        ) {
            // Solo añadir atributos con valores primitivos
            result += ` ${key}="${value}"`;
        }
    }

    result += ">";

    // Procesar elementos hijos
    if (props.children) {
        if (Array.isArray(props.children)) {
            // Múltiples hijos
            for (const child of props.children) {
                if (typeof child === "string") {
                    result += child;
                } else if (child && typeof child === "object") {
                    result += svgToString(child); // Recursión para procesar elementos anidados
                }
            }
        } else if (typeof props.children === "string") {
            // Hijo de texto
            result += props.children;
        } else if (props.children && typeof props.children === "object") {
            // Un solo hijo que es un objeto
            result += svgToString(props.children);
        }
    }

    result += `</${type}>`;

    return result;
}
