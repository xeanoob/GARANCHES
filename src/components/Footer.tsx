import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-wine-900 text-white/80 py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">

                {/* Colonne 1 : Adresse */}
                <div>
                    <h4 className="font-serif text-2xl text-white mb-6">Domaine de Garanches</h4>
                    <p className="font-light text-sm leading-loose text-gray-300">
                        345 chemin de Garanches<br />
                        69460 Odenas — France<br />
                        +33 4 74 03 44 80
                    </p>
                </div>

                {/* Colonne 2 : Navigation */}
                <div className="flex flex-col items-center gap-4 text-sm uppercase tracking-widest font-semibold text-gray-400">
                    <Link href="/notre-histoire" className="hover:text-gold-500 transition-colors">Le Domaine</Link>
                    <Link href="/nos-vins" className="hover:text-gold-500 transition-colors">Nos Vins</Link>
                    <Link href="/visite" className="hover:text-gold-500 transition-colors">Visite & Dégustation</Link>
                </div>

                {/* Colonne 3 : Légal */}
                <div className="flex flex-col items-center gap-4 text-sm uppercase tracking-widest font-semibold text-gray-400">
                    <Link href="/contact" className="hover:text-gold-500 transition-colors">Contact</Link>
                    <Link href="/mentions-legales" className="hover:text-gold-500 transition-colors">Mentions légales</Link>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500 font-light">
                <p>&copy; {currentYear} Domaine de Garanches. L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</p>
            </div>
        </footer>
    );
}