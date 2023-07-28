import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

import ContentWidthWrapper from '@/components/ContentWidthWrapper';
import Button from '@/components/button';

import styles from './page.module.css';

async function getData(slug: string) {
    const query = groq`*[_type == "post" && slug.current == $slug ][0]{..., author->}`;
    const data = await client.fetch(query, { slug });
    return data;
}

export default async function NewsPage({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    const imageUrl = data.mainImage ? urlForImage(data.mainImage).width(960).url() : '';
    const publishedDate = new Date(data.publishedAt);
    const updatedDate = new Date(data._updatedAt);
    const isUpdated = publishedDate.getTime() < updatedDate.getTime();
    const updated = updatedDate.toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    const published = publishedDate.toLocaleString('nb-NO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <main>
            <ContentWidthWrapper>
                <img className={`${styles.mainImage}`} src={imageUrl} alt={''} />
                <h1 className={`${styles.title}`}>{data.title}</h1>
                <p>Av {data.author.name} </p>
                <p>
                    Publisert {published} {isUpdated ? `| Oppdatert ${updated}` : ''}
                </p>

                {/* <div>Categories goes here</div> */}
                <PortableText value={data.body} />
                {/* <div>tags goes here</div> */}

                <pre>{JSON.stringify(data, null, 2)}</pre>
            </ContentWidthWrapper>
        </main>
    );
}
