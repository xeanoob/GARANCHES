"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { scrollY } = useScroll();

    const isHome = pathname === "/";

    const [isNavVisible, setIsNavVisible] = useState(!isHome);

    useEffect(() => {
        if (isHome) {
            const timer = setTimeout(() => {
                setIsNavVisible(true);
            }, 2300);
            return () => clearTimeout(timer);
        } else {
            setIsNavVisible(true);
        }
    }, [isHome]);


    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // La barre est solide (fond blanc) si on scroll OU si on n'est pas sur l'accueil
    const isNavSolid = isScrolled || !isHome;

    // Couleur de base pour les éléments hors liens (Burger, Panier...)
    const baseTextColor = isNavSolid ? "text-gray-800" : "text-white";

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{
                opacity: isNavVisible ? 1 : 0,
                y: isNavVisible ? 0 : -20
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-[200] transition-colors duration-500 ${isNavSolid ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-6"
                }`}
        >

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">

                    {/* --- LOGO --- */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                        <div className={`relative transition-all duration-500 overflow-hidden rounded-full border border-gold-500/30 ${isNavSolid ? "h-10 w-10" : "h-14 w-14"}`}>
                            <Image src="/images/17_logo.png" alt="Logo" fill className="object-cover" />
                        </div>
                        <span className={`font-serif font-bold uppercase tracking-widest transition-colors duration-300 ${isNavSolid ? "text-wine-900 text-lg" : "text-white text-xl drop-shadow-md"
                            }`}>
                            Garanches
                        </span>
                    </Link>

                    {/* --- MENU DESKTOP --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Accueil', path: '/' },
                            { name: 'Nos Vins', path: '/nos-vins' },
                            { name: 'Histoire', path: '/notre-histoire' },
                            { name: 'Visite', path: '/visite' },
                            { name: 'Contact', path: '/contact' },
                        ].map((link) => {
                            const isActive = pathname === link.path;

                            // LOGIQUE DE COULEUR CORRIGÉE :
                            let linkColorClass = "";

                            if (!isNavSolid) {
                                // Cas 1 : Sur l'accueil transparent -> TOUT LE MONDE EN BLANC
                                // L'actif a juste une petite bordure en dessous pour se distinguer
                                linkColorClass = isActive ? "text-white border-b border-white" : "text-white/80 hover:text-white";
                            } else {
                                // Cas 2 : Sur fond blanc -> Actif en Rouge/Or, Inactif en Gris
                                linkColorClass = isActive ? "text-red-900 font-bold" : "text-gray-600 hover:text-red-900";
                            }

                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`uppercase text-xs font-bold tracking-[0.15em] transition-all ${linkColorClass}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* --- ACTION DROITE (PANIER + MOBILE) --- */}
                    <div className="flex items-center gap-6">

                        {/* Icône Panier */}
                        <Link href="/panier" className={`relative group ${baseTextColor} hover:text-amber-500 transition-colors`}>
                            <span className="sr-only">Panier</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            {/* Badge (exemple) */}
                            <span className="absolute -top-1 -right-2 bg-red-900 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
                        </Link>

                        {/* Bouton Mobile Burger */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className={`p-1 font-bold text-xs uppercase tracking-widest ${baseTextColor}`}>
                                {isOpen ? "X" : "MENU"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- MENU MOBILE PLEIN ÉCRAN --- */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 flex flex-col items-center gap-6 md:hidden h-screen overflow-y-auto pb-40"
                >
                    <Link href="/" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Accueil</Link>
                    <Link href="/nos-vins" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Nos Vins</Link>
                    <Link href="/notre-histoire" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Histoire</Link>
                    <Link href="/visite" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Visite</Link>
                    <Link href="/contact" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Contact</Link>
                    <Link href="/panier" onClick={closeMenu} className="px-8 py-3 bg-wine-900 text-white uppercase text-sm font-bold mt-4">
                        Voir mon panier
                    </Link>
                </motion.div>
            )}
        </motion.nav>
    );
}