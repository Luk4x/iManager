import styles from './Home.module.css';
import { GiReceiveMoney } from 'react-icons/gi';

export default function Home() {
    return (
        <section className={styles.home}>
            <h1>
                Bem-vindo ao
                <span>
                    i<span>Manager</span>
                </span>
            </h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <a href="/">Criar Projeto</a>
            <GiReceiveMoney />
        </section>
    );
}
