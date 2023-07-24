import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

import { PortableText } from '@portabletext/react';
import ContentWidthWrapper from '@/components/ContentWidthWrapper';

import styles from './page.module.css';

async function getData(team: string) {
    const query = groq`*[_type == "team" && slug.current == $slug ][0]{..., series->[]}`;
    const data = await client.fetch(query, { slug: team });
    return data;
}

export default async function TeamPage({ params }: { params: { team: string } }) {
    const data = await getData(params.team);
    const imageUrl = data.logo ? urlForImage(data.logo).width(200).url() : '';
    const updated = new Date(data._updatedAt).toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <main>
            <ContentWidthWrapper>
                <img src={imageUrl} alt={data.logo.alt} />
                <h1>{data.name}</h1>
                <p>Siden ble oppdatert: {updated}</p>
                <div
                    className={`${styles.status} 
                    ${data.status == 'Aktiv' ? styles.active : ''} 
                    ${data.status == 'Inaktiv' ? styles.inactive : ''}
                    ${data.status == 'Noe aktivitet' ? styles.someActivity : ''}
                    `}>
                    {data.status}
                </div>
                <p>
                    <span>Nettside: </span>
                    <a href={data.website}>{data.website}</a>
                </p>
                <p>
                    <span>Facebook: </span>
                    <a href={data.facebook}>{data.facebook}</a>
                </p>
                <p>
                    <span>Adresse: </span>
                    <a href={`https://www.google.com/maps/place/${data.address.replace(/ /g, '+')}`}>{data.address}</a>
                </p>
                <p>
                    <span>Epost: </span>
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                </p>
                <PortableText value={data.bio} />
            </ContentWidthWrapper>
        </main>
    );
}
