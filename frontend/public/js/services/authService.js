import { postData } from "../core/api.js";

export function loginUser(data){
    return postData("auth/login", data);
}