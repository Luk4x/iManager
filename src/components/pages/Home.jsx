import styles from './Home.module.css';
import LinkButton from '../layout/LinkButton';
import { GiReceiveMoney } from 'react-icons/gi';
import PurpleBackground from '../layout/PurpleBackground';

import { useEffect } from 'react';

export default function Home() {
    // pinging API just to 'wake up' there in heroku
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section className={styles.sectionContainer}>
            <PurpleBackground />
            <div className={styles.home}>
                <h1>
                    Bem-vindo ao
                    <span>
                        i<span>Manager</span>
                    </span>
                </h1>
                <p>Comece a gerenciar seus projetos agora mesmo!</p>
                <LinkButton to="/create-project">Começar</LinkButton>
                <GiReceiveMoney />
            </div>
            <div className={styles.image}></div>
        </section>
    );
}
