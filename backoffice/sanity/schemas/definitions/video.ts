import { defineField, defineType } from "sanity";

export default defineType({
    name: "video",
    title: "video",
    type: "object",
    fields: [
        defineField({
            name: "alt",
            title: "Titulo del vídeo",
            type: "string",
        }),

        defineField({
            name: "srcLaptop",
            title: "Vídeo  horizontal",
            type: "file",
        }),
        defineField({
            name: "srcMobile",
            title: "Vídeo vertical",
            type: "file",
        }),
    ],
    preview: {
        select: {
            title: "alt",
            asset: "asset",
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title,
                subtitle: "vídeo",
            };
        },
    },
});
