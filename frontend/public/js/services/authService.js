import { postData } from "../core/api.js";

export function loginUser(data){
    return postData("auth/login", data);
}

export async function registerUser(userData) {
    
    const response = await fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(userData)
    });
    if (!response.ok){
        throw new Error("Error en el registro");
    }
    return await response.json();
}