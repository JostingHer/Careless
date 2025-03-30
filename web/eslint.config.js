import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    eslintPluginPrettier,
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,astro}"],
        rules: {
            "@typescript-eslint/no-unused-vars": "off", // cuando avance el proyecto, activar
            "object-curly-spacing": ["error", "always"],
            "max-len": [
                "error",
                {
                    code: 120,
                    tabWidth: 4,
                    ignoreUrls: true,
                    ignoreStrings: true,
                },
            ],
            "prettier/prettier": [
                "error",
                {
                    // printWidth: 120, // Esto debe coincidir con max-len
                    tabWidth: 4,
                    endOfLine: "auto",
                },
            ],
        },
    },
    {
        files: ["**/*.{tsx,jsx}"],
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: "18",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-explicit-any": "off", // También para archivos .astro si es necesario
        },
    },

    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        rules: {
            "prettier/prettier": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-imports": ["error"],
            // Desactiva Prettier para archivos .astro
        },
    },

    // Ignorados gloables
    {
        ignores: [
            "node_modules/",
            "dist/",
            "build/",
            ".netlify/",
            ".astro/",
            ".idea/",
            ".yarn",
            "src/common/sanity/sanity.types.ts",
            "features/",
            "public/modules/**",
        ],
    },
];
