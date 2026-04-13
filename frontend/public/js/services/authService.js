import { postData } from "../core/api.js";

export function loginUser(data){
    return postData("auth/login", data);
}

export function registerUser(userData) {
    return postData("auth/register", userData );
}