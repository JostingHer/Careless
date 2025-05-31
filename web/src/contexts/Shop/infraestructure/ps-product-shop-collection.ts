import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { LandingPage } from "@/common/types";
import { getSlugWithLang } from "@global-shared/translations/utils/getSlugWithLang";
import type { ApiResponse, FeaturedProduct } from "@/common/shop";

export const productInPrestashop = defineCollection({
    loader: async () => {
        const response = await fetch(`http://localhost:4321/api/products`);
        const data = (await response.json()) as ApiResponse;

        const productsList = data.psdata
            .featuredProductsList as FeaturedProduct[];

        return productsList.map((product) => ({
            ...product,
            _id: product.name,
            id: product.name,
            slug: `${getSlugWithLang(product.link_rewrite)}`,
            pathname: `${getSlugWithLang(product.link_rewrite)}`,
        }));
    },
});

type CleanProduct = Omit<FeaturedProduct, keyof LandingPage>;

export type ProductEntry = CleanProduct & LandingPage;
