"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

type Translations = {
    [key in Language]: {
        nav: {
            domaine: string;
            histoire: string;
            visite: string;
            contact: string;
            boutique: string;
            panier: string;
            mon_panier: string;
        };
        home: {
            subtitle: string;
            terroir_title: string;
            terroir_text: string;
            boutique_title: string;
            boutique_btn: string;
            shop_subtitle: string;
            view_all: string;
            philosophy: string;
            read_history: string;
        };
        footer: {
            legal: string;
            privacy: string;
            cgv: string;
            copyright: string;
        };
        history: {
            meta_title: string;
            meta_desc: string;
            title: string;
            subtitle: string;
            origins_title: string;
            origins_text_1: string;
            origins_text_2: string;
            today_title: string;
            today_text: string;
            team_title: string;
            team_subtitle: string;
        };
        visite: {
            meta_title: string;
            meta_desc: string;
            title: string;
            subtitle: string;
            intro: string;
            access_title: string;
            access_text: string; // HTML string potentially
            address_title: string;
            hours_title: string;
            hours_text: string;
            cta: string;
        };
        wines: {
            meta_title: string;
            meta_desc: string;
            title: string;
            subtitle: string;
            intro: string;
            question_title: string;
            question_text: string;
            contact_btn: string;
            soit: string;
            pregnant: string;
        };
        contact: {
            meta_title: string;
            meta_desc: string;
            title: string;
            subtitle: string;
            intro: string;
            coordinates_title: string;
            phone_title: string;
            hours_title: string;
            hours_text: string;
            sunday_closed: string;
            form_title: string;
            form_name: string;
            form_email: string;
            form_subject: string;
            form_message: string;
            form_submit: string;
            subjects: {
                order: string;
                shipping: string;
                visit: string;
                other: string;
            };
            demo_note: string;
        };
        common: {
            loading: string;
        };
    };
};

const translations: Translations = {
    fr: {
        nav: {
            domaine: "Le Domaine",
            histoire: "Notre Histoire",
            visite: "Visite & Dégustation",
            contact: "Contact",
            boutique: "Boutique",
            panier: "Panier",
            mon_panier: "Mon Panier",
        },
        home: {
            subtitle: "Vins de Brouilly & Bourgogne Blanc",
            terroir_title: "Un Terroir d'Exception",
            terroir_text: "Au cœur du Beaujolais, au pied du Mont Brouilly, découvrez l'élégance d'un savoir-faire familial séculaire.",
            boutique_title: "Nos Grandes Cuvées",
            boutique_btn: "Découvrir nos vins",
            shop_subtitle: "Boutique en ligne",
            view_all: "Voir toute la cave",
            philosophy: "Notre Philosophie",
            read_history: "Lire notre histoire",
        },
        footer: {
            legal: "Mentions légales",
            privacy: "Confidentialité",
            cgv: "CGV",
            copyright: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
        },
        history: {
            meta_title: "Notre Histoire | Domaine de Garanches - Depuis 1788",
            meta_desc: "Plongez dans l'histoire du Domaine de Garanches à Odenas. Une tradition viticole familiale perpétuée depuis le XVIIIe siècle.",
            title: "Une Histoire de Famille",
            subtitle: "Depuis 1788",
            origins_title: "Les Origines",
            origins_text_1: "L'histoire du Domaine de Garanches plonge ses racines au cœur du XVIIIe siècle. C'est en 1788, à la veille de la Révolution Française, que les premières pierres de notre histoire viticole furent posées à Odenas.",
            origins_text_2: "Depuis plus de deux siècles, chaque génération a eu à cœur de préserver ce patrimoine unique, transmettant le savoir-faire de la vigne et le respect du terroir de Brouilly. Les vieux manuscrits conservés au domaine témoignent de cette longue filiation et de l'attachement viscéral de notre famille à cette terre.",
            today_title: "Le Domaine Aujourd'hui",
            today_text: "Situé au pied du Mont Brouilly, le domaine s'étend sur 10 hectares de vignes exposées idéalement pour capter le soleil du Beaujolais. Notre maison de maître, typique de la région, est le cœur battant de l'exploitation, abritant nos caves voûtées où vieillissent nos fûts de chêne.",
            team_title: "Ceux qui font le vin",
            team_subtitle: "Une passion qui se vit en famille",
        },
        visite: {
            meta_title: "Visite & Accès | Domaine de Garanches",
            meta_desc: "Venez nous rendre visite à Odenas. Dégustation, vente directe et découverte du vignoble.",
            title: "Venir au Domaine",
            subtitle: "Œnotourisme",
            intro: "Nous sommes toujours ravis d'accueillir des passionnés de vin. Le domaine est situé au cœur du Beaujolais, au pied du Mont Brouilly.",
            access_title: "Accès",
            access_text: "<strong class='text-gray-900'>Depuis Lyon ou Paris (A6) :</strong><br />Sortez à Belleville/Saône (Sortie 30).<br />Prenez la direction <em class='text-amber-600'>Charentay</em>.<br />En sortant de Charentay, suivez la route d'Odenas.<br />Le domaine se trouvera sur votre gauche.",
            address_title: "Adresse",
            hours_title: "Horaires",
            hours_text: "Sur rendez-vous<br />Du Lundi au Samedi",
            cta: "Prendre Rendez-vous",
        },
        wines: {
            meta_title: "Nos Vins | Domaine de Garanches",
            meta_desc: "Découvrez nos crus du Beaujolais : Brouilly, Bourgogne Blanc, Rosé et notre Méthode Traditionnelle.",
            title: "Nos Cuvées",
            subtitle: "La Cave",
            intro: "Tous nos vins sont produits, vinifiés et mis en bouteille à la propriété.<br />Expédition possible dans toute la France (cartons de 6 ou 12 bouteilles).",
            question_title: "Une question sur un millésime ?",
            question_text: "N'hésitez pas à nous contacter pour connaître les tarifs d'expédition ou pour passer commande directement.",
            contact_btn: "Contactez-nous",
            soit: "Soit",
            pregnant: "Déconseillé aux femmes enceintes",
        },
        contact: {
            meta_title: "Contact & Accès | Domaine de Garanches",
            meta_desc: "Contactez le Domaine de Garanches à Odenas.",
            title: "Nous Contacter",
            subtitle: "À votre écoute",
            intro: "Pour toute commande, demande de tarif ou pour organiser une visite au domaine, n'hésitez pas à nous laisser un message.",
            coordinates_title: "Nos Coordonnées",
            phone_title: "Téléphone",
            hours_title: "Horaires",
            hours_text: "Nous vous accueillons au caveau sur rendez-vous.",
            sunday_closed: "Fermé le dimanche.",
            form_title: "Envoyer un message",
            form_name: "Nom",
            form_email: "Email",
            form_subject: "Sujet",
            form_message: "Message",
            form_submit: "Envoyer ma demande",
            subjects: {
                order: "Je souhaite passer commande",
                shipping: "Demande de tarifs d'expédition",
                visit: "Visite / Dégustation",
                other: "Autre demande",
            },
            demo_note: "Ce formulaire est une démonstration visuelle pour l'instant.",
        },
        common: {
            loading: "Chargement...",
        }
    },
    en: {
        nav: {
            domaine: "The Estate",
            histoire: "Our History",
            visite: "Visit & Tasting",
            contact: "Contact",
            boutique: "Shop",
            panier: "Cart",
            mon_panier: "My Cart",
        },
        home: {
            subtitle: "Brouilly Wines & Burgundy White",
            terroir_title: "An Exceptional Terroir",
            terroir_text: "In the heart of Beaujolais, at the foot of Mont Brouilly, discover the elegance of a centuries-old family know-how.",
            boutique_title: "Our Grand Cuvees",
            boutique_btn: "Discover our wines",
            shop_subtitle: "Online Shop",
            view_all: "View all wines",
            philosophy: "Our Philosophy",
            read_history: "Read our history",
        },
        footer: {
            legal: "Legal Notice",
            privacy: "Privacy Policy",
            cgv: "Terms of Sales",
            copyright: "Alcohol abuse is dangerous for your health, consume with moderation.",
        },
        history: {
            meta_title: "Our History | Domaine de Garanches - Since 1788",
            meta_desc: "Dive into the history of Domaine de Garanches in Odenas. A family winemaking tradition perpetuated since the 18th century.",
            title: "A Family History",
            subtitle: "Since 1788",
            origins_title: "The Origins",
            origins_text_1: "The history of Domaine de Garanches is rooted in the heart of the 18th century. It was in 1788, on the eve of the French Revolution, that the first stones of our winemaking history were laid in Odenas.",
            origins_text_2: "For more than two centuries, each generation has been committed to preserving this unique heritage, transmitting the know-how of the vine and respect for the Brouilly terroir. The old manuscripts kept at the estate bear witness to this long lineage and our family's visceral attachment to this land.",
            today_title: "The Estate Today",
            today_text: "Located at the foot of Mont Brouilly, the estate extends over 10 hectares of vines ideally exposed to capture the Beaujolais sun. Our manor house, typical of the region, is the beating heart of the operation, housing our vaulted cellars where our oak barrels age.",
            team_title: "Those who make the wine",
            team_subtitle: "A passion lived as a family",
        },
        visite: {
            meta_title: "Visit & Access | Domaine de Garanches",
            meta_desc: "Come visit us in Odenas. Tasting, direct sales and vineyard discovery.",
            title: "Visit the Estate",
            subtitle: "Wine Tourism",
            intro: "We are always delighted to welcome wine enthusiasts. The estate is located in the heart of Beaujolais, at the foot of Mont Brouilly.",
            access_title: "Access",
            access_text: "<strong class='text-gray-900'>From Lyon or Paris (A6):</strong><br />Exit at Belleville/Saône (Exit 30).<br />Take direction <em class='text-amber-600'>Charentay</em>.<br />Leaving Charentay, follow the road to Odenas.<br />The estate will be on your left.",
            address_title: "Address",
            hours_title: "Opening Hours",
            hours_text: "By appointment<br />Monday to Saturday",
            cta: "Book an Appointment",
        },
        wines: {
            meta_title: "Our Wines | Domaine de Garanches",
            meta_desc: "Discover our Beaujolais crus: Brouilly, Burgundy White, Rosé and our Traditional Method.",
            title: "Our Cuvees",
            subtitle: "The Cellar",
            intro: "All our wines are produced, vinified and bottled at the property.<br />Shipping possible throughout France (boxes of 6 or 12 bottles).",
            question_title: "A question about a vintage?",
            question_text: "Do not hesitate to contact us for shipping rates or to order directly.",
            contact_btn: "Contact us",
            soit: "Equiv.",
            pregnant: "Not recommended for pregnant women",
        },
        contact: {
            meta_title: "Contact & Access | Domaine de Garanches",
            meta_desc: "Contact Domaine de Garanches in Odenas.",
            title: "Contact Us",
            subtitle: "At your service",
            intro: "For any order, price request or to organize a visit to the estate, do not hesitate to leave us a message.",
            coordinates_title: "Our Coordinates",
            phone_title: "Phone",
            hours_title: "Opening Hours",
            hours_text: "We welcome you to the cellar by appointment.",
            sunday_closed: "Closed on Sundays.",
            form_title: "Send a message",
            form_name: "Name",
            form_email: "Email",
            form_subject: "Subject",
            form_message: "Message",
            form_submit: "Send my request",
            subjects: {
                order: "I wish to order",
                shipping: "Shipping rates request",
                visit: "Visit / Tasting",
                other: "Other request",
            },
            demo_note: "This form is a visual demonstration for now.",
        },
        common: {
            loading: "Loading...",
        }
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('fr');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
