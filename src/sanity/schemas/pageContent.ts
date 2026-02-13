export default {
    name: 'pageContent',
    title: 'Contenu de Page',
    type: 'document',
    fields: [
        {
            name: 'page',
            title: 'Page',
            type: 'string',
            options: {
                list: [
                    { title: 'Accueil', value: 'home' },
                    { title: 'Notre Histoire', value: 'history' },
                    { title: 'Nos Vins', value: 'wines' },
                    { title: 'Visite', value: 'visit' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'section',
            title: 'Section',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Titre',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Contenu',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
    ],
};
