import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Visite & Accès | Domaine de Garanches",
    description: "Venez nous rendre visite à Odenas. Dégustation, vente directe et découverte du vignoble.",
};

export default function VisitePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* Colonne Texte */}
                <div>
                    <span className="text-amber-500 font-serif italic text-xl">Œnotourisme</span>
                    <h1 className="text-5xl font-serif text-red-900 mt-4 mb-8">Venir au Domaine</h1>

                    <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                        <p>
                            Nous sommes toujours ravis d'accueillir des passionnés de vin.
                            Le domaine est situé au cœur du Beaujolais, au pied du Mont Brouilly.
                        </p>

                        <div className="bg-white p-6 shadow-sm border-l-4 border-amber-500">
                            <h3 className="font-bold text-red-900 uppercase tracking-widest text-sm mb-2">Accès</h3>
                            <p className="text-sm">
                                <strong>Depuis Lyon ou Paris (A6) :</strong><br />
                                Sortez à Belleville/Saône (Sortie 30).<br />
                                Prenez la direction <em>Charentay</em>.<br />
                                En sortant de Charentay, suivez la route d'Odenas.<br />
                                Le domaine se trouvera sur votre gauche.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-red-900 uppercase tracking-widest text-sm mb-2">Adresse</h3>
                            <p>
                                145 Rue des Garanches<br />
                                69460 Odenas<br />
                                France
                            </p>
                        </div>

                        <div className="pt-6">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-red-900 text-white uppercase font-bold text-xs tracking-widest hover:bg-amber-500 transition-colors"
                            >
                                Prendre Rendez-vous
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Colonne Image / Carte */}
                <div className="relative h-[500px] w-full bg-gray-200 rounded-sm shadow-xl overflow-hidden">
                    <Image
                        src="/images/23_slide002.jpg"
                        alt="Entrée principale et vignoble du Domaine de Garanches à Odenas"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </main>
    );
}