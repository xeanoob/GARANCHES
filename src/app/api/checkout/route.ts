import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/products";

export async function POST(req: Request) {
    let { amount, currency, wineName } = await req.json();

    const localProduct = PRODUCTS.find(p => p.name === wineName || p.id === wineName);

    // MODE SIMULATION
    if (!process.env.SUMUP_ACCESS_TOKEN || process.env.SUMUP_ACCESS_TOKEN === 'mock') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return NextResponse.json({ id: `mock-${Date.now()}` });
    }

    if (localProduct) {
        // Validation sécurisée en CENTIMES (entiers)
        const clientAmountInCents = Math.round(amount * 100);
        const officialAmountInCents = localProduct.price;

        // Si écart > 1 centime (tolérance d'arrondi), on force le prix officiel
        if (Math.abs(clientAmountInCents - officialAmountInCents) > 1) {
            console.warn(`[Checkout Security] Price mismatch for ${wineName}. Overriding client price.`);
            amount = officialAmountInCents / 100;
        }
    } else {
        console.warn(`[Checkout Security] Unknown product '${wineName}'. using client price.`);
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
            description: `Achat : ${wineName}`,
        }),
    });

    const checkout = await response.json();
    return NextResponse.json({ id: checkout.id });
}
