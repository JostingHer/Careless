// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../.astro/types.d.ts" />
/// <reference types="@sanity/astro/module" />

interface ImportMetaEnv {
    readonly PUBLIC_SANITY_PROJECT_ID: string;
    readonly PUBLIC_SANITY_DATASET: string;
    readonly PUBLIC_SANITY_API_VERSION: string;
    readonly EMAIL_USER: string;
    readonly EMAIL_PASSWORD: string;
    readonly EMAIL_HOST: string;
    readonly EMAIL_TO: string;
}
