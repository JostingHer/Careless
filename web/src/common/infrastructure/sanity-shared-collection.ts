import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";

import type { LANGUAGE } from "../../../../shared/translations/domain/languages.ts";
import type { Shared } from "@/common/sanity/sanity.types.ts";

export const sharedInSanity = defineCollection({
    loader: async () => {
        const sharedList = await sanityClient.fetch<Array<Shared>>(
            `*[_type == "shared" ]{
            ...,
            }`,
        );
        return sharedList.map((shared) => ({
            ...shared,
            id: shared.language ?? "es",
        }));
    },
});

type ClearType = Omit<Shared, "id">;

export type SharedEntry = ClearType & {
    id: LANGUAGE;
};
