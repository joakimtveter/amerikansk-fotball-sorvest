import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';

import ContentWidthWrapper from '@/components/ContentWidthWrapper';
import Section from '@/components/section';

import type { SanityDocument } from '@sanity/client';

async function getData() {
    const query = groq`*[_type == "team"]`;
    const data = await client.fetch(query);
    return data;
}

interface TeamCardProps {
    name: string;
    slug: string;
}

function TeamCard(props: SanityDocument) {
    const imageUrl = urlForImage(props.logo).width(200).url();

    return (
        <div>
            <img src={imageUrl} alt='' />

            <h2>
                <Link href={`/lag/${props.slug.current}`}>{props.name}</Link>
            </h2>
            <div>{props.status}</div>
        </div>
    );
}

export default async function TeamsPage() {
    const data = await getData();
    console.log('data: ', data);

    return (
        <main>
            <ContentWidthWrapper>
                <h1>Amerikanske Fotballag i Sørvest Norge</h1>
                <p> Her finner du en oversikt over amerikanske fotballag i regionen.</p>
            </ContentWidthWrapper>
            <Section>
                {data.map((team: SanityDocument) => (
                    <TeamCard key={team._id} {...team} />
                ))}
            </Section>
        </main>
    );
}
