import ProjectForm from '../Project/ProjectForm';
import styles from './CreateProject.module.css';

export default function CreateProject() {
    return (
        <section className={styles.projectContainer}>
            <h2>Criar Projeto</h2>
            <p>
                Crie seu projeto e adicione serviços
                <br />
                posteriormente!
            </p>
            <ProjectForm />
        </section>
    );
}
