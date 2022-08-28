import styles from './SubmitButton.module.css';

export default function SubmitButton({ children, ...props }) {
    return (
        <button className={styles.SubmitButton} {...props}>
            {children}
        </button>
    );
}
