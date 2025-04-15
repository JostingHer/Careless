import type { LANGUAGE } from "../../../shared/translations/domain/languages.ts";
import type { Metadata, Photo } from "./sanity/sanity.types";

export type LandingPage = {
    slug: string;
    id: string;
    language: LANGUAGE;
    ref: string;
    name: string;
    metas: MetadataWithImageRef;
    _type: string;
};

type MetadataWithImageRef = Omit<Metadata, "thumbnail"> & {
    thumbnail: { asset?: { url?: string } };
};

export type Media = {
    _type: string;
    photo?: Photo["photo"];
    srcLaptop?: string;
    srcMobile?: string;
    alt?: string;
};

export type SectionBase<T> = Omit<T, "mediaList"> & {
    _type: T;
    mediaList?: Media[];
};
