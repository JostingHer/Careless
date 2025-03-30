import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { Legal } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";

export const legalsInSanity = defineCollection({
    loader: async () => {
        const legalsList =
            await sanityClient.fetch<Array<Legal>>(`*[_type == "legal" ]`);
        return legalsList.map((legal) => ({
            ...legal,
            id: legal._id,
            slug: legal.slug?.current,
        }));
    },
});

type ClearType = Omit<Legal, keyof LandingPage>;

export type LegalEntry = ClearType & LandingPage;
