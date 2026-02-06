import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { amount, currency, wineName } = await req.json();

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