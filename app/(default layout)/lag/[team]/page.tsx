import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

import Link from 'next/link';
import ContentWidthWrapper from '@/components/ContentWidthWrapper';
import Section from '@/components/section';

async function getData(team: string) {
    const query = groq`*[_type == "team" && slug.current == $slug ][0]`;
    const data = await client.fetch(query, { slug: team });
    return data;
}

export default async function TeamPage({ params }: { params: { team: string } }) {
    const data = await getData(params.team);
    return (
        <main>
            <ContentWidthWrapper>
                <h1>{data.name}</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ContentWidthWrapper>
        </main>
    );
}
