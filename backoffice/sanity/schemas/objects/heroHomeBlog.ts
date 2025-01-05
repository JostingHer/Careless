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
  ],
 
});
