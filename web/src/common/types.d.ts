import type { LANGUAGE } from "../../../shared/translations/domain/languages.ts";
import type { Metadata } from "./sanity/sanity.types";

export type LandingPage = {
    slug: string;
    id: string;
    language: LANGUAGE;
    name: string;
    metas: MetadataWithImageRef;
    _type: string;
};

type MetadataWithImageRef = Omit<Metadata, "thumbnail"> & {
    thumbnail: { asset?: { url?: string } };
};

export type Media = {
    _type: string;
    photo?: ImageAsset;
    alt?: string;
    urlHorizontal?: string;
    imgHorizontal?: string;
    imgVertical?: string;
    urlVertical?: string;
};
