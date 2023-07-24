import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Lagnavn',
            description: 'Navnet på laget, ikke klubbnavnet. F.eks. "Lura Bulls" ikke "Lura IL"',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'Dette er en unik identifikator for laget. Denne brukes i URLen til laget.',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            description: 'Hvor aktivt laget er',
            type: 'string',
            options: {
                list: ['Aktiv', 'Noe aktivitet', 'Inaktiv'],
            },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'series',
            title: 'Beltar i serier:',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'series' }] }],
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook Lenke',
            type: 'url',
            //only facebook domain alloed
            validation: (Rule) =>
                Rule.uri({ scheme: ['https', 'http'] }).custom((uri) =>
                    uri?.includes('facebook.com') || !uri ? true : 'Må være en facebook lenke'
                ),
        }),
        defineField({
            name: 'website',
            title: 'Hjemmeside Lenke',
            type: 'url',
        }),
        defineField({
            name: 'location',
            title: 'By',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Adresse',
            type: 'string',
        }),
        defineField({
            name: 'phonenumber',
            title: 'Telefon',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Epost',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo',
        },
    },
});
