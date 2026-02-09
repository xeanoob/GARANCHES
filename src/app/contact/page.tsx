import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact & Accès | Domaine de Garanches",
    description: "Contactez le Domaine de Garanches à Odenas. Vente directe, dégustation et expédition de vins du Beaujolais.",
};

export default function ContactPage() {
    return (
        <ContactContent />
    );
}
