import styles from './Input.module.css';

export default function Input({ name, labelContent, ...inputProps }) {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={name}>{labelContent}:</label>
            <input {...inputProps} id={name} name={name} />
        </div>
    );
}
