import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'series',
    title: 'Serier',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Serietittel',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
});
