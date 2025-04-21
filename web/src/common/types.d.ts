import type { LANGUAGE } from "../../../shared/translations/domain/languages.ts";
import type { Metadata, Photo, Theme } from "./sanity/sanity.types";

export type LandingPage = {
    slug: string;
    id: string;
    language: LANGUAGE;
    ref: string;
    name: string;
    metas: MetadataWithImageRef;
    _type: string;
    theme?: Theme;
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

export type SectionBase = {
    copy?: string;
    mediaList?: Media[];
    theme?: Theme;
};
export type Base<T> = Omit<T, "mediaList"> & {
    copy?: string;
    mediaList?: Media[];
    theme?: Theme;
};
