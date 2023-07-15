import { type SchemaTypeDefinition } from 'sanity';

import blockContent from './schemas/blockContent';
import category from './schemas/category';
import post from './schemas/post';
import author from './schemas/author';
import team from './schemas/team';
import series from './schemas/series';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, team, series, author, category, blockContent],
};
