import { ListItemBuilder } from "sanity/lib/structure";
import { StructureBuilder } from "sanity/structure";

export const myStructure = (S: StructureBuilder) =>
    S.list()
        .title("Base")
        .items([
            ...S.documentTypeListItems().filter(
                (listItem: ListItemBuilder) => !["setting"].includes(listItem.getId() as string),
            ),
            S.divider(),
            S.listItem().title("Configuración").child(S.document().schemaType("setting").documentId("setting")),
        ]);
