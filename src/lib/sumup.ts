import { PRODUCTS } from "@/data/products";

export async function getSumUpProducts() {
    try {
        // Tentative d'appel API (nécessite un TOKEN PRO avec scopes 'products' ou 'items')
        const response = await fetch('https://api.sumup.com/v0.1/me/items', {
            headers: {
                'Authorization': `Bearer ${process.env.SUMUP_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 } // Cache 1h
        });

        if (!response.ok) {
            // Si l'API échoue (404, 401...), on retourne silencieusement les produits statiques
            // console.warn(`API SumUp non disponible (${response.status}). Utilisation du catalogue statique.`);
            return PRODUCTS;
        }

        const data = await response.json();

        // Si l'API répond mais vide
        if (!data.items || data.items.length === 0) return PRODUCTS;

        // Transformation des données API en format interne
        return (data.items || []).map((item: any) => ({
            id: item.id || item.uuid,
            name: item.name,
            price: item.price && item.price.amount ? Math.round(parseFloat(item.price.amount) * 100) : (item.price * 100 || 0),
            description: item.description || "",
            image: item.image_url || "/images/36_brouilly-h.jpg",
            subtitle: "Cuvée du Domaine",
            tags: ["Beaujolais"]
        }));

    } catch (error) {
        // En cas d'erreur réseau ou autre, fallback immédiat
        return PRODUCTS;
    }
}
