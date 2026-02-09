import type { Metadata } from "next";
import VisiteContent from "./VisiteContent";


export const metadata: Metadata = {
    title: "Visite & Accès | Domaine de Garanches",
    description: "Venez nous rendre visite à Odenas. Dégustation, vente directe et découverte du vignoble.",
};


export default function VisitePage() {
    return (
        <VisiteContent />
    );
}
