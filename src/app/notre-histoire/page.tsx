import { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
    title: "Notre Histoire | Domaine de Garanches - Depuis 1788",
    description: "Plongez dans l'histoire du Domaine de Garanches à Odenas. Une tradition viticole familiale perpétuée depuis le XVIIIe siècle au pied du Mont Brouilly par la famille Bender, reprise par Romain & Aurélie.",
};

export default function HistoirePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Domaine de Garanches",
        "url": "https://domainedegaranches.com",
        "logo": "https://domainedegaranches.com/images/17_logo.png",
        "foundingDate": "1788",
        "founders": [
            { "@type": "Person", "name": "Famille Bender" }
        ],
        "employees": [
            { "@type": "Person", "name": "Michel Stagnara", "jobTitle": "Les Projets" },
            { "@type": "Person", "name": "Isabelle Stagnara", "jobTitle": "La Gestion Quotidienne" },
            { "@type": "Person", "name": "Ambroise Stagnara", "jobTitle": "Nouvelle Génération" }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "345 chemin de Garanches",
            "addressLocality": "Odenas",
            "postalCode": "69460",
            "addressCountry": "FR"
        },
        "description": "Domaine viticole historique à Odenas depuis 1788, produisant des vins de Brouilly et Côte de Brouilly."
    };

    return (
        <main className="min-h-screen bg-paper pt-32 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* --- EN-TÊTE --- */}
            <FadeIn direction="down" className="text-center px-6 mb-20">
                <span className="text-gold-500 font-serif italic text-xl">Depuis 1788</span>
                <h1 className="text-5xl md:text-6xl font-serif text-wine-900 mt-4 mb-8">Une Histoire de Famille</h1>
                <div className="w-24 h-1 bg-wine-900 mx-auto opacity-20"></div>
            </FadeIn>

            {/* --- CHAPITRE 1 : LES RACINES --- */}
            <section className="max-w-6xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Manuscrit */}
                    <FadeIn direction="right">
                        <div className="relative h-[500px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-lg transform md:-rotate-1 transition-transform hover:rotate-0 duration-700">
                            <img
                                src="/images/10_slide003.jpg"
                                alt="Vieux manuscrits et archives familiales du Domaine de Garanches (1788)"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-wine-900/10 mix-blend-multiply"></div>
                        </div>
                    </FadeIn>

                    {/* Texte Historique */}
                    <FadeIn direction="left" delay={0.2} className="md:pl-10">
                        <h2 className="text-3xl font-serif text-wine-900 mb-6">Les Origines</h2>
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-wine-900 first-letter:float-left first-letter:mr-3 first-letter:font-bold leading-relaxed text-justify">
                            L'histoire du Domaine de Garanches plonge ses racines au cœur du XVIIIe siècle.
                            C'est en 1788, à la veille de la Révolution Française, que les premières pierres
                            de notre histoire viticole furent posées à Odenas.
                        </p>
                        <p className="text-gray-600 font-light leading-relaxed mb-6">
                            Depuis plus de deux siècles, chaque génération a eu à cœur de préserver ce patrimoine unique,
                            transmettant le savoir-faire de la vigne et le respect du terroir de Brouilly.
                            Les vieux manuscrits conservés au domaine témoignent de cette longue filiation et de
                            l'attachement viscéral de notre famille à cette terre.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* --- CHAPITRE 2 : LE LIEU --- */}
            <section className="bg-white py-24 my-24 border-y border-gray-100">
                <FadeIn direction="up" className="max-w-5xl mx-auto px-6 text-center">
                    <img
                        src="/images/17_logo.png"
                        alt="Illustration gravure du Château de Garanches"
                        className="h-32 w-auto mx-auto mb-8 opacity-80"
                    />
                    <h2 className="text-3xl font-serif text-wine-900 mb-8">Le Domaine Aujourd'hui</h2>
                    <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                        Situé au pied du Mont Brouilly, le domaine s'étend sur 10 hectares de vignes exposées
                        idéalement pour capter le soleil du Beaujolais. Notre maison de maître, typique de la région,
                        est le cœur battant de l'exploitation, abritant nos caves voûtées où vieillissent nos fûts de chêne.
                    </p>

                    {/* Galerie Photo rapide */}
                    <div className="grid grid-cols-3 gap-4 mt-12">
                        <img src="/images/34_slide001.jpg" className="h-48 w-full object-cover rounded-sm hover:scale-105 transition-transform duration-500" alt="Chai de vieillissement et fûts de chêne" />
                        <img src="/images/11_image.jpg" className="h-48 w-full object-cover rounded-sm hover:scale-105 transition-transform duration-500" alt="Vignes de Gamay au pied du Mont Brouilly" />
                        <img src="/images/9_image.jpg" className="h-48 w-full object-cover rounded-sm hover:scale-105 transition-transform duration-500" alt="Vendanges manuelles au Domaine de Garanches" />
                    </div>
                </FadeIn>
            </section>

            {/* --- CHAPITRE 3 : LES VISAGES --- */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <FadeIn direction="down" className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-wine-900">Ceux qui font le vin</h2>
                    <p className="text-gray-500 mt-4 font-light">Une passion qui se vit en famille</p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Portrait 1 */}
                    <FadeIn delay={0.1} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/1_image.jpg" alt="Le Vigneron" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Michel Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Les Projets</p>
                    </FadeIn>

                    {/* Portrait 2 */}
                    <FadeIn delay={0.2} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/22_image.jpg" alt="La Vigneronne" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Isabelle Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">La Gestion Quotidienne</p>
                    </FadeIn>

                    {/* Portrait 3 */}
                    <FadeIn delay={0.3} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/26_image.jpg" alt="La Relève" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Ambroise Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Nouvelle Génération</p>
                    </FadeIn>

                    {/* --- NOUVEAUX MEMBRES AJOUTÉS --- */}

                    {/* Portrait 4 */}
                    <FadeIn delay={0.1} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/3_image.jpg" alt="Membre de l'équipe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Membre de l'équipe</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Rôle à définir</p>
                    </FadeIn>

                    {/* Portrait 5 */}
                    <FadeIn delay={0.2} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/4_image.jpg" alt="Membre de l'équipe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Laeticia Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Rôle à définir</p>
                    </FadeIn>

                    {/* Portrait 6 */}
                    <FadeIn delay={0.3} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/15_image.jpg" alt="Membre de l'équipe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Tancrède Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Rôle à définir</p>
                    </FadeIn>

                    {/* Portrait 7 */}
                    <FadeIn delay={0.4} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/18_image.jpg" alt="Membre de l'équipe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Membre de l'équipe</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Rôle à définir</p>
                    </FadeIn>

                </div>
            </section>

        </main>
    );
}