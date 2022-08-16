import styles from './LinkButton.module.css';
import { Link } from 'react-router-dom';

export default function LinkButton({ children, ...props }) {
    return (
        <Link className={styles.linkButton} {...props}>
            {children}
        </Link>
    );
}
