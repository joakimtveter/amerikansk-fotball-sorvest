import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import type { Slug } from '@sanity/types';
import type { SanityDocument } from '@sanity/client';

import styles from './teamcard.module.css';

interface TeamCardProps extends SanityDocument {
    name: string;
    slug: Slug;
}

export default function TeamCard(props: TeamCardProps) {
    const imageUrl = props.logo ? urlForImage(props.logo).width(200).url() : '';

    return (
        <li className={`card ${styles.card}`}>
            <img className={styles.image} src={imageUrl} alt='' />

            <h2 className={styles.title}>
                <Link className={styles.link} href={`/lag/${props.slug.current}`}>
                    {props.name}
                </Link>
            </h2>
            <div>
                <svg width='1.2em' height='1.2em' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fill='#000000'
                        d='M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z'></path>
                </svg>{' '}
                <span>{props.location}</span>
            </div>
            <div
                className={`${styles.status} 
                    ${props.status == 'Aktiv' ? styles.active : ''} 
                    ${props.status == 'Inaktiv' ? styles.inactive : ''}
                    ${props.status == 'Noe aktivitet' ? styles.someActivity : ''}
                    `}>
                {props.status}
            </div>
        </li>
    );
}
