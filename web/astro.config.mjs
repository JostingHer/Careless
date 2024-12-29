// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";
import { loadITCSS } from "./config/auto-load-styles.mjs";

// https://astro.build/config
export default defineConfig({
    output: "static",
    integrations: [sitemap(), mdx(), loadITCSS(), react()],
    adapter: netlify(),
});
