import Link from 'next/link';
import styles from './navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navlist}>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href={'/'}>
                        Hjem
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href={'/aktuelt'}>
                        Aktuelt
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link className={styles.navlink} href={'/lag'}>
                        Lagene i regionen
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
