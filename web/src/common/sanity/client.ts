import { createClient } from "@sanity/client";

const projectId = import.meta.env.SANITY_PROJECT_ID; // "pwcsr382"
const dataset = import.meta.env.SANITY_DATASET; // "production"
const apiVersion = import.meta.env.SANITY_API_VERSION || "2023-05-03";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});
