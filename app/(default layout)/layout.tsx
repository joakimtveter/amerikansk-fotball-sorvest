import type { Metadata } from 'next';

import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
    applicationName: 'Amerikansk fotball i Sørvest Norge - AFSV',
    title: 'Amerikansk fotball i Sørvest Norge',
    description:
        'En samleside med informasjon om hva som skjer innen Amerikansk fotball i Norge, med spesielt fokus på Amerikansk fotball i Rogaland.',
    authors: [{ name: 'Joakim Tveter', url: 'https://joakimtveter.no' }],
    keywords: ['Amerikansk fotball', 'Rogaland', 'Idrettslag', 'Nyheter'],
    formatDetection: { telephone: false },
};

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='no'>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
