import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import WinesContent from "./WinesContent";

export const metadata: Metadata = {
    title: "Nos Vins | Domaine de Garanches",
    description: "Découvrez nos crus du Beaujolais : Brouilly, Bourgogne Blanc, Rosé et notre Méthode Traditionnelle.",
};

const FALLBACK_WINES = PRODUCTS;

async function getWines() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/products`, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) return FALLBACK_WINES;
        const data = await res.json();

        return data.items && data.items.length > 0 ? data.items : FALLBACK_WINES;
    } catch (error) {
        console.error("Erreur API SumUp:", error);
        return FALLBACK_WINES;
    }
}

export default async function NosVinsPage() {
    const wines = await getWines();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": wines.map((wine: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": wine.name,
                "description": wine.description,
                "image": wine.image ? `https://domainedegaranches.com${wine.image}` : "https://domainedegaranches.com/images/36_brouilly-h.jpg",
                "brand": {
                    "@type": "Brand",
                    "name": "Domaine de Garanches"
                },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": (wine.price / 100).toFixed(2),
                    "availability": "https://schema.org/InStock",
                    "url": "https://domainedegaranches.com/nos-vins"
                }
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <WinesContent wines={wines} />
        </>
    );
}
