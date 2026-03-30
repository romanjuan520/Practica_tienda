import { loadLayout } from "./core/components.js";
import { cargarHome } from "./pages/home.js";
import { cargarCart } from "./pages/cart.js";
import { initLogin } from "./pages/login.js";


document.addEventListener("DOMContentLoaded", async () => {

    await loadLayout();

    const path = window.location.pathname;
    if (path.includes("index.html")) {
        cargarHome();
    }else if (path.location.pathname) {
        cargarCart();
    }else if (path.location.pathname){
        initLogin();
    }
});