import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { Author } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";
import { getSlugWithLang } from "@global-shared/translations/utils/getSlugWithLang";

export const authorInSanity = defineCollection({
    loader: async () => {
        const pagesList = await sanityClient.fetch<Array<Author>>(
            `
                 *[_type == "Author"]{...}
            `,
        );
        return pagesList.map((page) => ({
            ...page,
            _id: page._id,
            id: page._id,
            slug: `${getSlugWithLang(page.slug?.current, page.language)}`,
            ref: page.ref,
        }));
    },
});

type CleanAuthor = Omit<Author, keyof LandingPage>;

export type AuthorEntry = CleanAuthor & LandingPage;
