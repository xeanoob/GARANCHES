import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import ParallaxImage from "@/components/ParallaxImage";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800 font-sans selection:bg-red-900 selection:text-white">

      {/* --- SECTION HÉROS (Grande image d'accueil) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond fixe */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/34_slide001.jpg"
            alt="Vignes du Domaine de Garanches"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Contenu textuel animé */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <FadeIn delay={0.2} direction="down">
            <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-amber-400 font-bold mb-6 block">
              Depuis 1788 — Odenas
            </span>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 leading-tight">
              Domaine de <br />
              <span className="italic">Garanches</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 text-gray-100 leading-relaxed">
              Au cœur du Beaujolais, au pied du Mont Brouilly, découvrez l'élégance d'un savoir-faire familial séculaire.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link
                href="/nos-vins"
                className="px-10 py-4 bg-red-900/90 hover:bg-red-800 text-white uppercase tracking-widest text-xs font-bold transition-all border border-red-900 hover:scale-105 duration-300"
              >
                Découvrir nos vins
              </Link>
              <Link
                href="/visite"
                className="px-10 py-4 bg-transparent hover:bg-white/10 text-white uppercase tracking-widest text-xs font-bold transition-all border border-white hover:scale-105 duration-300"
              >
                Venir au domaine
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* --- SECTION PRÉSENTATION & TERROIR --- */}
      <section className="py-32 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* Texte (gauche) */}
          <FadeIn direction="right">
            <div>
              <span className="text-amber-600 font-serif italic text-2xl mb-2 block">Notre Philosophie</span>
              <h2 className="text-5xl font-serif text-red-900 mb-8 leading-tight">Un Terroir <br />d'Exception</h2>
              <p className="text-gray-600 leading-loose text-lg font-light mb-8 text-justify">
                Le Domaine de Garanches s'étend sur 14 hectares de vignes exposées sud-est.
                Nos sols granitiques confèrent au Gamay une expression unique, mêlant la finesse des fruits rouges à la puissance des épices.
                Chaque grappe est le fruit d'une attention quotidienne et passionnée.
              </p>
              <Link href="/notre-histoire" className="group inline-flex items-center text-red-900 uppercase text-xs font-bold tracking-widest hover:text-amber-600 transition-colors">
                <span className="border-b border-red-900 pb-1 group-hover:border-amber-600">Lire notre histoire</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          {/* Image Parallaxe (droite) */}
          <FadeIn direction="left" delay={0.2}>
            {/* Utilisation du composant ParallaxImage avec l'image 23_slide002 */}
            <ParallaxImage
              src="/images/23_slide002.jpg"
              alt="Vignes du domaine en été"
              className="h-[600px] w-full shadow-2xl rounded-sm"
            />
          </FadeIn>

        </div>
      </section>

      {/* --- SECTION NOS VINS (Les Cuvées) --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <FadeIn direction="down">
              <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4 block">Boutique en ligne</span>
              <h2 className="text-5xl font-serif text-gray-900">Nos Grandes Cuvées</h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {/* Carte 1 : Brouilly */}
            <FadeIn delay={0.1} className="group cursor-pointer">
              <Link href="/nos-vins">
                <div className="relative h-[500px] overflow-hidden mb-8 bg-gray-50 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10 duration-500"></div>
                  <Image
                    src="/images/36_brouilly-h.jpg"
                    alt="Brouilly Domaine de Garanches"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-gray-900 group-hover:text-red-900 transition-colors">Brouilly</h3>
                  <div className="h-[1px] w-10 bg-gray-300 mx-auto my-4 group-hover:bg-red-900 transition-colors"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Cru du Beaujolais</p>
                </div>
              </Link>
            </FadeIn>

            {/* Carte 2 : Bourgogne Blanc */}
            <FadeIn delay={0.3} className="group cursor-pointer md:-mt-12">
              <Link href="/nos-vins">
                <div className="relative h-[500px] overflow-hidden mb-8 bg-gray-50 flex items-center justify-center p-8 shadow-lg border border-gray-100">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10 duration-500"></div>
                  <Image
                    src="/images/37_bourgogne-blanc-h.jpg"
                    alt="Bourgogne Blanc Chardonnay"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                  />
                  {/* Badge "Coup de coeur" exemple */}
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Best Seller
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-gray-900 group-hover:text-red-900 transition-colors">Bourgogne Blanc</h3>
                  <div className="h-[1px] w-10 bg-gray-300 mx-auto my-4 group-hover:bg-red-900 transition-colors"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Chardonnay</p>
                </div>
              </Link>
            </FadeIn>

            {/* Carte 3 : Rosé / Pétillant */}
            <FadeIn delay={0.5} className="group cursor-pointer">
              <Link href="/nos-vins">
                <div className="relative h-[500px] overflow-hidden mb-8 bg-gray-50 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10 duration-500"></div>
                  <Image
                    src="/images/32_petillan-h.jpg"
                    alt="Pétillant Rosé"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-serif text-gray-900 group-hover:text-red-900 transition-colors">Pétillant & Rosé</h3>
                  <div className="h-[1px] w-10 bg-gray-300 mx-auto my-4 group-hover:bg-red-900 transition-colors"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Plaisir d'été</p>
                </div>
              </Link>
            </FadeIn>

          </div>

          <div className="mt-20 text-center">
            <Link
              href="/nos-vins"
              className="inline-block px-12 py-4 border border-gray-900 text-gray-900 uppercase tracking-widest text-xs font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Voir toute la cave
            </Link>
          </div>
        </div>
      </section>

      {/* Note: Le Footer est géré globalement dans layout.tsx */}
    </main>
  );
}