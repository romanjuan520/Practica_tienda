async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
}

export async function initLayout() {
    await loadComponent("header", "../components/header.html");
    await loadComponent("footer", "../components/footer.html");
}

const btn = document.getElementById("logoutBtn");

if (btn){
    btn.addEventListener("click", () => {
        localStorage.removeItem("token");
        alert("Logout");
        window.location.href = "login.html";
    });
}