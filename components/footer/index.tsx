import styles from './footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const startYear = 2020;
    const copyrightYears = currentYear === startYear ? currentYear : `${startYear} - ${currentYear}`;

    return (
        <footer>
            <div>
                <p>
                    &copy; {copyrightYears} <a href='https://lurabulls.no'>Lura Bulls</a>. Denne siden er utviklet av{' '}
                    <a href='https://joakimtveter.no'>Joakim Tveter</a>
                </p>
            </div>
        </footer>
    );
}
