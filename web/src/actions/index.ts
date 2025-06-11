import { registerAction } from "@/features/auth/infraestructure/register-action";
import { sendDataAction } from "../features/getting-leads/infrastructure/send-data-action";

export const server = {
    sendData: sendDataAction,
    registerUser: registerAction,
};
