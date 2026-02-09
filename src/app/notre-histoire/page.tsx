import { Metadata } from "next";
import HistoryContent from "./HistoryContent";

export const metadata: Metadata = {
    title: "Notre Histoire | Domaine de Garanches - Depuis 1788",
    description: "Plongez dans l'histoire du Domaine de Garanches à Odenas. Une tradition viticole familiale perpétuée depuis le XVIIIe siècle au pied du Mont Brouilly par la famille Bender, reprise par Romain & Aurélie.",
};

export default function HistoirePage() {
    return (
        <HistoryContent />
    );
}
