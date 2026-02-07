import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton"; // Import du nouveau bouton
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Nos Vins | Domaine de Garanches",
    description: "Découvrez nos crus du Beaujolais : Brouilly, Bourgogne Blanc, Rosé et notre Méthode Traditionnelle.",
};

// 1. Données de secours (Fallback) basées sur ton code initial
// Note : Les prix sont en centimes pour correspondre au format standard des APIs de paiement.
import { PRODUCTS } from "@/data/products";

// 1. Données de secours (Fallback) basées sur ton code initial
const FALLBACK_WINES = PRODUCTS;

// 2. Fonction pour récupérer les vins via ton API interne
async function getWines() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/products`, {
            next: { revalidate: 3600 } // Mise à jour du cache toutes les heures
        });

        if (!res.ok) return FALLBACK_WINES;
        const data = await res.json();

        // On retourne les items de SumUp s'ils existent, sinon tes données par défaut
        return data.items && data.items.length > 0 ? data.items : FALLBACK_WINES;
    } catch (error) {
        console.error("Erreur API SumUp:", error);
        return FALLBACK_WINES;
    }
}

export default async function NosVinsPage() {
    const wines = await getWines();

    // --- GEO & SEO : Données structurées pour la liste des produits ---
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
        <main className="min-h-screen bg-paper pt-32 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* --- EN-TÊTE DE PAGE --- */}
            {/* --- EN-TÊTE DE PAGE --- */}
            <FadeIn direction="down" className="text-center px-6 mb-20">
                <span className="text-gold-500 font-serif italic text-xl">La Cave</span>
                <h1 className="text-4xl md:text-5xl font-serif text-wine-900 mt-4 mb-6">Nos Cuvées</h1>
                <p className="max-w-2xl mx-auto text-gray-600 font-light leading-relaxed">
                    Tous nos vins sont produits, vinifiés et mis en bouteille à la propriété.<br />
                    Expédition possible dans toute la France (cartons de 6 ou 12 bouteilles).
                </p>
            </FadeIn>

            {/* --- GRILLE DES VINS --- */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">

                    {wines.map((wine: any, index: number) => (
                        <FadeIn key={wine.id} delay={index * 0.1}>
                            <div className="group flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-lg">

                                {/* Image Bouteille */}
                                <div className="w-full md:w-1/3 h-80 relative flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center p-4">
                                        <Image
                                            src={wine.image || "/images/36_brouilly-h.jpg"} // Image par défaut si manquante
                                            alt={`${wine.name} - Domaine de Garanches`}
                                            fill
                                            className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 p-4"
                                        />
                                    </div>
                                </div>

                                {/* Texte & Détails */}
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

                                    {/* Tags (Accords mets-vins) */}
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                                        {wine.tags?.map((tag: string) => (
                                            <span key={tag} className="px-3 py-1 bg-wine-100 text-wine-700 text-xs rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Nouveau bouton d'action interactif */}
                                    <AddToCartButton wine={wine} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}

                </div>
            </div>

            {/* --- BANDEAU BAS --- */}
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

        </main>
    );
}