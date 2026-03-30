export const API_URL = "http://localhost:3000"

export async function getData(endpoint) {
    try{
        const res = await fetch(`${API_URL}/${endpoint}`);
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
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error ("Error en POST");
        return await res.json();

    } catch (error){
        console.error(error);
        return null;
    }
}