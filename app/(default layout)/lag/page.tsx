import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import TeamCard from '@/components/teamCard';
import ContentWidthWrapper from '@/components/ContentWidthWrapper';
import Section from '@/components/section';

import type { SanityDocument } from '@sanity/client';

import styles from './page.module.css';

async function getData() {
    const query = groq`*[_type == "team"]`;
    const data = await client.fetch(query);
    return data;
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
                <ul className={styles.list} role='list'>
                    {data.map((team: any) => (
                        <TeamCard key={team._id} {...team} />
                    ))}
                </ul>
            </Section>
        </main>
    );
}
