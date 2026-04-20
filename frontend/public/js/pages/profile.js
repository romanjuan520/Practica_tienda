import { getProfile } from "../core/api.js";


export async function initProfile() {
    const container = document.getElementById("profile-container");

    try{
        const user = await getProfile();

        container.innerHTML = `
            <div class="profile-card">
                <h2>${user.nombre} ${user.apellido}</h2>
                <p>${user.email}</p>
                <p>Rol: ${user.role}</p>

                <button id="logout-btn">Cerrar sesión</button>
            </div>
        `;
        document.getElementById("logout-btn").addEventListener("click", () =>{
            localStorage.removeItem("access_token");
            window.location.href = "/pages/login.html";
        });
    } catch (error) {
        container.innerHTML = `<p>Error cargando perfile</p>`;
    }
}