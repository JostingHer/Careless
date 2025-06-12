import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
const env = import.meta.env.ENV;
export const registerAction = defineAction({
    accept: "form",
    input: z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(8),
    }),
    handler: async (input) => {
        try {
            if (env === "test") return "¡Registro simulado!";

            const response = await fetch(
                `https://shop.becareless.es/rest/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(input),
                },
            );

            const data = await response.json();

            if (!response.ok || data.success === false) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: data?.psdata || "Registro fallido",
                });
            }
            console.log("Registro exitoso:", data);

            // Si necesitas guardar algo como token o redireccionar, lo puedes hacer aquí
            return "¡Registro exitoso!";
        } catch (error) {
            console.error("Error en registerAction:", error);
            if (error instanceof ActionError) throw error;

            throw new ActionError({
                code: "INTERNAL_SERVER_ERROR",
                message: "No se pudo completar el registro.",
            });
        }
    },
});
