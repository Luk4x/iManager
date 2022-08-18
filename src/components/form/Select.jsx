import styles from './Select.module.css';

export default function Select({ name, labelContent }) {
    return (
        <div className={styles.selectContainer}>
            <label htmlFor={name}>{labelContent}:</label>
            <select name={name} id={name}>
                <option>{labelContent}</option>
            </select>
        </div>
    );
}
