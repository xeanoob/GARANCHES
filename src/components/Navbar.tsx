"use client"; // ⚠️ Indispensable pour l'interactivité (clic)

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    // État pour savoir si le menu est ouvert (true) ou fermé (false)
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour fermer le menu quand on clique sur un lien
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="text-2xl font-serif font-bold text-wine-900 tracking-tighter" onClick={closeMenu}>
                    DOMAINE DE GARANCHES
                </Link>

                {/* MENU ORDI (Caché sur mobile) */}
                <div className="hidden md:flex space-x-8 items-center font-sans text-sm uppercase tracking-widest font-semibold text-gray-600">
                    <Link href="/" className="hover:text-wine-700 transition-colors">Accueil</Link>
                    <Link href="/notre-histoire" className="hover:text-wine-700 transition-colors">Le Domaine</Link>
                    <Link href="/nos-vins" className="hover:text-wine-700 transition-colors">Nos Vins</Link>
                    <Link href="/contact" className="hover:text-wine-700 transition-colors">Contact</Link>
                    <Link href="/nos-vins" className="px-5 py-2 bg-wine-900 text-white rounded text-xs hover:bg-gold-500 transition-colors">
                        Boutique
                    </Link>
                </div>

                {/* BOUTON BURGER (Visible uniquement sur mobile) */}
                <button
                    className="md:hidden text-wine-900 p-2 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Icône Hamburger (3 traits) ou Croix (X) selon l'état */}
                    {isOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
            </div>

            {/* LE MENU MOBILE DÉROULANT */}
            {/* On l'affiche seulement si isOpen est vrai */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-8 px-6 flex flex-col space-y-6 animate-in slide-in-from-top-5 duration-200">
                    <Link href="/" onClick={closeMenu} className="text-xl font-serif text-wine-900 border-b border-gray-50 pb-2">
                        Accueil
                    </Link>
                    <Link href="/notre-histoire" onClick={closeMenu} className="text-xl font-serif text-wine-900 border-b border-gray-50 pb-2">
                        Le Domaine
                    </Link>
                    <Link href="/nos-vins" onClick={closeMenu} className="text-xl font-serif text-wine-900 border-b border-gray-50 pb-2">
                        Nos Vins
                    </Link>
                    <Link href="/contact" onClick={closeMenu} className="text-xl font-serif text-wine-900 border-b border-gray-50 pb-2">
                        Contact & Accès
                    </Link>
                    <Link href="/nos-vins" onClick={closeMenu} className="inline-block text-center py-3 bg-wine-900 text-white font-bold uppercase tracking-widest text-sm rounded-sm">
                        Accéder à la Boutique
                    </Link>
                </div>
            )}
        </nav>
    );
}