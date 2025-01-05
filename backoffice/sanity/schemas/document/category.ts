import { defineField, defineType } from "sanity";
import { prototype } from "../base/prototype";

export default defineType({
  name: "Category",
  title: "Categorías blog",
  type: "document",
  groups: [
    { name: "seo", title: "Metas" },
    { name: "content", title: "Contenido" },
    { name: "settings", title: "Configuración" },
  ],
  fields: [
    ...prototype,
    defineField({
          name: 'contentCopy',
          title: 'Contenido',
          type: 'markdown'
        }),
  ],
  preview: {
    select: {
      title: "name"
    }
  }
});