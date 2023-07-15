import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

import ContentWidthWrapper from '@/components/ContentWidthWrapper';
import Section from '@/components/section';

import type { SanityDocument } from '@sanity/client';

async function getData() {
    const query = groq`*[_type == "post"]{..., author->}`;
    const data = await client.fetch(query);
    return data;
}

function ArticleCard(props: SanityDocument) {
    return (
        <div>
            <Link href={`/aktuelt/${props.slug.current}`}>
                <h2>{props.title}</h2>
            </Link>
            <p>{props._createdAt}</p>
        </div>
    );
}

export default async function NewsArchivePage() {
    const data = await getData();
    console.log('data: ', data);

    return (
        <main>
            <ContentWidthWrapper>
                <h1>Aktuelt</h1>
                <p> Aktuelle artikkler om hva som skjer i regionen.</p>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ContentWidthWrapper>
            <Section>
                {data.map((article: SanityDocument) => (
                    <ArticleCard key={article._id} {...article} />
                ))}
            </Section>
        </main>
    );
}
