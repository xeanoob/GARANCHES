"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simule un temps de chargement ou attend que la page soit prête
        const timer = setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 2000); // 2 secondes d'intro

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[999] bg-stone-100 flex items-center justify-center"
                >
                    <div className="text-center overflow-hidden">
                        <motion.h1
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-wine-900 font-serif text-4xl md:text-6xl"
                        >
                            Domaine de Garanches
                        </motion.h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                            className="h-0.5 bg-gold-500 mt-4 mx-auto max-w-[200px]"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}