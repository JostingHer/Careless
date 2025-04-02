// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import preact from "@astrojs/preact";
import { loadITCSS } from "./config/auto-load-styles.mjs";

import sanity from "@sanity/astro";
import dotenv from "dotenv";

dotenv.config();
// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            ENV: envField.string({
                context: "client",
                access: "public",
                optional: true,
            }),
            SANITY_PROJECT_ID: envField.string({
                context: "client",
                access: "public",
            }),
            SANITY_DATASET: envField.string({
                context: "client",
                access: "public",
            }),
            SANITY_API_VERSION: envField.string({
                context: "client",
                access: "public",
            }),
        },
    },
    integrations: [
        sitemap(),
        mdx(),
        loadITCSS(),
        preact(),
        sanity({
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: process.env.SANITY_DATASET,
            useCdn: false,
        }),
    ],
    adapter: netlify(),
});
