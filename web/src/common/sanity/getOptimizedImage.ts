import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import type { ImageAsset } from "sanity";
import { sanityClient } from "sanity:client";
import type { Media } from "@/common/types";
import type { Reference } from "@sanity/types";

export const getOptimizedImage = (
    image?: Reference,
    width?: number,
    height?: number,
): ImageUrlBuilder => {
    if (!image) {
        console.error("Invalid image object", image);
        return {
            url: () => `/assets/images/no-image.png`,
        } as unknown as ImageUrlBuilder;
    }
    const builder = imageUrlBuilder(sanityClient).fit("max").auto("format");
    return builder.image(image);
};

type MediaOptimized = Omit<Media, "photo"> & {
    photo?: {
        url?: string;
        caption?: string;
    };
};

type PhotoOptimized = Omit<
    MediaOptimized,
    "urlVertical" | "urlHorizontal" | "imgHorizontal" | "imgVertical"
>;

export function getMediaListOptimized(
    mediaList?: Array<Media>,
    onlyPhoto?: boolean,
    onlyVideo?: boolean,
): MediaOptimized[] {
    if (!mediaList) return [];
    const optimizedList = mediaList.map((media) => {
        if (media._type.includes("photo") && media?.photo) {
            return {
                ...media,
                photo: {
                    url: getOptimizedImage(media.photo).url(),
                    caption: media.photo?.caption,
                    hotspot: media.photo?.hotspot,
                },
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
                caption: `Imagen no encontrada`,
            },
            _type: "photo",
            alt: "No image",
        };
    }
    return media;
}
