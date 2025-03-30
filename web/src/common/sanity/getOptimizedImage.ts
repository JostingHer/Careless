import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import type { ImageAsset } from "sanity";
import { sanityClient } from "sanity:client";
import type { Media } from "@/common/types";

export const getOptimizedImage = (
    image?: ImageAsset,
    width?: number,
    height?: number,
): ImageUrlBuilder => {
    if (!image || typeof image !== "object" || !("metadata" in image)) {
        console.error("Invalid image object", image);
        return {
            url: () => `/assets/images/no-image.png`,
        } as unknown as ImageUrlBuilder;
    }
    const builder = imageUrlBuilder(sanityClient)
        .width(width ?? image?.metadata?.dimensions.width ?? 100)
        .height(height ?? image?.metadata?.dimensions.height ?? 100)
        .fit("max")
        .auto("format");
    return builder.image(image);
};

type MediaOptimized = Omit<Media, "photo"> & {
    photo?: {
        url?: string;
    };
};

type PhotoOptimized = Omit<
    MediaOptimized,
    "urlVertical" | "urlHorizontal" | "imgHorizontal" | "imgVertical"
>;

export function getMediaListOptimized(
    mediaList: Array<Media>,
    onlyPhoto?: boolean,
    onlyVideo?: boolean,
): MediaOptimized[] {
    const optimizedList = mediaList.map((media) => {
        if (media._type.includes("photo") && media?.photo) {
            return {
                ...media,
                url: getOptimizedImage(media.photo).url(),
            };
        }
        return {
            ...media,
        };
    });

    if (!onlyPhoto && !onlyVideo) return optimizedList;

    if (onlyPhoto)
        return optimizedList.filter((media) => media._type.includes("photo"));
    if (onlyVideo)
        return optimizedList.filter((media) => media._type.includes("video"));

    return [];
}

export function getFirstPhoto(mediaList: Array<Media>): PhotoOptimized {
    const media = getMediaListOptimized(mediaList, true)[0];
    if (media === undefined) {
        return {
            photo: {
                url: `/assets/images/no-picture.png`,
            },
            _type: "photo",
            alt: "No image",
        };
    }
    return media;
}
