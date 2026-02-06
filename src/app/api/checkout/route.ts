import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";

export async function POST(req: Request) {
    let { amount, currency, wineName } = await req.json();

    // SÉCURITÉ : Validation du prix côté serveur
    // On essaie de trouver le produit dans notre "base de données" locale
    const localProduct = PRODUCTS.find(p => p.name === wineName || p.id === wineName);

    // MODE SIMULATION : Si pas de clé SumConfiguration configurée
    if (!process.env.SUMUP_ACCESS_TOKEN || process.env.SUMUP_ACCESS_TOKEN === 'ton_token_ici' || process.env.SUMUP_ACCESS_TOKEN === 'mock') {
        console.log("Mode Mock activé");
        await new Promise(resolve => setTimeout(resolve, 1000)); // Latence artificielle
        return NextResponse.json({ id: `mock-${Date.now()}` });
    }

    if (localProduct) {
        console.log(`[Checkout Security] Validating price for ${wineName}. Client: ${amount}, Server: ${localProduct.price / 100}`);
        // On force le prix officiel si le produit est connu
        // Note: SumUp attend un decimal (ex: 12.00) ou cents ? 
        // L'app front envoie des decimaux (amount). PRODUCTS a des cents.
        // On convertit pour comparer ou écraser.
        // Le front envoie 12.00 pour 1200 cents.

        const officialAmount = localProduct.price / 100;

        if (Math.abs(amount - officialAmount) > 0.1) {
            console.warn(`[Checkout Security] Price mismatch ! Using official price.`);
            amount = officialAmount;
        }
    } else {
        console.warn(`[Checkout Security] Unknown product '${wineName}'. Accepting client price but this is risky.`);
    }

    const response = await fetch('https://api.sumup.com/v0.1/checkouts', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.SUMUP_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            checkout_reference: `GARANCHES-${Date.now()}`,
            amount: amount,
            currency: currency,
            pay_to_email: 'contact@domainedegaranches.com',
            description: `Achat : ${wineName}`,
        }),
    });

    const checkout = await response.json();
    return NextResponse.json({ id: checkout.id }); // On renvoie l'ID de paiement au front
}