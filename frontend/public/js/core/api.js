import { API_URL } from "./config.js";

export async function apiResquest(endpoint, method = "GET", data = null) {
    
    const token = localStorage.getItem("token");

    const res = await fetch(API_URL + endpoint,{
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? "Bearer " + token : ""
        },
        body: data ? JSON.stringify(data) : null
    });
    if (!res.ok){
        throw new Error("Error API");
        
    }
    return res.json();
}