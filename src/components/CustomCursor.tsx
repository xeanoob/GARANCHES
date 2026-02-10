"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        // Détection tactile
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouch(true);
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Détection améliorée des éléments interactifs
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") !== null ||
                target.closest("button") !== null ||
                target.classList.contains("cursor-pointer");

            setIsHovering(isInteractive);
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (isTouch) return null;

    return (
        <>

            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />


            <motion.div
                className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] hidden md:block mix-blend-difference transition-[border-color,background-color] duration-200 ${isHovering ? 'bg-white/10 border border-transparent' : 'bg-transparent border border-white'}`}
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    scale: { duration: 0.2 }
                }}
            />
        </>
    );
}
