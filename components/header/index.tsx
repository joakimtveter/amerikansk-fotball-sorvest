import Navigation from '@/components/navigation';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <p>Amerikansk Fotball i Sørvest Norge</p>
                <Navigation />
            </div>
        </header>
    );
}
