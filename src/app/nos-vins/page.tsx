import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nos Vins | Domaine de Garanches",
    description: "Découvrez nos crus du Beaujolais : Brouilly, Bourgogne Blanc, Rosé et notre Méthode Traditionnelle.",
};

const wines = [
    {
        id: "brouilly",
        name: "Brouilly",
        subtitle: "Cru du Beaujolais — Rouge",
        price: "12,00 €", // Prix indicatif (à modifier)
        description: "Les Brouilly présentent des notes de fleurs et de fruits : rose, violette, framboise, et cassis. Au-delà de ces parfums qui constituent le plaisir du Brouilly, chaque année révèle sa personnalité. Découvrez notre séléction de Brouilly à la vente.",
        image: "/images/36_brouilly-h.jpg",
        tags: ["Gamay", "Viandes rouges", "Fromages"]
    },
    {
        id: "bourgogne-blanc",
        name: "Bourgogne Blanc",
        subtitle: "Chardonnay",
        price: "10,50 €",
        description: "Le Chardonnay blanc développe de façon constante une palette aromatique fraiche et fruitée avec des arômes de poire, de pomme... découvrez notre sélection de Chardonnay à la vente.",
        image: "/images/37_bourgogne-blanc-h.jpg",
        tags: ["Chardonnay", "Poissons", "Apéritif"]
    },
    {
        id: "rose",
        name: "Beaujolais-Villages",
        subtitle: "Rosé",
        price: "9,00 €",
        description: "Elaboré à partir du cepage Gamay c'est un vin frais, qui présentent de façon constante des notes de fleurs et de fruits, une robe aux reflets rose saumoné. Découvrez notre sélection de Beaujolais à la vente.",
        image: "/images/13_rose-h.jpg",
        tags: ["Frais", "Estival", "Grillades"]
    },
    {
        id: "petillant",
        name: "Amours Pétillantes",
        subtitle: "Méthode Traditionnelle",
        price: "11,00 €",
        description: "Un vin rosé rieur, effervescent qui danse dans les verres. Pour accompagner avec finesse et élégance tous vos succès. Découvrez notre sélection de vin rosé à la vente.",
        image: "/images/32_petillan-h.jpg",
        tags: ["Bulles", "Dessert", "Fête"]
    }
];

export default function NosVinsPage() {
    return (
        <main className="min-h-screen bg-paper pt-32 pb-20">

            {/* --- EN-TÊTE DE PAGE --- */}
            <div className="text-center px-6 mb-20">
                <span className="text-gold-500 font-serif italic text-xl">La Cave</span>
                <h1 className="text-5xl md:text-6xl font-serif text-wine-900 mt-4 mb-6">Nos Cuvées</h1>
                <p className="max-w-2xl mx-auto text-gray-600 font-light leading-relaxed">
                    Tous nos vins sont produits, vinifiés et mis en bouteille à la propriété.<br />
                    Expédition possible dans toute la France (cartons de 6 ou 12 bouteilles).
                </p>
            </div>

            {/* --- GRILLE DES VINS --- */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">

                    {wines.map((wine) => (
                        <div key={wine.id} className="group flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-sm">

                            {/* Image Bouteille */}
                            <div className="w-full md:w-1/3 h-80 relative flex-shrink-0 bg-gray-50 rounded-sm overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center p-4">
                                    <img
                                        src={wine.image}
                                        alt={wine.name}

                                        className="h-full w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Texte & Détails */}
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                                    <h2 className="text-3xl font-serif text-wine-900">{wine.name}</h2>
                                    <span className="text-xl font-bold text-gold-500 mt-2 md:mt-0 whitespace-nowrap">{wine.price}</span>
                                </div>

                                <p className="text-wine-700 text-sm uppercase tracking-widest font-bold mb-4">{wine.subtitle}</p>

                                <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                                    {wine.description}
                                </p>

                                {/* Tags (Accords mets-vins) */}
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                                    {wine.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-wine-100 text-wine-700 text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Bouton d'action */}
                                <Link
                                    href="/contact"
                                    className="inline-block w-full md:w-auto px-8 py-3 bg-wine-900 text-white uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors text-center"
                                >
                                    Commander
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* --- BANDEAU BAS --- */}
            <div className="mt-32 py-16 bg-wine-900 text-white text-center px-4">
                <h3 className="text-3xl font-serif mb-4">Une question sur un millésime ?</h3>
                <p className="font-light opacity-80 mb-8 max-w-xl mx-auto">
                    N'hésitez pas à nous contacter pour connaître les tarifs d'expédition ou pour passer commande directement.
                </p>
                <Link href="/contact" className="border-b border-gold-500 text-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase text-xs tracking-widest font-bold">
                    Contactez-nous
                </Link>
            </div>

        </main>
    );
}