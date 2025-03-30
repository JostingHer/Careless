import loadScss from "../src/styles/autoimports/LoadScss.mjs";

export function loadITCSS() {
    return {
        name: "load-itcss",
        hooks: {
            "astro:config:setup": async ({ command }) => {
                loadScss()
                    .then(() => {
                        console.info("SCSS loaded");
                    })
                    .catch((e) => {
                        console.error("Error loading SCSS:", e);
                    });
            },
        },
    };
}
