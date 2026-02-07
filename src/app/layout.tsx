import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import AgeGate from "@/components/AgeGate";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import { CartProvider } from "@/context/CartContext"; // 1. On ajoute l'import

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

// --- CONFIGURATION SEO ---
export const metadata: Metadata = {
  metadataBase: new URL('https://domainedegaranches.com'),
  title: {
    default: "Domaine de Garanches | Vins de Brouilly & Bourgogne Blanc - Odenas",
    template: "%s | Domaine de Garanches"
  },
  description: "Domaine viticole historique à Odenas depuis 1788. Vins de Brouilly, Côte de Brouilly et Bourgogne Blanc par Romain Martinache & Aurélie Crozet. Dégustation et vente directe.",
  keywords: ["Brouilly", "Côte de Brouilly", "Bourgogne Blanc", "Odenas", "Domaine de Garanches", "Romain Martinache", "Aurélie Crozet", "Gamay", "Chardonnay", "Vente vin Beaujolais", "Dégustation Odenas"],
  authors: [{ name: "Domaine de Garanches" }],
  creator: "Domaine de Garanches",
  publisher: "Domaine de Garanches",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Domaine de Garanches - L'Excellence du Brouilly",
    description: "Une histoire de famille depuis 1788. Commandez nos vins en ligne ou venez nous rendre visite au pied du Mont Brouilly.",
    url: "https://domainedegaranches.com",
    siteName: "Domaine de Garanches",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/34_slide001.jpg",
        width: 1200,
        height: 630,
        alt: "Vignes du Domaine de Garanches au Mont Brouilly",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// --- DONNÉES STRUCTURÉES (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Winery",
  "name": "Domaine de Garanches",
  "image": "https://domainedegaranches.com/images/34_slide001.jpg",
  "url": "https://domainedegaranches.com",
  "telephone": "+33474034480",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "345 chemin de Garanches",
    "addressLocality": "Odenas",
    "postalCode": "69460",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.082958,
    "longitude": 4.661828
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/domainedegaranches",
    "https://www.instagram.com/domainedegaranches"
  ],
  "mainEntity": {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Où se situe le Domaine de Garanches ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le Domaine de Garanches est situé au 345 chemin de Garanches à Odenas (69460), au pied du Mont Brouilly dans le Beaujolais."
        }
      },
      {
        "@type": "Question",
        "name": "Quels types de vins produisez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous produisons principalement des crus du Beaujolais (Brouilly, Côte de Brouilly) ainsi que du Bourgogne Blanc (Chardonnay) et du vin pétillant méthode traditionnelle."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous des visites et dégustations ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous accueillons les visiteurs pour des dégustations et des visites du domaine. Nous vous recommandons de nous contacter à l'avance pour une meilleure expérience."
        }
      },
      {
        "@type": "Question",
        "name": "Comment commander vos vins ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vous pouvez commander nos vins directement sur notre boutique en ligne avec paiement sécurisé. Nous expédions dans toute la France."
        }
      }
    ]
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasConfirmed = cookieStore.get("age-confirmed")?.value === "true";

  return (
    <html lang="fr" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="bg-white text-stone-900 antialiased overflow-x-hidden selection:bg-wine-900 selection:text-white">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="bg-noise opacity-20"></div>

        {/* 2. On enveloppe tout le contenu avec le CartProvider */}
        <CartProvider>
          <CustomCursor />
          <AgeGate initialShow={!hasConfirmed} />
          <SmoothScroll />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </CartProvider>

        {/* Le SDK SumUp est déjà là, c'est parfait */}
        <script src="https://gateway.sumup.com/gateway/ecom/card/v1.0/sdk.js"></script>
      </body>
    </html>
  );
}