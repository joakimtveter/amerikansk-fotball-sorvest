import { Open_Sans, Lato } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--ff-body',
});

const lato = Lato({
    weight: ['300', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--ff-heading',
});

export const metadata: Metadata = {
    applicationName: 'Amerikansk fotball i Sørvest Norge - AFSV',
    title: 'Amerikansk fotball i Sørvest Norge',
    description:
        'En samleside med informasjon om hva som skjer innen Amerikansk fotball i Norge, med spesielt fokus på Amerikansk fotball i Rogaland.',
    authors: [{ name: 'Joakim Tveter', url: 'https://joakimtveter.no' }],
    keywords: ['Amerikansk fotball', 'Rogaland', 'Idrettslag', 'Nyheter'],
    formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='no'>
            <body className={`${openSans.variable} ${lato.variable}`}>{children}</body>
        </html>
    );
}
