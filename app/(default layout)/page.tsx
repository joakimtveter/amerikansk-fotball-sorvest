import Link from 'next/link';
import ContentWidthWrapper from '@/components/ContentWidthWrapper';

export default function HomePage() {
    return (
        <main>
            <ContentWidthWrapper>
                <h1>Amerikans Fotball i Sørvest Norge</h1>

                <section>
                    <ContentWidthWrapper>
                        <h2>Aktuelt</h2>

                        <Link href={'/aktuelt'}>Les flere saker</Link>
                    </ContentWidthWrapper>
                </section>
            </ContentWidthWrapper>
        </main>
    );
}
