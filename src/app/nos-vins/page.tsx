import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Nos Vins | Domaine de Garanches",
    description: "Découvrez nos crus du Beaujolais : Brouilly, Bourgogne Blanc, Rosé et notre Méthode Traditionnelle.",
};

import { PRODUCTS } from "@/data/products";

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

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://domainedegaranches.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Nos Vins",
                "item": "https://domainedegaranches.com/nos-vins"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-paper pt-32 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />

            <FadeIn direction="down" className="text-center px-6 mb-20">
                <span className="text-gold-500 font-serif italic text-xl">La Cave</span>
                <h1 className="text-4xl md:text-5xl font-serif text-wine-900 mt-4 mb-6">Nos Cuvées</h1>
                <p className="max-w-2xl mx-auto text-gray-600 font-light leading-relaxed">
                    Tous nos vins sont produits, vinifiés et mis en bouteille à la propriété.<br />
                    Expédition possible dans toute la France (cartons de 6 ou 12 bouteilles).
                </p>
            </FadeIn>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">

                    {wines.map((wine: any, index: number) => (
                        <FadeIn key={wine.id} delay={index * 0.1}>
                            <div className="group flex flex-col md:flex-row gap-4 md:gap-8 items-center bg-white p-4 md:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-lg">

                                <div className="w-full md:w-1/3 h-64 md:h-80 relative flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <Image
                                            src={wine.image || "/images/36_brouilly-h.jpg"}
                                            alt={`${wine.name} - Domaine de Garanches`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            loading="lazy"
                                            quality={80}
                                            className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-2 md:p-4 rotate-90"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-2/3 text-center md:text-left">
                                    <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                                        <h2 className="text-3xl font-serif text-wine-900">{wine.name}</h2>
                                        <span className="text-xl font-bold text-gold-500 mt-2 md:mt-0 whitespace-nowrap">
                                            {(wine.price / 100).toFixed(2).replace('.', ',')} €
                                        </span>
                                    </div>

                                    <p className="text-wine-700 text-sm uppercase tracking-widest font-bold mb-4">
                                        {wine.subtitle || "Domaine de Garanches"}
                                    </p>

                                    <p className="text-gray-600 font-light text-sm leading-relaxed mb-6 line-clamp-3">
                                        {wine.description}
                                    </p>

                                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-2 text-xs text-gray-500 mb-6 font-light">
                                        {wine.volume && <span>{wine.volume}</span>}
                                        {wine.alcohol && <span className="border-l border-gray-300 pl-4">{wine.alcohol}</span>}
                                        {wine.price && wine.volume && (
                                            <span className="border-l border-gray-300 pl-4 text-gray-400 italic">
                                                Soit {((wine.price / 100) / (parseFloat(wine.volume) === 1.5 ? 1.5 : 0.75)).toFixed(2).replace('.', ',')} €/L
                                            </span>
                                        )}
                                        {wine.allergens && (
                                            <span className="border-l border-gray-300 pl-4 text-[10px] uppercase tracking-wider text-gray-400">
                                                {wine.allergens}
                                            </span>
                                        )}
                                        <span className="border-l border-gray-300 pl-3" title="Déconseillé aux femmes enceintes">
                                            <svg viewBox="0 0 64 64" className="w-5 h-5 opacity-60 fill-current text-gray-400">
                                                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="3" />
                                                <line x1="12" y1="52" x2="52" y2="12" stroke="currentColor" strokeWidth="3" />
                                                <path d="M32 10a10 10 0 0 1 10 10c0 5-4 15-10 15s-10-10-10-15a10 10 0 0 1 10-10z" fill="currentColor" />
                                                <path d="M32 35c-8 0-14 6-14 14v5h28v-5c0-8-6-14-14-14z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                                        {wine.tags?.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 bg-wine-50 text-wine-800 text-xs rounded-full border border-wine-100">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <AddToCartButton wine={wine} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}

                </div>
            </div>

            <FadeIn direction="up">
                <div className="mt-32 py-16 bg-wine-900 text-white text-center px-4">
                    <h3 className="text-3xl font-serif mb-4">Une question sur un millésime ?</h3>
                    <p className="font-light opacity-80 mb-8 max-w-xl mx-auto">
                        N'hésitez pas à nous contacter pour connaître les tarifs d'expédition ou pour passer commande directement.
                    </p>
                    <Link href="/contact" className="border-b border-gold-500 text-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs tracking-widest font-bold">
                        Contactez-nous
                    </Link>
                </div>
            </FadeIn>

        </main >
    );
}
