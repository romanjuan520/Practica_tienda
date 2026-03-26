import { getCart } from "../core/storage.js";

export function initCart(){
    const cart = getCart();
    const container = document.getElementById("cart");

    container.innerHTML = "";

    let total = 0;
    cart.forEach(p => {
        total += parseFloat(p.price);

        container.innerHTML += `
            <div>
                <h3>${p.name}</h3>
                <p>${p.price}</p>
            </div>

        `;
    });
    container.innerHTML += `<h3>Total: ${total}€ </h3>`;
}