import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { ImageAsset } from "sanity";
import type { Popup } from "@/common/sanity/sanity.types.ts";

export const popupsInSanity = defineCollection({
    loader: async () => {
        const list = await sanityClient.fetch<
            Array<Popup>
        >(`*[_type == "popup"] {
                ...,
                image {
                    asset->{...},
                    alt
                }
            }`);
        return list.map((popup) => ({
            ...popup,
            id: popup.ref as string,
        }));
    },
});

export type PopUpEntry = Omit<Popup, "id" | "image"> & {
    id: string;
    image: {
        asset: ImageAsset;
        alt?: string;
    };
};
