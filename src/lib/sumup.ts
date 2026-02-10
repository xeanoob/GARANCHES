import { PRODUCTS } from "@/data/products";

export async function getSumUpProducts() {
    try {

        return PRODUCTS;
    } catch (error) {
        console.error("Erreur getSumUpProducts:", error);
        return PRODUCTS;
    }
}
