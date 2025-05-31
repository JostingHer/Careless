// src/contexts/Shop/infrastructure/helpers/api.ts
import type { ParamsType } from "../../types/api-types";

export class Api {
    private endpoint: string;
    private params?: ParamsType;
    private baseUrl: string;

    constructor(endpoint: string, params?: ParamsType) {
        this.endpoint = endpoint;
        this.params = params;
        this.baseUrl =
            import.meta.env.API_ENDPOINT || "https://shop.becareless.es/rest"; // Usa variable de entorno o fallback
    }

    private async callEndpoint(url: string) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }

    public async getPageDetails(pageType: string = "") {
        let url = `${this.baseUrl}${this.endpoint}${pageType}`;

        if (this.params) {
            const query = new URLSearchParams(this.params).toString();
            url += `?${query}`;
        }

        return await this.callEndpoint(url);
    }
}
