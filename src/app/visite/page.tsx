import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
    title: "Visite & Accès | Domaine de Garanches",
    description: "Venez nous rendre visite à Odenas. Dégustation, vente directe et découverte du vignoble.",
};

const galleryImages = [
    { src: "/images/23_slide002.jpg", alt: "Vignes du Domaine de Garanches" },
    { src: "/images/34_slide001.jpg", alt: "Vue panoramique du vignoble" },
    { src: "/images/1_image.jpg", alt: "Le vigneron Michel Stagnara" },
    { src: "/images/22_image.jpg", alt: "La vigneronne Isabelle Stagnara" },
    { src: "/images/26_image.jpg", alt: "La relève Ambroise Stagnara" },
    { src: "/images/15_image.jpg", alt: "Le domaine" },
];

export default function VisitePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                <FadeIn direction="right">
                    <div>
                        <span className="text-amber-600 font-serif italic text-xl block mb-2">Œnotourisme</span>
                        <h1 className="text-4xl md:text-5xl font-serif text-wine-900 mb-8 leading-tight">Venir au <br />Domaine</h1>

                        <div className="space-y-8 text-gray-600 font-light leading-relaxed">
                            <p className="text-lg">
                                Nous sommes toujours ravis d'accueillir des passionnés de vin.
                                Le domaine est situé au cœur du Beaujolais, au pied du Mont Brouilly.
                            </p>

                            <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 group-hover:w-2 transition-all"></div>
                                <h3 className="font-bold text-wine-900 uppercase tracking-widest text-sm mb-4">Accès</h3>
                                <p className="text-sm leading-7">
                                    <strong className="text-gray-900">Depuis Lyon ou Paris (A6) :</strong><br />
                                    Sortez à Belleville/Saône (Sortie 30).<br />
                                    Prenez la direction <em className="text-amber-600">Charentay</em>.<br />
                                    En sortant de Charentay, suivez la route d'Odenas.<br />
                                    Le domaine se trouvera sur votre gauche.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <div>
                                    <h3 className="font-bold text-wine-900 uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Horaires
                                    </h3>
                                    <p className="text-sm">
                                        Sur rendez-vous<br />
                                        Du Lundi au Samedi
                                    </p>
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
                    <div className="rounded-lg shadow-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.5!2d4.661828!3d46.082958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4be5c5c5c5c5c%3A0x0!2s345%20Chemin%20de%20Garanches%2C%2069460%20Odenas!5e0!3m2!1sfr!2sfr!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                            title="Localisation Domaine de Garanches"
                        />
                    </div>
                </FadeIn>
            </div>

            <section className="max-w-7xl mx-auto px-6 mt-20">
                <FadeIn direction="up">
                    <div className="text-center mb-12">
                        <span className="text-amber-600 font-serif italic text-xl block mb-2">Découvrez</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-wine-900">Notre Domaine en Images</h2>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <Lightbox images={galleryImages} />
                </FadeIn>
            </section>
        </main>
    );
}
