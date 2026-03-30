
export function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.precio}€</p>
        <button data-id="${producto.id}">Añadir al carrito</button>
    `;
    return div
}