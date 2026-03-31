export function loadCart(){
    return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getToken(){
    return localStorage.getItem("access_token");
}

export function setToken(token) {
    localStorage.setItem("access_token", token);
}

export function removeToken() {
    localStorage.removeItem("access_token");
}