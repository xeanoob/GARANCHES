"use client";

import FadeIn from "@/components/FadeIn";

export default function HistoryContent({ content }: { content?: any }) {

    return (
        <main className="min-h-screen bg-paper pt-32 pb-20">
            <FadeIn direction="down" className="text-center px-6 mb-20">
                <span className="text-gold-500 font-serif italic text-xl">Depuis 1788</span>
                <h1 className="text-4xl md:text-5xl font-serif text-wine-900 mt-4 mb-8">Notre Histoire</h1>
                <div className="w-24 h-1 bg-wine-900 mx-auto opacity-20"></div>
            </FadeIn>

            <section className="max-w-6xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg transform md:-rotate-1 transition-transform hover:rotate-0 duration-700">
                            <img
                                src="/images/10_slide003.jpg"
                                alt="Vieux manuscrits et archives familiales du Domaine de Garanches (1788)"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-wine-900/10 mix-blend-multiply"></div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left" delay={0.2} className="md:pl-10">
                        <h2 className="text-3xl font-serif text-wine-900 mb-6">{content?.origins?.title || "Les Origines"}</h2>
                        <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-wine-900 first-letter:float-left first-letter:mr-3 first-letter:font-bold leading-relaxed text-justify mb-6">
                            {content?.origins?.content || "Fondé en 1788, à l'aube de la Révolution Française, le Domaine de Garanches puise ses racines dans la terre granitique d'Odenas. Témoin privilégié de l'histoire viticole du Beaujolais, notre domaine a traversé les siècles en conservant intacte son âme vigneronne. C'est ici, au pied du Mont Brouilly, que se perpétue depuis plus de deux cents ans un savoir-faire immuable, respectueux des cycles de la nature et de l'identité de nos terroirs."}
                        </p>
                        <h2 className="text-2xl font-serif text-wine-900 mb-4 mt-8">Transmission & Modernité</h2>
                        <p className="text-gray-600 font-light leading-relaxed mb-6 text-justify">
                            Aujourd'hui, Romain Martinache et Aurélie Crozet écrivent une nouvelle page de cette saga familiale. Héritiers d'une longue tradition, ils insufflent une énergie nouvelle au domaine, alliant avec finesse les méthodes ancestrales aux techniques de vinification modernes. Leur ambition est claire : sublimer le Gamay pour offrir des vins de caractère, précis et élégants, qui racontent à chaque gorgée l'alliance réussie entre passé et présent.
                        </p>
                        <h2 className="text-2xl font-serif text-wine-900 mb-4 mt-8">La Philosophie du Vigneron</h2>
                        <p className="text-gray-600 font-light leading-relaxed text-justify">
                            Dans nos vignes, chaque geste compte. Nous travaillons en harmonie avec le vivant, privilégiant une viticulture raisonnée et attentive. De la taille hivernale aux vendanges manuelles, nous accompagnons nos raisins de Gamay et de Chardonnay avec une exigence absolue, pour qu'ils expriment toute la richesse et la minéralité de notre terroir d'exception.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <section className="bg-white py-24 my-24 border-y border-gray-100">
                <FadeIn direction="up" className="max-w-5xl mx-auto px-6 text-center">
                    <img
                        src="/images/17_logo.png"
                        alt="Illustration gravure du Château de Garanches"
                        className="h-32 w-auto mx-auto mb-8 opacity-80"
                    />
                    <h2 className="text-3xl font-serif text-wine-900 mb-8">{content?.philosophy?.title || "Le Domaine Aujourd'hui"}</h2>
                    <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-10">
                        {content?.philosophy?.content || "Aujourd'hui, Michel et Isabelle Stagnara perpétuent l'héritage familial avec la même ferveur. Alliant savoir-faire ancestral et techniques modernes, ils œuvrent chaque jour pour produire des vins d'exception, authentiques et généreux."}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-12">
                        <img src="/images/34_slide001.jpg" className="h-48 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" alt="Chai de vieillissement et fûts de chêne" />
                        <img src="/images/11_image.jpg" className="h-48 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" alt="Vignes de Gamay au pied du Mont Brouilly" />
                        <img src="/images/9_image.jpg" className="h-48 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-500" alt="Vendanges manuelles au Domaine de Garanches" />
                    </div>
                </FadeIn>
            </section>

            <section className="max-w-7xl mx-auto px-6 mb-20">
                <FadeIn direction="down" className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-wine-900">Notre Équipe</h2>
                    <p className="text-gray-500 mt-4 font-light">Ceux qui font vivre le domaine au quotidien</p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-10">
                    <FadeIn delay={0.1} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/1_image.jpg" alt="Michel Stagnara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Michel Stagnara</h3>
                    </FadeIn>

                    <FadeIn delay={0.2} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/22_image.jpg" alt="Isabelle Stagnara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Isabelle Stagnara</h3>
                    </FadeIn>

                    <FadeIn delay={0.3} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/26_image.jpg" alt="Ambroise Stagnara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Ambroise Stagnara</h3>
                    </FadeIn>

                    <FadeIn delay={0.1} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/3_image.jpg" alt="Membre de l'équipe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Membre de l'équipe</h3>
                    </FadeIn>

                    <FadeIn delay={0.2} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/4_image.jpg" alt="Laeticia Stagnara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Laeticia Stagnara</h3>
                    </FadeIn>

                    <FadeIn delay={0.3} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/15_image.jpg" alt="Tancrède Stagnara" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Tancrède Stagnara</h3>
                    </FadeIn>

                    <FadeIn delay={0.4} className="text-center group">
                        <div className="h-96 w-full relative mb-6 overflow-hidden rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src="/images/18_image.jpg" alt="Membre de l'équipe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <h3 className="text-2xl font-serif text-wine-900">Membre de l'équipe</h3>
                    </FadeIn>

                </div>
            </section>
        </main>
    );
}
