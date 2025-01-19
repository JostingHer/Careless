import type { LANGUAGE } from "../../../../company/settings/translations";
import type { Metadata } from "../sanity/sanity.types";
import type { ImageAsset } from "sanity";

type MetadataWithImageRef = Omit<Metadata, "thumbnail"> & {
    thumbnail: { asset?: { url?: string } };
};

export type Data<T> = {
    id: string;
    data: T;
    collection: string;
};

export type MaybeAll<T extends object> = {
    readonly [K in keyof T]?: T[K] | null;
};

export type Maybe<T> = Readonly<T> | null | undefined;

export type Page = {
    readonly slug: string;
    readonly language: string;
    readonly metas: MetadataWithImageRef;
};

export type PrototypePage = {
    readonly slug: string;
    readonly language: LANGUAGE;
    readonly metas: MetadataWithImageRef;
    readonly summary: string;
    readonly ref: string;
    readonly name: string;
};

export type Subdirectory = {
    _type?: string;
    slug?: string;
    metas?: MetadataWithImageRef;
    copy?: string;
    copyLong?: string;
};

export type CollectionPage<T> = {
    readonly id: string;
    readonly data: Omit<T, "slug" | "metas"> & {
        readonly [key in keyof T]: T[key];
    } & Page;
};

export type CollectionPrototype<T> = {
    readonly id: string;
    readonly data: { readonly [key in keyof T]: T[key] } & PrototypePage;
};

export type PageData<T> = Omit<T, "language"> & {
    readonly [key in keyof T]?: T[key];
} & Page;

export type PrototypePageData<T> = {
    readonly [key in keyof Omit<T, "language">]: key extends `_${string}`
        ? T[key]
        : T[key] | undefined;
} & PrototypePage;

export type MediaWithAssets = {
    _type: "video" | "photo";
    laptopURL?: string;
    mobileURL?: string;
    photo?: ImageAsset;
    alt: string;
};
export type MediaImage = {
    _type: "image";
    photo: ImageAsset;
};
