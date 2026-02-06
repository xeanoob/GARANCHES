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
    return NextResponse.json(data);
}