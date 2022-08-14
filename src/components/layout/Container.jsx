import styles from './Container.module.css';

export default function Container({ children, customClass }) {
    return <main className={`${styles.container} ${styles[customClass]}`}>{children}</main>;
}
