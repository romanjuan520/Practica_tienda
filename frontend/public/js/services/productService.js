import { apiResquest } from "../core/api.js";

export function getProducts() {
    return apiResquest("/products");
}