import { apiResquest } from "../core/api.js";

function checkAdmin() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("No autorizado");
        window.location.href = "login.html";
    }
}

export function initAdmin() {
    checkAdmin();
    document.getElementById("createBtn").addEventListener("click", async () => {
        try{
            const name = document.getElementById("name").value;
            const price = parseFloat(document.getElementById("price").value);

            await apiResquest("/admin/products", "POST",{
                name,
                price,
                image: "",
                category_id: null
            });
            alert("Producto creado");
        } catch (error){
            alert("Error: necesitas ser admin");
        }
    });
}


