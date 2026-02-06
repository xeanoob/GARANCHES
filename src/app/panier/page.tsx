import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
    // Simulation d'un panier vide pour l'instant
    const cartItems = [];

    return (
        <main className="min-h-screen pt-32 pb-20 bg-stone-50">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-serif text-wine-900 mb-8 border-b border-gray-200 pb-4">Votre Panier</h1>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20 bg-white shadow-sm rounded-lg">
                        <div className="mb-6 relative h-32 w-32 mx-auto opacity-20">
                            {/* Image d'illustration ou icône vide */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full text-wine-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Votre panier est vide</h2>
                        <p className="text-gray-500 mb-8">Découvrez nos cuvées pour commencer votre sélection.</p>
                        <Link
                            href="/nos-vins"
                            className="inline-block px-8 py-3 bg-wine-900 text-white uppercase font-bold tracking-widest hover:bg-gold-600 transition-colors"
                        >
                            Voir la boutique
                        </Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Liste des produits (À développer plus tard avec Woo) */}
                        <div className="md:col-span-2 space-y-4">
                            {/* Item panier ici */}
                        </div>

                        {/* Résumé de commande */}
                        <div className="bg-white p-6 shadow-sm h-fit">
                            <h3 className="font-bold text-lg mb-4">Total</h3>
                            <div className="flex justify-between mb-2">
                                <span>Sous-total</span>
                                <span>0,00 €</span>
                            </div>
                            <button className="w-full mt-6 px-6 py-3 bg-wine-900 text-white uppercase font-bold hover:bg-black transition-colors">
                                Valider la commande
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}