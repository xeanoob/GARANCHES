import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        // Remplace par ton vrai nom de domaine quand tu l'auras
        sitemap: 'https://www.domainedegaranches.com/sitemap.xml',
    }
}