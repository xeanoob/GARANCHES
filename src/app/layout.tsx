import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="font-sans antialiased bg-[#FAFAFA] text-gray-800">
        <Navbar />
        {children}
        <Footer /> {/* <--- C'est ici que je l'ai ajouté */}
      </body>
    </html>
  );
}