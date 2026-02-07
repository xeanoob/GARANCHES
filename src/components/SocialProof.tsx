"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const TESTIMONIALS = [
    {
        name: "Client Google",
        role: "Visite au domaine",
        content: "Un accueil chaleureux par un jeune couple de vignerons passionnés. Le cadre au pied du Mont Brouilly est magnifique et les vins sont d'une grande finesse.",
        stars: 5,
    },
    {
        name: "Amateur de Vin (Vivino)",
        role: "Achat vérifié",
        content: "Un Brouilly rouge violacé aux arômes de petits fruits rouges (fraise, framboise). Une belle attaque en bouche, des tannins soyeux et une longueur généreuse.",
        stars: 5,
    },
    {
        name: "Guide 1001 Dégustations",
        role: "Critique Vin",
        content: "Un nez discret mais charmeur de fraise et de banane. Une chair de fruits agréable qui accompagne superbement une andouillette grillée.",
        stars: 4,
    }
];

const AWARDS = [
    {
        name: "Vigneron Indépendant",
        image: "/images/logo-vigneron-independant.png", // We might not have this image, but we can simulate a badge or text
        fallbackText: "Vigneron Indépendant"
    },
    {
        name: "Haute Valeur Environnementale",
        image: "/images/hve-logo.png",
        fallbackText: "Certifié HVE 3"
    },
    {
        name: "Concours Général Agricole",
        image: "/images/medaille-or.png",
        fallbackText: "Médaille d'Or Paris"
    }
];

export default function SocialProof() {
    return (
        <section className="py-20 bg-stone-100 border-t border-stone-200">
            <div className="max-w-7xl mx-auto px-6">

                {/* --- TITRE --- */}
                <FadeIn direction="up" className="text-center mb-16">
                    <span className="text-amber-600 font-serif italic text-lg mb-2 block">Excellence & Confiance</span>
                    <h2 className="text-4xl font-serif text-wine-900 mb-6">Reconnu par nos clients et nos pairs</h2>
                    <div className="w-24 h-1 bg-wine-900 mx-auto opacity-20"></div>
                </FadeIn>

                <div className="max-w-4xl mx-auto">
                    <FadeIn direction="up">
                        <div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12 text-center">
                                <div className="text-5xl font-bold text-wine-900 font-serif">4.9/5</div>
                                <div>
                                    <div className="flex text-amber-500 text-xl justify-center">★★★★★</div>
                                    <p className="text-gray-500 text-sm italic">Moyenne avis Google & Vivino</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {TESTIMONIALS.map((review, index) => (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative hover:-translate-y-1 transition-transform duration-300">
                                        {/* Quote Icon */}
                                        <div className="absolute top-4 right-6 text-6xl text-wine-100 font-serif leading-none -z-0 opacity-50">”</div>

                                        <div className="relative z-10">
                                            <div className="flex text-amber-400 text-sm mb-4">
                                                {"★".repeat(review.stars)}
                                            </div>
                                            <p className="text-gray-700 italic mb-6 font-light leading-relaxed min-h-[80px]">"{review.content}"</p>
                                            <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                                <div className="w-10 h-10 rounded-full bg-wine-50 flex items-center justify-center text-wine-900 font-bold text-sm shrink-0">
                                                    {review.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{review.name}</p>
                                                    <p className="text-[10px] text-gray-400">{review.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <a href="https://www.google.fr/maps/search/Domaine+de+Garanches+Odenas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-wine-900 border-b border-wine-900 pb-1 text-sm font-bold uppercase tracking-widest hover:text-amber-600 hover:border-amber-600 transition-colors">
                                    <span>Voir tous les avis Google</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
