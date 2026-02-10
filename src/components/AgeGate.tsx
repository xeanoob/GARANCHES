"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AgeGateProps {
    initialShow: boolean;
}

export default function AgeGate({ initialShow }: AgeGateProps) {
    // On se base sur ce que le serveur nous dit (Cookie)
    // Plus besoin de "true" par défaut car 'initialShow' est déjà calculé côté serveur
    const [isVisible, setIsVisible] = useState(initialShow);

    useEffect(() => {
        // En cas de navigation client ou si le cookie n'était pas là, on vérifie quand même le localStorage en backup
        const hasConfirmed = localStorage.getItem("age-confirmed");

        // Si le serveur a dit "Affiche" (initialShow = true) mais que le client a "confirmé" en localStorage
        // On peut décider de fermer. Mais pour éviter le flash, l'important est 'initialShow'.
        // Ici on gère juste le bloquage du scroll.
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Nettoyage au démontage du composant
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isVisible]);

    const handleConfirm = () => {
        // 1. Cookie (pour le serveur au prochain chargement)
        document.cookie = "age-confirmed=true; path=/; max-age=31536000; SameSite=Lax";

        // 2. LocalStorage (backup et synchro legacy)
        localStorage.setItem("age-confirmed", "true");

        // 3. Event (pour l'animation de la Home)
        window.dispatchEvent(new Event("age-gate-confirmed"));

        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }} // On commence direct à 100% visible
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    // Z-INDEX 2000 = Tout en haut
                    className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#1c1917] px-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="age-gate-title"
                >
                    <div className="text-center max-w-md relative z-10">
                        <div className="mb-8 relative h-24 w-24 mx-auto">
                            <Image src="/images/17_logo.png" alt="Logo" fill className="object-contain opacity-80" priority />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <h2 id="age-gate-title" className="text-3xl font-serif text-white mb-2">Bienvenue au Domaine</h2>
                            <div className="w-16 h-px bg-amber-500 mx-auto mb-6"></div>

                            <p className="text-stone-300 mb-10 font-light leading-relaxed">
                                L'accès à ce site est réservé aux personnes majeures.
                            </p>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleConfirm}
                                    className="pointer-events-auto cursor-pointer w-full py-4 bg-white text-stone-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-amber-500 transition-colors duration-300 relative z-50"
                                >
                                    J'ai l'âge légal
                                </button>
                                <a
                                    href="https://www.google.com"
                                    className="pointer-events-auto cursor-pointer text-stone-500 text-xs uppercase tracking-widest hover:text-white transition-colors mt-4 relative z-50"
                                >
                                    Quitter le site
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
