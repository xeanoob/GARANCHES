import Image from "next/image";
import Link from "next/link";
import data from "@/data/domaine_content.json";

// Récupération des données du JSON
const getPageData = (path: string) => {
  return data.find((p) => p.url.includes(path)) || data[0];
};

export default function Home() {
  const homeData = getPageData("domainedegaranches.com/");

  // --- CONFIGURATION DES IMAGES CORRIGÉE ---
  // Bannière : Paysage de vignes
  const heroImageSrc = "/images/23_slide002.jpg";

  // Les bouteilles (Noms exacts issus de votre dossier)
  const imgBrouilly = "/images/36_brouilly-h.jpg";
  const imgBourgogne = "/images/37_bourgogne-blanc-h.jpg";

  return (
    <main className="min-h-screen text-gray-800 font-sans selection:bg-wine-700 selection:text-white">

      {/* --- HERO SECTION (PREMIUM) --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={heroImageSrc}
            alt="Vignes du Domaine de Garanches"
            className="w-full h-full object-cover opacity-90"
          />
          {/* Dégradé sophistiqué pour lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm font-light mb-4 text-gold-500">
            Depuis 1788 — Odenas, Beaujolais
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
            Domaine de<br />
            <span className="italic">Garanches</span>
          </h1>
          <div className="w-24 h-[1px] bg-gold-500 my-6"></div>
          <p className="text-lg md:text-xl font-light max-w-lg leading-relaxed text-gray-100">
            L'élégance du terroir de Brouilly, <br />transmise de génération en génération.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6">
            <Link href="/nos-vins" className="group relative px-8 py-3 border border-white/30 bg-white/5 hover:bg-wine-700 hover:border-wine-700 transition-all duration-500">
              <span className="uppercase tracking-widest text-xs font-bold">Découvrir nos vins</span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SECTION HISTOIRE (ÉPURÉE) --- */}
      <section className="py-32 px-6 bg-paper relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-wine-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">L'Héritage</h2>
          <p className="text-4xl md:text-5xl font-serif text-gray-900 mb-10 leading-tight">
            "Avant d'acheter un vin, il est bon de connaître son histoire."
          </p>
          <div className="prose prose-lg mx-auto text-gray-600 font-light leading-loose">
            <p>{homeData.contenu.substring(0, 350)}...</p>
          </div>
          <Link href="/notre-histoire" className="inline-block mt-12 text-wine-700 border-b border-wine-700/30 pb-1 hover:border-wine-700 transition-colors uppercase text-xs tracking-widest font-bold">
            Lire l'histoire complète
          </Link>
        </div>
      </section>

      {/* --- SECTION VINS (STYLE MAGAZINE) --- */}
      <section className="py-32 bg-wine-100/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16 border-b border-wine-900/10 pb-6">
            <div>
              <span className="text-gold-500 font-serif italic text-xl">Notre Collection</span>
              <h2 className="text-4xl font-serif text-wine-900 mt-2">Vins à la vente</h2>
            </div>
            <Link href="/nos-vins" className="hidden md:block text-xs uppercase tracking-widest text-gray-500 hover:text-wine-700 transition-colors">
              Voir toute la boutique →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">

            {/* CARTE 1 : BROUILLY */}
            <div className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-gray-100 p-8 flex items-center justify-center">
                {/* Image en mode "contain" pour voir la bouteille entière proprement */}
                <img
                  src={imgBrouilly}
                  alt="Brouilly"
                  className="h-full w-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="mt-8 text-center md:text-left">
                <h3 className="text-3xl font-serif text-wine-900 group-hover:text-gold-500 transition-colors">Brouilly</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Cru du Beaujolais — Gamay</p>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Notes de fleurs et de fruits : rose, violette, framboise et cassis. Une structure qui garantit une belle garde.
                </p>
                <div className="mt-6">
                  <span className="text-wine-700 font-bold">12,00 €</span>
                  <span className="text-xs text-gray-400 ml-2">/ Bouteille</span>
                </div>
              </div>
            </div>

            {/* CARTE 2 : BOURGOGNE BLANC */}
            <div className="group md:mt-24">
              <div className="relative aspect-[4/5] overflow-hidden bg-white shadow-sm border border-gray-100 p-8 flex items-center justify-center">
                <img
                  src={imgBourgogne}
                  alt="Bourgogne Blanc"
                  className="h-full w-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="mt-8 text-center md:text-left">
                <h3 className="text-3xl font-serif text-wine-900 group-hover:text-gold-500 transition-colors">Bourgogne Blanc</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Chardonnay — Élégance</p>
                <p className="mt-4 text-gray-600 font-light leading-relaxed">
                  Développe une palette aromatique fraîche et fruitée. Arômes de poire, de pomme et fleurs blanches.
                </p>
                <div className="mt-6">
                  <span className="text-wine-700 font-bold">10,50 €</span>
                  <span className="text-xs text-gray-400 ml-2">/ Bouteille</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}