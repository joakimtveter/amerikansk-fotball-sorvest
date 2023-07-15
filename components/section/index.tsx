import ContentWidthWrapper from '../ContentWidthWrapper';
import styles from './section.module.css';

interface SectionProps {
    children: React.ReactNode;
}

export default function Section(props: SectionProps) {
    return (
        <section className={styles.section}>
            <ContentWidthWrapper>{props.children}</ContentWidthWrapper>
        </section>
    );
}
