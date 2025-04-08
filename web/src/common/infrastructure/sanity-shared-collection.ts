import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";

import type { LANGUAGE } from "../../../../shared/translations/domain/languages.ts";
import type { SharedSection } from "@/common/sanity/sanity.types.ts";

export const sharedInSanity = defineCollection({
    loader: async () => {
        const sharedList = await sanityClient.fetch<Array<SharedSection>>(
            `*[_type == "SharedSection" ]{
            ...,
            }`,
        );
        return sharedList.map((shared) => ({
            ...shared,
            id: shared.language ?? "es",
        }));
    },
});

type ClearType = Omit<SharedSection, "id">;

export type SharedEntry = ClearType & {
    id: LANGUAGE;
};
