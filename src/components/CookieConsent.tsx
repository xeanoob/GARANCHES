"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // On vérifie si l'utilisateur a déjà fait un choix
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Petit délai pour ne pas agresser l'utilisateur dès l'arrivée
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
        // Ici, on pourrait déclencher le chargement de Google Analytics par exemple
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-[200] md:max-w-md"
                >
                    <div className="bg-white p-6 rounded-lg shadow-2xl border border-gray-100 relative overflow-hidden">
                        {/* Décoration d'arrière-plan */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-50 rounded-full -mr-10 -mt-10 opacity-50 z-0"></div>

                        <div className="relative z-10">
                            <h3 className="text-wine-900 font-serif font-bold text-lg mb-2">
                                🍪 Un petit biscuit pour la route ?
                            </h3>
                            <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                                Nous utilisons des cookies pour assurer le bon fonctionnement du site (panier, âge) et mesurer notre audience afin de mieux vous servir.
                            </p>

                            <div className="flex gap-3 justify-end">
                                <button
                                    onClick={handleDecline}
                                    className="text-xs font-bold text-gray-400 hover:text-wine-900 uppercase tracking-widest transition-colors px-4 py-2"
                                >
                                    Continuer sans accepter
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="bg-wine-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-wine-800 transition-colors shadow-md hover:shadow-lg"
                                >
                                    J'accepte
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
