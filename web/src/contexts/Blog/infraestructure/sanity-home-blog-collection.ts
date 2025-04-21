import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { HomeBlog } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";
import { getSlugWithLang } from "@global-shared/translations/utils/getSlugWithLang";

export const homeBlogInSanity = defineCollection({
    loader: async () => {
        const pageList = await sanityClient.fetch<Array<HomeBlog>>(
            `
            *[_type == "homeBlog" ]{
                    ...,
                    summary {
                        ...,
                        "theme": theme->{...},
                          mediaList[]{
                            ...,
                            _type,
                            "srcLaptop": srcLaptop.asset->url,
                            "srcMobile": srcMobile.asset->url,
                            "photo": photo.asset,
                            alt
                        }
                    },
                    hero{
                    ...,
                        "theme": theme->{...},
                        mediaList[]{
                            ...,
                            _type,
                            "srcLaptop": srcLaptop.asset->url,
                            "srcMobile": srcMobile.asset->url,
                            "photo": photo.asset,
                            alt
                        }
                    },
                    pageSections[] {
                        ...,
                        "theme": theme->{...},
                        mediaList[]{
                            ...,
                            _type,
                            "srcLaptop": srcLaptop.asset->url,
                            "srcMobile": srcMobile.asset->url,
                            "photo": photo.asset,
                            alt
                        }
                    }
            } 
         `,
        );
        return pageList.map((page) => ({
            ...page,
            _id: page._id,
            id: page._id,
            slug: `${getSlugWithLang(page.slug?.current, page.language)}`,
            ref: page.ref,
        }));
    },
});

type CleanHomeBlog = Omit<HomeBlog, keyof LandingPage>;

export type HomeBlogEntry = CleanHomeBlog & LandingPage;
