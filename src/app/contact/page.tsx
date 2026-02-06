import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact & Accès | Domaine de Garanches",
    description: "Contactez le Domaine de Garanches à Odenas. Vente directe, dégustation et expédition de vins du Beaujolais.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-paper pt-32 pb-20">

            {/* --- EN-TÊTE --- */}
            <div className="text-center px-6 mb-16">
                <h1 className="text-5xl font-serif text-wine-900 mb-6">Nous Contacter</h1>
                <p className="max-w-xl mx-auto text-gray-600 font-light">
                    Pour toute commande, demande de tarif ou pour organiser une visite au domaine,
                    n'hésitez pas à nous laisser un message.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

                {/* --- COLONNE GAUCHE : COORDONNÉES --- */}
                <div className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm">
                    <h2 className="text-2xl font-serif text-wine-900 mb-8">Nos Coordonnées</h2>

                    <div className="space-y-8">
                        <div>
                            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold block mb-2">Adresse</span>
                            <p className="text-gray-700 leading-relaxed">
                                Domaine de Garanches<br />
                                345 chemin de Garanches<br />
                                69460 Odenas<br />
                                France
                            </p>
                        </div>

                        <div>
                            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold block mb-2">Téléphone</span>
                            <p className="text-gray-700 hover:text-wine-700 transition-colors">
                                <a href="tel:+33474034480">04 74 03 44 80</a>
                            </p>
                        </div>

                        <div>
                            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold block mb-2">Horaires</span>
                            <p className="text-gray-700 leading-relaxed">
                                Nous vous accueillons au caveau sur rendez-vous.<br />
                                <span className="text-sm text-gray-500 italic">Fermé le dimanche.</span>
                            </p>
                        </div>

                        {/* Image d'ambiance (Cave / Fûts) */}
                        <div className="mt-8 h-48 w-full relative overflow-hidden rounded-sm">
                            <img
                                src="/images/34_slide001.jpg"
                                alt="Chai du domaine"
                                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* --- COLONNE DROITE : FORMULAIRE --- */}
                <div className="bg-wine-100/30 p-10 rounded-sm">
                    <h2 className="text-2xl font-serif text-wine-900 mb-8">Envoyer un message</h2>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Nom</label>
                                <input type="text" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-wine-700 transition-colors" />
                            </div>
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                                <input type="email" className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-wine-700 transition-colors" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Sujet</label>
                            <select className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-wine-700 transition-colors text-gray-700">
                                <option>Je souhaite passer commande</option>
                                <option>Demande de tarifs d'expédition</option>
                                <option>Visite / Dégustation</option>
                                <option>Autre demande</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                            <textarea rows={5} className="w-full bg-white border border-gray-200 p-3 focus:outline-none focus:border-wine-700 transition-colors"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-wine-900 text-white py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-colors">
                            Envoyer ma demande
                        </button>

                        <p className="text-xs text-gray-400 text-center mt-4">
                            Ce formulaire est une démonstration visuelle pour l'instant.
                        </p>
                    </form>
                </div>

            </div>
        </main>
    );
}