import { getToken, removeToken } from "./storage.js";

export function initAuthUI() {
    const token = getToken()

    const authLinks = document.getElementById("auth-links");
    const logoutBtn = document.getElementById("logout-btn");
    const userNameEl = document.getElementById("user-name");

    const userName = localStorage.getItem("user_name");


    if (token) {
        authLinks.style.display = "none";
        logoutBtn.classList.remove("hidden");

        // Mostrar Nombre
        userNameEl.textContent = `Hola, ${userName}`;
        userNameEl.classList.remove("hidden");
    } else {
        //Usuarios No logueado
        authLinks.style.display = "flex";
        logoutBtn.classList.add("hiddemm");


    }
    logoutBtn?.addEventListener("click", () => {
        removeToken();
        localStorage.removeItem("user_name"); //limpiar
        window.location.href = "../pages/index.html";
    })
}