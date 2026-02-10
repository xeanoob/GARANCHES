"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import FadeIn from "@/components/FadeIn";
import OpeningStatus from "@/components/OpeningStatus";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), {
    loading: () => <div className="w-full h-[500px] bg-stone-100 rounded-lg animate-pulse" />,
    ssr: false
});

export default function VisiteContent() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <FadeIn direction="right">
                    <div>
                        <span className="text-amber-700 font-serif italic text-xl block mb-2">Bienvenue au Domaine</span>
                        <h1 className="text-4xl md:text-5xl font-serif text-wine-900 mb-8 leading-tight">
                            Visite & <br />Dégustation
                        </h1>

                        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                            <p className="text-lg">
                                Poussez les portes de notre caveau pour une parenthèse authentique au cœur du vignoble. Nous vous accueillons en toute simplicité et convivialité, face au panorama unique du Mont Brouilly.
                                Prenez le temps de déguster l'ensemble de notre gamme : l'intensité de nos Brouilly, la fraîcheur de notre Bourgogne Blanc ou la finesse de nos Rosés. Ici, le vin se partage et se raconte.
                            </p>

                            <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 group-hover:w-2 transition-all"></div>
                                <h3 className="font-bold text-wine-900 uppercase tracking-widest text-sm mb-4">Infos Pratiques & Groupes</h3>
                                <p className="text-sm leading-7">
                                    Nous recevons avec plaisir les visiteurs individuels comme les groupes. Pour vous garantir le meilleur accueil, <strong>une réservation téléphonique est conseillée</strong>.
                                    Profitez de votre visite pour effectuer vos achats en direct de la propriété et bénéficier de nos tarifs préférentiels "départ cave".
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <div>
                                    <h3 className="font-bold text-wine-900 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                        Adresse
                                    </h3>
                                    <p className="text-sm">
                                        345 chemin de Garanches<br />
                                        69460 Odenas<br />
                                        France
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-wine-900 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                        Horaires
                                    </h3>
                                    <p className="text-sm">
                                        Lundi au Samedi<br />
                                        9h00 - 18h00
                                    </p>
                                    <div className="mt-2">
                                        <OpeningStatus />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <Link
                                    href="/contact"
                                    className="inline-block px-10 py-4 bg-wine-900 text-white uppercase font-bold text-xs tracking-widest hover:bg-amber-600 transition-colors rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
                                >
                                    Prendre Rendez-vous
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="left" delay={0.2}>
                    {/* Carte Interactive Stylisée */}
                    <InteractiveMap />
                </FadeIn>
            </div>
        </main>
    );
}
