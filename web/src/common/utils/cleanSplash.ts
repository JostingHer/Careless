export function cleanSlashInPath(path: string): string {
    if (!path) {
        return "";
    }
    return path.replace(/(https?:\/\/)|\/\//g, function (match) {
        // Conservar doble slash en "http://" o "https://", eliminar en los demás casos
        return match === "//" ? "/" : match;
    });
}
