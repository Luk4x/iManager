import styles from './CreateProject.module.css';

import { useHistory } from 'react-router-dom';

import ProjectForm from '../Project/ProjectForm';
import PurpleBackground from '../layout/PurpleBackground';

export default function CreateProject() {
    const history = useHistory();

    function createPost(project) {
        // initializing costs and services
        project.cost = 0;
        project.services = [];

        fetch(`${import.meta.env.VITE_BASE_URL}/projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                history.push('/projects', { message: `Projeto Nº ${data.id} criado com sucesso!`, type: 'success' });
            })
            .catch(err => console.log(err));
    }

    return (
        <section className={styles.secContainer}>
            <PurpleBackground style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: '100%' }} />
            <div className={styles.projectContainer}>
                <h2>Criar Projeto</h2>
                <p>Crie seu projeto e adicione serviços posteriormente!</p>
                <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
            </div>
            <div className={styles.image}></div>
        </section>
    );
}
