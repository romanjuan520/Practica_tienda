import { loginUser } from "../services/authService.js";

export function initLogin(){
    const form = document.getElementById("login-form");
    const errorEl = document.getElementById("login-error")

    form.addEventListener("submit", async e =>{
        e.preventDefault();
        
        const email = form.email.value;
        const password = form.password.value;
        
        errorEl.textContent = "Cargando..."

        const res = await loginUser({ email, password });
        if (res && res.access_token) {
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("user_name",email.split("@")[0]);
            window.location.href = "index.html";
        }else{
            alert("Usuario o contraceña incorrectas");
        }
    });
}