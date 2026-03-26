import { getCart, saveCart } from "../core/storage.js";

export function addToCart(product){
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    alert("Producto añadido");
}