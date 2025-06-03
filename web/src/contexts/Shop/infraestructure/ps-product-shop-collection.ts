import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { LandingPage } from "@/common/types";
import { getSlugWithLang } from "@global-shared/translations/utils/getSlugWithLang";
import type { ApiResponse, FeaturedProduct } from "@/common/shop";

export const productInPrestashop = defineCollection({
    loader: async () => {
        const response = await fetch(
            `https://shop.becareless.es/rest/bootstrap?with_all_images=1`,
        );
        const data = (await response.json()) as ApiResponse;

        const productsList = data.psdata
            .featuredProductsList as FeaturedProduct[];

        const landingList = productsList.map((product) => ({
            ...product,
            _id: product.name,
            id: product.name,
            slug: `shop${getSlugWithLang(product.link_rewrite)}`,
        }));

        console.log("Landing List", landingList);

        return landingList;
    },
});

type CleanProduct = Omit<FeaturedProduct, keyof LandingPage>;

export type ProductEntry = CleanProduct & LandingPage;
