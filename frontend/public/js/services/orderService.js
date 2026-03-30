import { postData } from "../core/api.js";

export function createOrder(order){
    return postData("pedidos", order);
}