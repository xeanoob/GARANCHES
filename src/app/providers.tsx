"use client";

import { CartProvider } from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </LanguageProvider>
    );
}
