import { useEffect, useState } from 'react';
import styles from './Message.module.css';

export default function Message({ type, msg }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (msg) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }

        return;
    }, [msg]);

    return (
        <p type={type} className={`${styles.message} ${styles[type]} ${visible ? styles.visible : styles.invisible}`}>
            {msg}
        </p>
    );
}
