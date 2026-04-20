import { loadLayout } from "./core/components.js";
import { cargarHome } from "./pages/home.js";
import { cargarCart } from "./pages/cart.js";
import { initLogin } from "./pages/login.js";
import { initRegister } from "./pages/register.js";
import { initAuthUI } from "./core/authUI.js";
import { initProfile } from "./pages/profile.js";

document.addEventListener("DOMContentLoaded", async () => {

    await loadLayout();

    initAuthUI();
    
    const path = window.location.pathname;
    if (path.includes("index.html")) {
        cargarHome();
    }else if (path.includes("cart.html")) {
        cargarCart();
    }else if (path.includes("login.html")) {
        initLogin();
    }else if (path.includes("register.html")) {
        initRegister();
    } else if (path.includes("profile.html")) {
        initProfile();
    }
});