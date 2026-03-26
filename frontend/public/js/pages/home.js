import { getProducts } from "../services/productService.js";
import { renderProducts } from "../ui/productUI.js";

export async function initHome() {
    const products = await getProducts();
    renderProducts(products);
}