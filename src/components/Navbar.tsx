"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    // Détecte si on a scrollé plus de 50px
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                        <div className={`relative transition-all duration-500 overflow-hidden rounded-full border border-gold-500/30 ${isScrolled ? "h-10 w-10" : "h-14 w-14"}`}>
                            <Image src="/images/17_logo.png" alt="Logo" fill className="object-cover" />
                        </div>
                        <span className={`font-serif font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? "text-wine-900 text-lg" : "text-white text-xl drop-shadow-md"
                            }`}>
                            Garanches
                        </span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Accueil', path: '/' },
                            { name: 'Nos Vins', path: '/nos-vins' },
                            { name: 'Histoire', path: '/notre-histoire' },
                            { name: 'Visite', path: '/visite' },
                            { name: 'Contact', path: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`uppercase text-xs font-bold tracking-[0.15em] hover:text-gold-500 transition-colors ${isScrolled ? "text-gray-600" : "text-white/90 drop-shadow-sm"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Bouton Mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className={`p-2 ${isScrolled ? "text-wine-900" : "text-white"}`}>
                            {isOpen ? "FERMER" : "MENU"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile Plein Écran Animé */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
                >
                    <Link href="/" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Accueil</Link>
                    <Link href="/nos-vins" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Nos Vins</Link>
                    <Link href="/visite" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Visite</Link>
                    <Link href="/contact" onClick={closeMenu} className="text-wine-900 font-serif text-xl">Contact</Link>
                </motion.div>
            )}
        </motion.nav>
    );
}