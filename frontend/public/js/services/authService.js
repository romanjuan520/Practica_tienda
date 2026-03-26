import { apiResquest } from "../core/api.js";

export async function login(email, password) {
    const res = await apiResquest("/auth/login", "POST", { email, password });
    localStorage.setItem("token", res.access_token);
}