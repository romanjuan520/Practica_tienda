import { postData } from "../core/api.js";
import { getToken } from "../core/storage.js";

function decodeToken(token) {
    try{
        const payload = token.split(".")[1];
        return JSON.parse(atob(payload));
    }catch {
        return null;
    }
}
function checkAdmin() {
    const token = getToken();
    
    if (!token) {
        alert("No autorizado");
        window.location.href = "login.html";
        return null;
    }

    const payload = decodeToken(token);

    if (!payload || payload.role !== "vendedor"){
        alert("No eres Administrador");
        window.location.href = "index.html";
        return null;
    }
    return payload;
}
export function initAdmin() {
    const admin = checkAdmin();
    if (!admin) return;

    const btn = document.getElementById("createBtn");

    btn.addEventListener("click", async () => {
        try{
            const name = document.getElementById("name").value;
            const price = document.getElementById("price").value;
            const imagen = document.getElementById("imagen")?.value || "";
            const stock = parseInt(document.getElementById("stock")?.value || 0);

            const res = await postData("vendedor/products", {
                name,
                price,
                image: imagen,
                stock,
                category_id: 1
            });
            if (res) {
                alert("Producto creado");
            }else{
                alert("Error al crear producto");
            }
        } catch (error){
            console.error(error);
            alert("Error: necesitas ser Administrador");
        }
    });
}