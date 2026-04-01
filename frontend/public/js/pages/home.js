import { getProducts } from "../services/productService.js"
import { crearProducto } from "../ui/productUI.js"

async function mostrarProductos() {
    const productos = await getProducts();
    console.log(productos);
}
mostrarProductos();

export async function cargarHome() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "<p>cargando productos...</p>";
    const productos = await fetchProductos();
    contenedor.innerHTML = "";
    if (!productos.length){
        contenedor.innerHTML = "<p>No hay productos disponibles</p>";
        return;
    }
    productos.forEach(prod => {
        contenedor.appendChild(crearProducto(prod));
    });
}