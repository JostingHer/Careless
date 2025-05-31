// src/pages/api/products.ts
import { Api } from "@/contexts/Shop/infraestructure/helpers/api";

export async function GET() {
    try {
        const api = new Api("/bootstrap");
        const data = await api.getPageDetails(
            "?with_all_images=1&menu_with_images=all",
        );

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: (error as Error).message }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            },
        );
    }
}
