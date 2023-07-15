import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

import Link from 'next/link';
import ContentWidthWrapper from '@/components/ContentWidthWrapper';
import Section from '@/components/section';

async function getData(slug: string) {
    const query = groq`*[_type == "post" && slug.current == $slug ][0]{..., author->}`;
    const data = await client.fetch(query, { slug });
    return data;
}

export default async function NewsPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    return (
        <main>
            <ContentWidthWrapper>
                <h1>{data.title}</h1>
                <p>Av {data.author.name}</p>
                <PortableText value={data.body} />
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ContentWidthWrapper>
        </main>
    );
}
