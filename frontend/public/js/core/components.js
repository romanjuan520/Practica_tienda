async function locadComponent(selector, path) {
    const element = document.querySelector(selector);

    if (!element) return;

    try{
        const res = await fetch(path);
        const html = await res.text();
        element.innerHTML = html;
    } catch (error){
        console.error(`Error cargando ${path}:`, error);
    }
}
export function loadHeader() {
    return locadComponent("header", "/componenets/header.html");
}
export function loadFooter(){
    return locadComponent("footer", "/components/footer.html");
}
export async function loadLayout() {
    await loadHeader();
    await loadFooter();
}
