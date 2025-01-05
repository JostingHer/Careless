import { defineField, defineType } from "sanity";
import { MEDIALIST } from "../definitions/media";

export default defineType({
  name: "heroHomeBlog",
  title: "Hero Home Blog",
  type: "object",
  fields: [
   
    defineField({
      name: "copy",
      title: "title",
      type: "markdown",
    }),
    // PONER UN FILTRO - TIPO CAROUSEL DE TODOS LOS POSTS DE MODA HOMBRES
    

    ...MEDIALIST,
  ],
});
