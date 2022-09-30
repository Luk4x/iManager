import styles from './Loading.module.css';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <AiOutlineLoading3Quarters />
        </div>
    );
}
