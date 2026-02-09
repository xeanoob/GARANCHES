"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch({ className = "", light = false }: { className?: string; light?: boolean }) {
    const { language, setLanguage } = useLanguage();

    // light = true means we want light text (for dark backgrounds)
    // light = false means we want dark text (for light backgrounds)
    // However, the Navbar logic is complex with 'useDarkText'.
    // We'll let the parent pass the correct text color class or handle it via 'light' prop.

    return (
        <div className={`flex items-center gap-2 text-xs font-bold tracking-widest ${className}`}>
            <button
                onClick={() => setLanguage('fr')}
                className={`transition-colors uppercase ${language === 'fr' ? 'border-b border-current' : 'opacity-50 hover:opacity-100'}`}
            >
                FR
            </button>
            <span className="opacity-30">|</span>
            <button
                onClick={() => setLanguage('en')}
                className={`transition-colors uppercase ${language === 'en' ? 'border-b border-current' : 'opacity-50 hover:opacity-100'}`}
            >
                EN
            </button>
        </div>
    );
}
