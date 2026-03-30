import { renderCart } from "../ui/cartUI.js";

export function cargarCart(){
    const contenedor = document.getElementById("cart-items");
    renderCart(contenedor);
}