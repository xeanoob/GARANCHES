import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-900 text-white pt-12 pb-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Colonne 1 : Le Domaine */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4 uppercase tracking-wider text-amber-500">Domaine de Garanches</h3>
                        <p className="text-stone-300 text-sm leading-relaxed">
                            Vignoble familial produisant des vins d'exception.<br />
                            Brouilly, Bourgogne Blanc, Rosé & Pétillant.
                        </p>
                    </div>

                    {/* Colonne 2 : Contact Rapide */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4 uppercase tracking-wider text-amber-500">Nous trouver</h3>
                        <p className="text-stone-300 text-sm leading-relaxed">
                            145 Rue des Garanches<br />
                            71570 La Chapelle-de-Guinchay<br />
                            France
                        </p>
                        <p className="mt-4">
                            <a href="mailto:contact@domainedegaranches.com" className="text-stone-300 hover:text-white underline">
                                contact@domainedegaranches.com
                            </a>
                        </p>
                    </div>

                    {/* Colonne 3 : Liens */}
                    <div>
                        <h3 className="font-serif text-lg font-bold mb-4 uppercase tracking-wider text-amber-500">Navigation</h3>
                        <ul className="space-y-2 text-sm text-stone-300">
                            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                            <li><Link href="/nos-vins" className="hover:text-white">Nos Vins</Link></li>
                            <li><Link href="/visite" className="hover:text-white">Tourisme</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-800 mt-10 pt-6 text-center">
                    <p className="text-stone-500 text-xs">
                        &copy; {currentYear} Domaine de Garanches. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.
                    </p>
                </div>
            </div>
        </footer>
    );
}