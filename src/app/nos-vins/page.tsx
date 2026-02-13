import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import WinesContent from "./WinesContent";

export const metadata: Metadata = {
    title: "Nos Vins | Domaine de Garanches",
    description: "Découvrez nos crus du Beaujolais : Brouilly, Bourgogne Blanc, Rosé et notre Méthode Traditionnelle.",
};

const FALLBACK_WINES = PRODUCTS;

import { getSumUpProducts } from "@/lib/sumup";
import { getWines as getSanityWines } from "@/sanity/lib/queries";

async function getWines() {
    const sanityWines = await getSanityWines();

    // Si on a des vins dans Sanity, ils sont prioritaires
    if (sanityWines && sanityWines.length > 0) {
        return sanityWines;
    }

    const wines = await getSumUpProducts();
    if (wines && wines.length > 0) {
        return wines;
    }
    return FALLBACK_WINES;
}

export default async function NosVinsPage() {
    const wines = await getWines();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "inLanguage": "fr-FR",
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
