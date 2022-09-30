import styles from './Select.module.css';

export default function Select({ name, labelContent, options, ...selectProps }) {
    return (
        <div className={styles.selectContainer}>
            <label htmlFor={name}>{labelContent}:</label>
            <select name={name} id={name} {...selectProps}>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
