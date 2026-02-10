import { Metadata } from "next";
import { getSumUpProducts } from "@/lib/sumup";
import { PRODUCTS } from "@/data/products";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  description: "Domaine viticole historique à Odenas depuis 1788. Vins de Brouilly et Bourgogne Blanc par Romain Martinache & Aurélie Crozet. Dégustation et vente directe au pied du Mont Brouilly.",
};

export default async function Home() {
  // Récupération des produits (SumUp ou Fallback)
  // Cela garantit que si un token SumUp est présent, ce sont bien ces produits qui sont affichés.
  const sumupProducts = await getSumUpProducts();
  const products = sumupProducts && sumupProducts.length > 0 ? sumupProducts : PRODUCTS;

  return <HomePageClient products={products} />;
}
