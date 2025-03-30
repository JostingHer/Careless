import { defineCollection } from "astro:content";
import { sanityClient } from "sanity:client";
import type { Setting } from "@/common/sanity/sanity.types.ts";
import type { LANGUAGE } from "../../../../shared/translations/domain/languages.ts";

export const settingsInSanity = defineCollection({
    loader: async () => {
        const list = await sanityClient.fetch<Array<Setting>>(
            `*[_type == "setting" ]{
            ...,
            }`,
        );

        return list.map((setting) => ({
            ...setting,
            id: setting._id,
            _id: setting._id,
        }));
    },
});

export type SettingEntry = Omit<Setting, "id"> & {
    id: "settings";
};
