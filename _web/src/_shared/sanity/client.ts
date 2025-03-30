import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID; // "pwcsr382"
const dataset = import.meta.env.PUBLIC_SANITY_DATASET; // "production"
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2023-05-03";

const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});

export default sanityClient;
