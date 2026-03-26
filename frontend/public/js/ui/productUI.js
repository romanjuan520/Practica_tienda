import { addToCart } from "./cartUI.js"

export function renderProducts(products) {
    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(p =>{
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.price}</p>
            <button>Comprar</button>
        
        `;

        div.querySelector("button").addEventListener("click", () =>{
            addToCart(p);
        });

        container.appendChild(div);

    });
}