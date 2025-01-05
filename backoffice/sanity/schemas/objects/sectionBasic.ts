import { defineField, defineType } from "sanity";
import { MEDIACONDITIONAL, MEDIALIST } from "../definitions/media";

export default defineType({
  name: "heroHomeBlog",
  title: "Hero Home Blog",
  type: "object",
  fields: [
   
    defineField({
      name: "copy",
      title: "Información",
      type: "markdown",
    }),
    ...MEDIACONDITIONAL,
    defineField({
      name: "reverse",
      title: "En lugar de imagen a la derecha, ponerla a la izquierda",
      type: "boolean",
    }),
  ],
});
