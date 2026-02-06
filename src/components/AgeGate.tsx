"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AgeGate() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Vérifie si l'utilisateur a déjà confirmé son âge
        const hasConfirmed = localStorage.getItem("age-confirmed");
        if (!hasConfirmed) {
            setIsVisible(true);
            // Empêche le scroll quand la popup est là
            document.body.style.overflow = "hidden";
        }
    }, []);

    const handleConfirm = () => {
        localStorage.setItem("age-confirmed", "true");
        setIsVisible(false);
        document.body.style.overflow = "unset";
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-900/95 backdrop-blur-sm px-4"
                >
                    <div className="text-center max-w-md">
                        <div className="mb-8 relative h-24 w-24 mx-auto">
                            <Image src="/images/17_logo.png" alt="Logo" fill className="object-contain opacity-80" />
                        </div>

                        <h2 className="text-3xl font-serif text-white mb-2">Bienvenue au Domaine</h2>
                        <div className="w-16 h-px bg-gold-500 mx-auto mb-6"></div>

                        <p className="text-stone-300 mb-10 font-light leading-relaxed">
                            L'accès à ce site est réservé aux personnes majeures.
                            En entrant, vous confirmez avoir l'âge légal pour consommer de l'alcool dans votre pays.
                        </p>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleConfirm}
                                className="w-full py-4 bg-white text-wine-900 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold-500 transition-colors duration-300"
                            >
                                J'ai l'âge légal
                            </button>
                            <a
                                href="https://www.google.com"
                                className="text-stone-500 text-xs uppercase tracking-widest hover:text-white transition-colors mt-4"
                            >
                                Quitter le site
                            </a>
                        </div>

                        <p className="mt-8 text-[10px] text-stone-600 uppercase tracking-widest">
                            L'abus d'alcool est dangereux pour la santé
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}