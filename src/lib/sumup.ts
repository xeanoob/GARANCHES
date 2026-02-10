import { PRODUCTS } from "@/data/products";

export async function getSumUpProducts() {
    try {
        // L'API SumUp pour les produits n'est pas fiable / n'existe plus sous cette forme.
        // On retourne donc toujours les produits statiques définis dans le code.
        // Le paiement, lui, fonctionnera via l'API Checkout avec le token.
        return PRODUCTS;
    } catch (error) {
        console.error("Erreur getSumUpProducts:", error);
        return PRODUCTS;
    }
}
