import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notre Histoire | Domaine de Garanches",
    description: "Une histoire de famille depuis 1788. Découvrez les vignerons derrière le Domaine de Garanches à Odenas.",
};

export default function HistoirePage() {
    return (
        <main className="min-h-screen bg-paper pt-32 pb-20">

            {/* --- EN-TÊTE --- */}
            <div className="text-center px-6 mb-20">
                <span className="text-gold-500 font-serif italic text-xl">Depuis 1788</span>
                <h1 className="text-5xl md:text-6xl font-serif text-wine-900 mt-4 mb-8">Une Histoire de Famille</h1>
                <div className="w-24 h-1 bg-wine-900 mx-auto opacity-20"></div>
            </div>

            {/* --- CHAPITRE 1 : LES RACINES --- */}
            <section className="max-w-6xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Manuscrit */}
                    <div className="relative h-[500px] w-full bg-gray-100 rounded-sm overflow-hidden shadow-lg transform md:-rotate-1 transition-transform hover:rotate-0 duration-700">
                        <img
                            src="/images/10_slide003.jpg"
                            alt="Archives du domaine"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-wine-900/10 mix-blend-multiply"></div>
                    </div>

                    {/* Texte Historique */}
                    <div className="md:pl-10">
                        <h2 className="text-3xl font-serif text-wine-900 mb-6">Les Origines</h2>
                        <p className="text-gray-600 font-light leading-relaxed mb-6 text-lg">
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
                    </div>
                </div>
            </section>

            {/* --- CHAPITRE 2 : LE LIEU --- */}
            <section className="bg-white py-24 my-24 border-y border-gray-100">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <img
                        src="/images/17_logo.png"
                        alt="Dessin du domaine"
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
                        <img src="/images/34_slide001.jpg" className="h-48 w-full object-cover rounded-sm" alt="Chai" />
                        <img src="/images/11_image.jpg" className="h-48 w-full object-cover rounded-sm" alt="Vignes" />
                        <img src="/images/7_image.jpg" className="h-48 w-full object-cover rounded-sm" alt="Vendanges" />
                    </div>
                </div>
            </section>

            {/* --- CHAPITRE 3 : LES VISAGES --- */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-wine-900">Ceux qui font le vin</h2>
                    <p className="text-gray-500 mt-4 font-light">Une passion qui se vit en famille</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Portrait 1 */}
                    <div className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/1_image.jpg" alt="Le Vigneron" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Michel Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Génération Précédente</p>
                    </div>

                    {/* Portrait 2 */}
                    <div className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/22_image.jpg" alt="La Vigneronne" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Isabelle Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Vigneronne</p>
                    </div>

                    {/* Portrait 3 */}
                    <div className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/26_image.jpg" alt="La Relève" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-xl font-serif text-wine-900">Ambroise Stagnara</h3>
                        <p className="text-xs text-gold-500 uppercase tracking-widest mt-1">Nouvelle Génération</p>
                    </div>

                </div>
            </section>

        </main>
    );
}