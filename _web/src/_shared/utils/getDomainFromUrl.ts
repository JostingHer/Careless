export function getDomainFromUrl(url: string): string {
    if (!url) {
        return "";
    }
    let domain = new URL(url).hostname;

    // Eliminar el subdominio 'www' si existe
    if (domain.startsWith("www.")) {
        domain = domain.substring(4);
    }

    // Separar el dominio principal (e.g., 'instagram.com' => ['instagram', 'com'])
    const parts = domain.split(".");

    // Devolver la parte principal del dominio (por ejemplo, 'instagram' o 'tiktok')
    return parts[0];
}
