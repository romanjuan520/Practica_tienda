import { getToken, removeToken } from "./storage.js";

export function initAuthUI() {
    const token = getToken()

    const loginBtn = document.getElementById("login-btn")
    const logoutBtn = document.getElementById("logout-btn")
    const authLinks = document.getElementById("auth-links")

    if (token) {
        authLinks.style.display = "none"
        logoutBtn.classList.remove("hidden")
    }
    logoutBtn?.addEventListener("click", () => {
        removeToken()
        window.location.href = "../pages/index.html"
    })
}