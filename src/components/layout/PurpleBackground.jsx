import styles from './PurpleBackground.module.css';

export default function PurpleBackground({ ...props }) {
    return <div {...props} className={styles.purpleBackground} />;
}
