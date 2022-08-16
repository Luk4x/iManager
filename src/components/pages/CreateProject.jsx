import ProjectForm from '../Project/ProjectForm';
import styles from './CreateProject.module.css';

export default function CreateProject() {
    return (
        <section className={styles.projectContainer}>
            <h2>Criar Projeto</h2>
            <p>Crie seu projeto para depois adicionar os serviços!</p>
            <ProjectForm />
        </section>
    );
}
