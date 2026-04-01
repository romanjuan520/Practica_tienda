import {  getData } from "../core/api.js";

export function getProducts() {
    return getData("products");
}