import styles from './footer.module.css';
import copyrightYears from '@/libs/copyrightYears';

export default function Footer() {
    const copyright = copyrightYears(2023);

    return (
        <footer>
            <div>
                <p className={styles.copyright}>
                    &copy;{copyright} <a href='https://lurabulls.no'>Lura Bulls</a> | Denne siden er utviklet av{' '}
                    <a href='https://joakimtveter.no'>Joakim Tveter</a>
                </p>
            </div>
        </footer>
    );
}
