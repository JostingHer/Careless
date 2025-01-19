import { defineCollection } from "astro:content";
import sanityClient from "@/shared/sanity/client";
import type { SharedSection } from "@/shared/sanity/sanity.types";

export const sharedSectionsInSanity = defineCollection({
    loader: async () => {
        const sharedList = await sanityClient.fetch<Array<SharedSection>>(
            `*[_type == "sharedSection" ]`,
        );

        return sharedList.map((section) => ({
            ...section,
            id: section._id,
            ref: section.ref,
            lang: section.language,
        }));
    },
});
