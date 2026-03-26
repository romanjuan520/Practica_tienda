import { login } from "../services/authService.js";

export function initLogin() {
    document.getElementById("loginBtn").addEventListener("click", async () => {

        try{
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            await login(email, password);
            
            alert("Login correcto");
            window.location.href = "index.html";
        } catch (error){
            alert("Error login");
        }
    });
}