import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.sumup.com/v0.1/me/items', {
        headers: {
            'Authorization': `Bearer ${process.env.SUMUP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        return NextResponse.json({ error: 'Erreur SumUp' }, { status: 500 });
    }

    const data = await response.json();

    // TRANSFORMATION : On adapte le format SumUp au format de notre site
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

    return NextResponse.json({ items: mappedItems });
}