import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    color?: 'primary' | 'neutral' | 'error' | 'success' | 'warning' | 'gradient';
}

export default function Button(props: ButtonProps) {
    const { children, variant = 'contained', color = 'primary', startIcon = null, endIcon = null, ...rest } = props;
    return (
        <button className={`${styles[variant]} ${styles[color]}`} {...rest}>
            {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </button>
    );
}
