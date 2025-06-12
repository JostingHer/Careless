import type { LANGUAGE } from "@global-shared/translations/domain/languages";
import type { CollectionKey } from "astro:content";

export type Data<T> = {
    id: string;
    data: T;
    collection: string;
};

export type SharedContext = {
    id?: string;
    language?: LANGUAGE;
    collection?: CollectionKey;
    ref?: string;
};
