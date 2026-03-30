import { loginUser } from "../services/authService.js";

export function initLogin(){
    const form = document.getElementById("login-form");
    form.addEventListener("submit", async e =>{
        e.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const res = await loginUser({ email, password });
        if (res && res.token) {
            localStorage.setItem("token", res.token);
            window.location.href = "index.html";
        }else{
            alert("Usuario o contraceña incorrectas");
        }
    });
}