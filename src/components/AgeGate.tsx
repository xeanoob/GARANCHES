"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AgeGate() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConfirmed = localStorage.getItem("age-confirmed");
        if (!hasConfirmed) {
            setIsVisible(true);
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
                    // Z-INDEX 2000 = Tout en haut, au-dessus du Preloader
                    className="fixed inset-0 z-[2000] flex items-center justify-center bg-stone-900/98 px-4"
                >
                    <div className="text-center max-w-md relative z-10">
                        <div className="mb-8 relative h-24 w-24 mx-auto">
                            <Image src="/images/17_logo.png" alt="Logo" fill className="object-contain opacity-80" />
                        </div>

                        <h2 className="text-3xl font-serif text-white mb-2">Bienvenue au Domaine</h2>
                        <div className="w-16 h-px bg-amber-500 mx-auto mb-6"></div>

                        <p className="text-stone-300 mb-10 font-light leading-relaxed">
                            L'accès à ce site est réservé aux personnes majeures.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Ajout de 'pointer-events-auto' et 'cursor-pointer' pour forcer le clic */}
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
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}