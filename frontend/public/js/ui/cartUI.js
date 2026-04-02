import { loadCart, saveCart } from "../core/storage.js";

export function renderCart(container){
    const cart = loadCart();
    container.innerHTML = "";
    if (cart.length === 0){
        container.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }
    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `${item.nombre} - ${item.precio}€`;
        container.appendChild(div);
    });
}