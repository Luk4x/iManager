import { useLocation } from 'react-router-dom';
import styles from './Projects.module.css';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';

export default function Projects() {
    const location = useLocation();
    const message = location.state ? location.state.message : '';
    const type = location.state ? location.state.type : '';

    return (
        <section className={styles.project}>
            <Message msg={message} type={type} />
            <div className={styles.titleContainer}>
                <h2>Meus Projetos</h2>
                <LinkButton to="/create-project">Novo Projeto</LinkButton>
            </div>
            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </section>
    );
}
