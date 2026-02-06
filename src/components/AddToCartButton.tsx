"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

type Wine = {
    id: string;
    name: string;
    price: number;
    image: string;
    subtitle?: string;
    description?: string;
    tags?: string[];
};

import { motion, AnimatePresence } from "framer-motion";

export default function AddToCartButton({ wine }: { wine: Wine }) {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart({
            id: wine.id,
            name: wine.name,
            price: wine.price,
            image: wine.image,
            quantity: quantity
        });

        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => q > 1 ? q - 1 : 1);

    return (
        <div className="flex flex-col md:flex-row gap-4 mt-6">
            {/* Compteur de quantité */}
            {/* Compteur de quantité */}
            <div className="flex items-center border border-wine-900 w-fit rounded-full overflow-hidden shrink-0">
                <button
                    onClick={decrement}
                    className="px-4 py-3 text-wine-900 hover:bg-wine-50 transition-colors"
                >
                    -
                </button>
                <span className="px-2 py-3 font-serif min-w-[3rem] text-center text-wine-900 font-bold">
                    {quantity}
                </span>
                <button
                    onClick={increment}
                    className="px-4 py-3 text-wine-900 hover:bg-wine-50 transition-colors"
                >
                    +
                </button>
            </div>

            {/* Bouton d'ajout */}
            <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.95 }}
                className={`
                    relative overflow-hidden px-8 py-3 rounded-full
                    text-xs uppercase tracking-widest font-bold 
                    transition-colors duration-300 border border-wine-900
                    bg-wine-900 text-white hover:bg-white hover:text-wine-900
                `}
            >
                <AnimatePresence mode="wait">
                    {isAdded ? (
                        <motion.span
                            key="added"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            Ajouté
                        </motion.span>
                    ) : (
                        <motion.span
                            key="add"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                        >
                            Ajouter au panier
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
