import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Composants de base
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Améliorations visuelles (Assure-toi d'avoir créé ces fichiers !)
import SmoothScroll from "@/components/SmoothScroll";
import AgeGate from "@/components/AgeGate";
import CustomCursor from "@/components/CustomCursor";

// Configuration des polices
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Domaine de Garanches | Vins de Brouilly",
  description: "Créateur de Brouilly depuis 1788. Vente directe de vins du Beaujolais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-gray-800 flex flex-col min-h-screen overflow-x-hidden">

        {/* --- FONCTIONNALITÉS UX --- */}
        <SmoothScroll />      {/* Défilement fluide */}
        <AgeGate />           {/* Vérification âge */}
        <CustomCursor />      {/* Curseur personnalisé (Desktop) */}

        {/* --- TEXTURE --- */}
        {/* Ajoute un grain subtil sur tout le site (voir globals.css) */}
        <div className="bg-noise fixed inset-0 z-40 pointer-events-none opacity-[0.03]"></div>

        {/* --- STRUCTURE DU SITE --- */}
        <Navbar />

        {/* Le contenu principal pousse le footer vers le bas */}
        <div className="flex-grow">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}