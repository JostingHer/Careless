import { AutoImportsCSSFromDirectories } from "./AutoImportsCSSFromDirectories.mjs";
import { autoIndexITCSS } from "./AutoIndexITCSS.mjs";

export default async function loadScss() {
    try {
        console.info("autoload-scss");
        await AutoImportsCSSFromDirectories("./src");
        await autoIndexITCSS();
    } catch (e) {
        console.error("Error loading SCSS:", e);
    }
}
