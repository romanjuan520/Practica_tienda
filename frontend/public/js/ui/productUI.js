
export function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");

    const imageUrl = `http://127.0.0.1:8000/static/imagen`

    div.innerHTML = `
        <img src="${producto.image}" alt="${producto.nombre}">
        <h2>${producto.name}</h2>
        <p>${producto.price}€</p>
        <button data-id="${producto.id}">Añadir al carrito</button>
    `;
    return div
}