import { defineField } from "sanity";

export const MEDIALIST = [
    defineField({
      name: "mediaList",
      title: `Media`,
      type: "array",
      of: [{ type: "photo" }, { type: "video" }],
    })
  ];

  export const MEDIACONDITIONAL = [
    defineField({
      name: "media",
      title: "Media",
      type: "object",
      fields: [
        {
          name: "type",
          title: "Tipo de Media",
          type: "string",
          options: {
            list: [
              { title: "Foto", value: "photo" },
              { title: "Video", value: "video" },
            ],
            layout: "dropdown",
          },
        },
        {
          name: "photo",
          title: "Foto",
          type: "photo",
          hidden: ({ parent }) => parent?.type !== "photo",
        },
        {
          name: "video",
          title: "Video",
          type: "video",
          hidden: ({ parent }) => parent?.type !== "video",
        },
      ],
    }),
  ];
  