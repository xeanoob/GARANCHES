"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import ParallaxImage from "@/components/ParallaxImage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // On utilise un état pour savoir si la fenêtre est montée (pour éviter les bugs de calcul serveur)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    // Fonction pour lancer l'animation et marquer comme "vue"
    const startAnimation = (delay = 2000) => {
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
        sessionStorage.setItem("intro-played", "true");
      }, delay);
      return () => clearTimeout(timer);
    };

    // 1. A-t-on déjà vu l'intro dans cette session ? (Navigation interne)
    const hasPlayedIntro = sessionStorage.getItem("intro-played");

    if (hasPlayedIntro) {
      // OUI -> On affiche direct sans animation
      setIsLoading(false);
      document.body.style.overflow = "unset";
      return;
    }

    // 2. Sinon, vérification de l'âge (Premier chargement)
    const hasConfirmed = localStorage.getItem("age-confirmed");

    if (hasConfirmed) {
      // Déjà majeur -> Animation classique
      startAnimation();
    } else {
      // Pas encore majeur -> On attend le AgeGate
      const handleAgeConfirmed = () => {
        startAnimation(500);
      };

      window.addEventListener("age-gate-confirmed", handleAgeConfirmed);

      return () => {
        window.removeEventListener("age-gate-confirmed", handleAgeConfirmed);
      };
    }
  }, []);

  // Variantes pour contrôler l'animation précise du titre
  // Variantes pour contrôler l'animation précise du titre
  const titleVariants = {
    loading: {
      color: "#7f1d1d", // Rouge vin
      scale: 1.1,       // Un peu plus gros (ajusté)
      y: 0,             // Reste centré !
      opacity: 1
    },
    loaded: {
      color: "#ffffff", // Blanc pur
      scale: 1,         // Taille normale
      y: 0,             // Place d'origine
      opacity: 1
    }
  };


  return (
    <main className="min-h-screen text-gray-800 font-sans selection:bg-red-900 selection:text-white">

      {/* --- FOND BLANC (Cache le fond sombre, disparaît en fondu) --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="white-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-[#FAFAFA]"
          />
        )}
      </AnimatePresence>

      {/* --- SECTION HÉROS --- */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">

        {/* Image de fond (Apparaît sous le blanc) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/34_slide001.jpg"
            alt="Vignes"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Contenu textuel - Ajustement du padding pour remonter le tout */}
        <div className="relative text-center px-4 max-w-7xl mx-auto flex flex-col items-center pt-20 md:pt-24">



          {/* --- LE TITRE UNIQUE --- */}
          {/* Il est toujours 'relative'. On change juste son Y et sa COULEUR via Framer. */}
          {mounted && (
            <motion.h1
              initial="loading"
              animate={isLoading ? "loading" : "loaded"}
              variants={titleVariants}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1] // Courbe "Luxe" très fluide
              }}
              className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-center relative z-[70]"

            >
              Domaine de <br />
              <span className="italic">Garanches</span>
            </motion.h1>
          )}

          {/* Sous-titre : Déplacé sous le titre pour un meilleur rendu */}
          <motion.div
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 1, delay: 1.6 }} // Apparaît APRÈS que le fond blanc soit parti

            className="mb-8 mt-4"
          >
            <span className="uppercase tracking-[0.3em] text-[10px] md:text-sm text-amber-400 font-bold block">
              Depuis 1788 — Odenas
            </span>
          </motion.div>

          {/* Reste du contenu : On le cache aussi avec l'opacité pour ne pas gêner le mouvement */}
          <motion.div
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 1, delay: 1.9 }}

            className="mt-4 flex flex-col items-center"
          >
            <div className="w-16 h-0.5 md:w-24 md:h-1 bg-amber-500 mb-6"></div>

            <p className="text-sm md:text-lg font-light max-w-xl mb-8 text-gray-100 leading-relaxed px-2 text-white">
              Au cœur du Beaujolais, au pied du Mont Brouilly, découvrez l'élégance d'un savoir-faire familial séculaire.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center w-full">
              <Link
                href="/nos-vins"
                className="w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 bg-red-900/90 hover:bg-red-800 text-white uppercase tracking-widest text-[10px] md:text-xs font-bold transition-all border border-red-900 hover:scale-105 duration-300"
              >
                Découvrir nos vins
              </Link>
              <Link
                href="/visite"
                className="w-full sm:w-auto px-6 py-3 md:px-10 md:py-4 bg-transparent hover:bg-white/10 text-white uppercase tracking-widest text-[10px] md:text-xs font-bold transition-all border border-white hover:scale-105 duration-300"
              >
                Venir au domaine
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- LE RESTE DU SITE (INCHANGÉ) --- */}
      <section className="py-20 md:py-32 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn direction="right">
            <div>
              <span className="text-amber-600 font-serif italic text-xl md:text-2xl mb-2 block">Notre Philosophie</span>
              <h2 className="text-4xl md:text-5xl font-serif text-red-900 mb-6 md:mb-8 leading-tight">Un Terroir <br />d'Exception</h2>
              <p className="text-gray-600 leading-loose text-base md:text-lg font-light mb-8 text-justify">
                Le Domaine de Garanches s'étend sur 14 hectares de vignes exposées sud-est.
                Nos sols granitiques confèrent au Gamay une expression unique.
              </p>
              <Link href="/notre-histoire" className="group inline-flex items-center text-red-900 uppercase text-xs font-bold tracking-widest hover:text-amber-600 transition-colors">
                <span className="border-b border-red-900 pb-1 group-hover:border-amber-600">Lire notre histoire</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <ParallaxImage
              src="/images/23_slide002.jpg"
              alt="Vignes du domaine en été"
              className="h-[400px] md:h-[600px] w-full shadow-2xl rounded-sm"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <FadeIn direction="down">
              <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-4 block">Boutique en ligne</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">Nos Grandes Cuvées</h2>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <FadeIn delay={0.1} className="group cursor-pointer">
              <Link href="/nos-vins">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-8 bg-gray-50 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10 duration-500"></div>
                  <Image src="/images/36_brouilly-h.jpg" alt="Brouilly" fill className="object-contain transition-transform duration-700 group-hover:scale-110 p-4" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 group-hover:text-red-900 transition-colors">Brouilly</h3>
                  <div className="h-[1px] w-10 bg-gray-300 mx-auto my-4 group-hover:bg-red-900 transition-colors"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Cru du Beaujolais</p>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3} className="group cursor-pointer md:-mt-12">
              <Link href="/nos-vins">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-8 bg-gray-50 flex items-center justify-center p-8 shadow-lg border border-gray-100">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10 duration-500"></div>
                  <Image src="/images/37_bourgogne-blanc-h.jpg" alt="Bourgogne Blanc" fill className="object-contain transition-transform duration-700 group-hover:scale-110 p-4" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 group-hover:text-red-900 transition-colors">Bourgogne Blanc</h3>
                  <div className="h-[1px] w-10 bg-gray-300 mx-auto my-4 group-hover:bg-red-900 transition-colors"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Chardonnay</p>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.5} className="group cursor-pointer">
              <Link href="/nos-vins">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden mb-8 bg-gray-50 flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10 duration-500"></div>
                  <Image src="/images/32_petillan-h.jpg" alt="Pétillant" fill className="object-contain transition-transform duration-700 group-hover:scale-110 p-4" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 group-hover:text-red-900 transition-colors">Pétillant & Rosé</h3>
                  <div className="h-[1px] w-10 bg-gray-300 mx-auto my-4 group-hover:bg-red-900 transition-colors"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Plaisir d'été</p>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}