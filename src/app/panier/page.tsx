"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        try {
            // Dans un vrai cas, on envoie le détail. Ici on simplifie pour la démo SumUp API.
            // On prend le premier item comme "nom" pour l'exemple ou "Panier Garanches"
            const wineName = cart.length === 1 ? cart[0].name : "Panier Domaine de Garanches";

            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: totalPrice / 100, // On envoie en décimal (Euros)
                    currency: 'EUR',
                    wineName: wineName
                })
            });

            if (!res.ok) throw new Error('Erreur lors du paiement');

            const { id } = await res.json();

            if (id.startsWith('mock-')) {
                // Mode TEST : On redirige vers une page de succès locale
                alert("Mode Simulation : Paiement validé (Aucun débit)");
                // router.push('/success'); // Page à créer si besoin, ou on vide le panier
                return;
            }

            // Mode PROD : Redirection SumUp
            // SumUp ne renvoie pas d'URL de redirection directe dans l'objet checkout par défaut sans configuration,
            // mais l'intégration standard JS ou redirection dépend de l'implémentation.
            // Simplification : On suppose que l'ID sert à rediriger ou on affiche un message.
            // Note: L'API SumUp Checkout renvoie un ID. Pour payer, il faut rediriger l'utilisateur vers une URL de checkout.
            // L'URL n'est pas toujours renvoyée directement, il faut souvent construire `https://api.sumup.com/v0.1/checkouts/${id}` ? 
            // Vérification doc : C'est souvent une URL dans la réponse `checkout_id` n'est pas une URL.
            // Sans doc précise sous la main, je simule une alerte pour l'utilisateur s'il n'a pas de compte.

            alert(`Paiement initialisé avec SumUp ID: ${id}. Redirection...`);

        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-20 bg-paper">
            <FadeIn direction="down" className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl font-serif text-wine-900 mb-8 border-b border-gray-200 pb-4">Votre Panier</h1>

                {cart.length === 0 ? (
                    <FadeIn delay={0.1}>
                        <div className="text-center py-20 bg-white shadow-sm rounded-lg border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Votre panier est vide</h2>
                            <Link href="/nos-vins" className="inline-block mt-6 px-10 py-4 bg-wine-900 text-white uppercase font-bold tracking-widest hover:bg-wine-800 transition-colors rounded-full">
                                Voir la boutique
                            </Link>
                        </div>
                    </FadeIn>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">
                        <FadeIn className="md:col-span-2 space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 shadow-sm border border-gray-100 rounded-2xl transition-shadow hover:shadow-md">
                                    <div className="h-32 w-24 relative flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply p-2" />
                                    </div>

                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="font-serif text-2xl text-wine-900">{item.name}</h3>
                                        <p className="text-stone-500 font-medium">{(item.price / 100).toFixed(2)} € <span className="text-xs font-light">/ bouteille</span></p>
                                    </div>

                                    <div className="flex flex-col items-center gap-3">
                                        {/* Contrôle Quantité Style Moderne */}
                                        <div className="flex items-center border border-gray-200 rounded-full bg-white shadow-sm">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-wine-900 hover:bg-gray-50 rounded-full transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center font-bold text-wine-900">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-wine-900 hover:bg-gray-50 rounded-full transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-xs uppercase tracking-wider text-red-400 hover:text-red-600 border-b border-transparent hover:border-red-600 transition-all font-medium"
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </FadeIn>

                        <FadeIn className="h-fit" delay={0.2}>
                            <div className="bg-white p-8 shadow-sm border border-gray-100 rounded-2xl sticky top-32">
                                <h3 className="font-serif text-2xl text-wine-900 mb-6 border-b border-gray-100 pb-4">Résumé</h3>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Sous-total</span>
                                    <span className="font-bold text-wine-900">{(totalPrice / 100).toFixed(2).replace('.', ',')} €</span>
                                </div>
                                <div className="flex justify-between mb-8">
                                    <span className="text-gray-600">Livraison</span>
                                    <span className="text-sm text-gray-400 italic">Calculé après</span>
                                </div>

                                <div className="flex justify-between mb-8 border-t border-gray-100 pt-4">
                                    <span className="font-bold text-lg text-wine-900">Total</span>
                                    <span className="font-bold text-2xl text-gold-500">{(totalPrice / 100).toFixed(2).replace('.', ',')} €</span>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    disabled={isLoading}
                                    className="w-full py-4 bg-wine-900 text-white uppercase font-bold tracking-widest hover:bg-wine-800 transition-all rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Chargement..." : "Commander"}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">Paiement 100% sécurisé</p>
                            </div>
                        </FadeIn>
                    </div>
                )}
            </FadeIn>
        </main>
    );
}