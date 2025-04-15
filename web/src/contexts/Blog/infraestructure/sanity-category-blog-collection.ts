import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { Category } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";
import { getSlugWithLang } from "@global-shared/translations/utils/getSlugWithLang";

export const categoryInSanity = defineCollection({
    loader: async () => {
        const pagesList = await sanityClient.fetch<Array<Category>>(
            `
                 *[_type == "Category"]{
                 ...,
                  summary {
                        ...,
                          mediaList[]{
                            ...,
                            _type,
                            "srcLaptop": srcLaptop.asset->url,
                            "srcMobile": srcMobile.asset->url,
                            "photo": photo.asset,
                            alt
                        }
                    },
                 "theme": theme->{...},
                 }
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

type CleanCategory = Omit<Category, keyof LandingPage>;

export type CategoryEntry = CleanCategory & LandingPage;
