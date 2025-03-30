import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import * as nodemailer from "nodemailer";

const from = import.meta.env.EMAIL_USER;
const to = import.meta.env.EMAIL_TO;
const pass = import.meta.env.EMAIL_PASSWORD;
const host = import.meta.env.EMAIL_HOST;
const env = import.meta.env.ENV;
const endpoint = import.meta.env.ENDPOINT_FORMS;

export const sendDataAction = defineAction({
    accept: "form",
    input: z.object({
        phone: z.string(),
        name: z.string(),
    }),
    handler: async (input) => {
        try {
            if (env === "test") return "¡Envíado!";

            const transporter = nodemailer.createTransport({
                host,
                port: 465,
                secure: true,
                auth: {
                    user: from,
                    pass,
                },
            });

            const { messageId } = await transporter.sendMail({
                from,
                to,
                subject: `Nuevo lead!`,
                text: `Formulario enviado`,
                html: `
                <ul>
                <pre>${JSON.stringify(input, null, 2)}</pre>
                </ul>
                `,
            });
            console.log("Correo enviado:", messageId);

            return "¡Envíado!";
        } catch (error) {
            throw new ActionError({
                code: "INTERNAL_SERVER_ERROR",
                message: "Error al enviar al CRM",
            });
        }
    },
});
