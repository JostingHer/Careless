import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
export const registerAction = defineAction({
    accept: "form",
    input: z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(8),
    }),
    handler: async (_input) => {
        throw new ActionError({
            code: "NOT_IMPLEMENTED",
            message: "Registro no disponible.",
        });
    },
});
