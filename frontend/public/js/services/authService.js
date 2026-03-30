import { postData } from "../core/api.js";

export function loginUser(credentials){
    return postData("login", credentials);
}