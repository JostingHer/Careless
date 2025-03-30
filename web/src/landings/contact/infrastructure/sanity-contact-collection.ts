import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { Contact } from "@/common/sanity/sanity.types.ts";
import type { LandingPage } from "@/common/types";

export const contactInSanity = defineCollection({
    loader: async () => {
        const homeList = await sanityClient.fetch<Array<Contact>>(
            `*[_type == "contact" ]`,
        );
        return homeList.map((home) => ({
            ...home,
            id: home._id,
            slug: home.slug?.current || "/",
        }));
    },
});

type CleanType = Omit<Contact, keyof LandingPage>;

export type ContactEntry = CleanType & LandingPage;
