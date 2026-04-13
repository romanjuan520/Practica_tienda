import { registerUser } from "../services/authService.js"


function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    return regex.test(password);
}


export function initRegister(){
    const form = document.getElementById("registerForm");
    const error = document.getElementById("error");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!validarPassword(password)){
            error.textContent = "La contraceñsa debe tener minimo 6 caracteres, mayúsculas, minúsculas, números y símbolos.";
        return;
        }
        try {
            await registerUser({
                nombre: username,
                apellido: apellido,
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