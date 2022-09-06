import { useHistory } from 'react-router-dom';
import ProjectForm from '../Project/ProjectForm';
import styles from './CreateProject.module.css';

export default function CreateProject() {
    const history = useHistory();

    function createPost(project) {
        // initializing costs and services
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                history.push('/projects', { message: `Projeto ${data.id} criado com sucesso!`, type: 'success' });
            })
            .catch(err => console.log(err));
    }

    return (
        <section className={styles.projectContainer}>
            <h2>Criar Projeto</h2>
            <p>
                Crie seu projeto e adicione serviços
                <br />
                posteriormente!
            </p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </section>
    );
}
