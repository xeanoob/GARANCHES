export async function getSumUpProducts() {
    try {
        // En mode serveur pur, on n'a plus besoin de passer par une API interne
        // On appelle directement l'API SumUp depuis le serveur (Node.js)

        // Si on est en dev sans clé API, on peut renvoyer les produits mockés si vous le souhaitez
        // ou simplement laisser l'erreur se produire et le fallback des produits statiques prendra le relais dans la page.
        if (!process.env.SUMUP_ACCESS_TOKEN || process.env.SUMUP_ACCESS_TOKEN === 'mock' || process.env.SUMUP_ACCESS_TOKEN === 'ton_token_ici') {
            console.warn("SumUp Token missing or mock mode. Returning null to trigger fallback.");
            return null;
        }

        const response = await fetch('https://api.sumup.com/v0.1/me/items', {
            headers: {
                'Authorization': `Bearer ${process.env.SUMUP_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            next: { revalidate: 3600 } // Gestion du cache Next.js (1 heure)
        });

        if (!response.ok) {
            console.error(`SumUp API Error: ${response.status} ${response.statusText}`);
            return null;
        }

        const data = await response.json();

        // Transformation des données (identique à l'ancienne API route)
        const mappedItems = (data.items || []).map((item: any) => ({
            id: item.id || item.uuid,
            name: item.name,
            // SumUp renvoie parfois price: { amount: "12.00", currency: "EUR" } ou juste price: 12.00
            price: item.price && item.price.amount ? Math.round(parseFloat(item.price.amount) * 100) : (item.price * 100 || 0),
            description: item.description || "Description à venir.",
            // On essaye de trouver une image sinon par défaut
            image: item.image_url || "/images/36_brouilly-h.jpg",
            subtitle: "Cuvée du Domaine",
            tags: ["Beaujolais"]
        }));

        return mappedItems;

    } catch (error) {
        console.error("Erreur gertSumUpProducts:", error);
        return null;
    }
}
