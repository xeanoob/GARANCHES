"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
    images: { src: string; alt: string }[];
    className?: string;
}

export default function Lightbox({ images, className = "" }: LightboxProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const goNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    const goPrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <>
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="relative h-48 md:h-64 cursor-pointer overflow-hidden rounded-lg group"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-4 md:left-8 text-white text-4xl hover:text-amber-500 transition-colors z-10"
                            aria-label="Image précédente"
                        >
                            ‹
                        </button>

                        <motion.div
                            key={selectedIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].alt}
                                fill
                                className="object-contain"
                                quality={90}
                            />
                        </motion.div>

                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-4 md:right-8 text-white text-4xl hover:text-amber-500 transition-colors z-10"
                            aria-label="Image suivante"
                        >
                            ›
                        </button>

                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-3xl hover:text-amber-500 transition-colors"
                            aria-label="Fermer"
                        >
                            ×
                        </button>

                        <div className="absolute bottom-4 text-white text-sm">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
