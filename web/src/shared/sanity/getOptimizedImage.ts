import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import type { ImageAsset } from "sanity";
import { sanityClient } from "sanity:client";
import { SITE_URL } from "../../../../company/settings/metadata.ts";

export const getOptimizedImage = (
    image?: ImageAsset,
    width?: number,
    height?: number,
): ImageUrlBuilder => {
    if (!image || typeof image !== "object" || !("metadata" in image)) {
        console.error("Invalid image object", image);
        return {
            url: () => `${SITE_URL}/assets/images/no-image.png`,
        } as unknown as ImageUrlBuilder;
    }
    const builder = imageUrlBuilder(sanityClient)
        .width(width ?? image?.metadata?.dimensions.width ?? 100)
        .height(height ?? image?.metadata?.dimensions.height ?? 100)
        .fit("max")
        .auto("format");
    return builder.image(image);
};
