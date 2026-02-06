"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Props {
    src: string;
    alt: string;
    className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: Props) {
    const ref = useRef(null);

    // On mesure le scroll par rapport à cette image
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // L'image va bouger de -10% à +10% de sa hauteur pendant le scroll
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y, height: "120%" }} className="relative w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}