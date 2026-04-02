import { registerUser } from "../services/authService.js"


export function initRegister(){
    const form = document.getElementById("registerForm");
    const error = document.getElementById("error");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            await registerUser({
                username,
                email,
                password
            });

            alert("Usuario registrado correctamente");

            window.location.href = "login.html";
        }catch (err) {
            error.textContent = "Error al registrar usuario";
        }
    });
}