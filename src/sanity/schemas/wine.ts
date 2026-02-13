export default {
    name: 'wine',
    title: 'Vin',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nom',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'subtitle',
            title: 'Sous-titre',
            type: 'string',
        },
        {
            name: 'price',
            title: 'Prix (en centimes)',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'alcohol',
            title: 'Alcool',
            type: 'string',
        },
        {
            name: 'volume',
            title: 'Volume',
            type: 'string',
        },
        {
            name: 'allergens',
            title: 'Allergènes',
            type: 'string',
        },
    ],
};
