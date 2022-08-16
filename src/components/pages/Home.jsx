import styles from './Home.module.css';
import LinkButton from '../layout/LinkButton';
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
            <LinkButton to="/create-project">Criar Projeto</LinkButton>
            <GiReceiveMoney />
        </section>
    );
}
