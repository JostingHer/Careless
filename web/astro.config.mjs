// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";
import { loadITCSS } from "./config/auto-load-styles.mjs";

import sanity from "@sanity/astro";
import dotenv from "dotenv";
import {
    DEFAULT_LANGUAGE,
    Languages,
} from "./src/translations/domain/languages";

dotenv.config();
// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            ENV: envField.string({
                context: "client",
                access: "public",
            }),
            PUBLIC_SANITY_PROJECT_ID: envField.string({
                context: "client",
                access: "public",
            }),
            PUBLIC_SANITY_DATASET: envField.string({
                context: "client",
                access: "public",
            }),
            PUBLIC_SANITY_API_VERSION: envField.string({
                context: "client",
                access: "public",
            }),
        },
    },
    output: "static",
    integrations: [
        sitemap(),
        mdx(),
        loadITCSS(),
        react(),
        sanity({
            projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.PUBLIC_SANITY_DATASET,
            useCdn: false,
        }),
    ],
    i18n: {
        defaultLocale: DEFAULT_LANGUAGE,
        locales: [...Languages.map((lang) => lang.value)],
    },
    adapter: netlify(),
});
