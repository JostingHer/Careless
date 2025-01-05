import { defineField } from "sanity";

import { Languages } from "../../../../company/translations";

const landing = [
    defineField({
        name: "name",
        title: "Nombre",
        type: "string",
    }),
    defineField({
        name: "slug",
        type: "slug",
        group: "seo",
        options: {
            source: "name",
            maxLength: 96,
        },
    }),
    defineField({
        name: "language",
        title: "Idioma",
        group: "settings",
        type: "string",
        options: {
            list: Languages,
        },
        initialValue: Languages[0].value,
    }),
    {
        name: "metas",
        title: "SEO",
        type: "string",
        group: "seo",
        options: { collapsible: true, collapsed: true },
    },
];

export { landing };
