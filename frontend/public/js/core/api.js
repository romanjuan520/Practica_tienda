export const API_URL = "http://127.0.0.1:8000"

function getAuthHeaders() {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json"
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }
    return headers
}

export async function getData(endpoint) {
    try{
        const res = await fetch(`${API_URL}/${endpoint}`, {
            headers: getAuthHeaders()
        });
        if (!res.ok) throw new Error("Error al obtener datos");
        return await res.json();
    } catch (error){
        console.error(error);
        return [];
    }
}

export async function postData(endpoint, data) {
    try{
        const res = await fetch(`${API_URL}/${endpoint}`, {
            method: "POST",
            headers: getAuthHeaders(),
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error ("Error en POST");
        return await res.json();

    } catch (error){
        console.error(error);
        return null;
    }
}
export async function putData(endpoint, data) {
    try {
        const res = await fetch(`${API_URL}/${endpoint}`,{
            method: "PUT",
            headers: getAuthHeaders(),
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("Error en PUT");
        return await res.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}