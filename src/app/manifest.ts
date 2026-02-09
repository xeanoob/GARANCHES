import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Domaine de Garanches',
        short_name: 'Garanches',
        description: 'Vins de Brouilly et Bourgogne Blanc depuis 1788 - Odenas, Beaujolais',
        start_url: '/',
        display: 'standalone',
        background_color: '#FAFAFA',
        theme_color: '#7f1d1d',
        orientation: 'portrait',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
