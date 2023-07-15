import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Lagnavn',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Aktiv', value: 'active' },
                    { title: 'Noe aktivitet', value: 'some-activity' },
                    { title: 'Inaktiv', value: 'inactive' },
                ],
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
    ],
    preview: {
        select: {
            title: 'name',
            media: 'logo',
        },
    },
});
