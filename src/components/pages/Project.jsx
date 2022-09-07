import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Container from '../layout/Container';
import Loading from '../layout/Loading';
import SubmitButton from '../form/SubmitButton';
import ProjectForm from '../Project/ProjectForm';
import Message from '../layout/Message';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setProject(data);
                }, 200);
            })
            .catch(err => console.error(err));
    }, [id]);

    const editPost = project => {
        if (project.budget < project.cost) {
            setType('error');
            setMessage(`Projeto Nº ${project.id} não pôde ser editado: O custo do projeto não pode ser maior que o orçamento!`);
            return false;
        } else {
            fetch(`http://localhost:5000/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            })
                .then(res => res.json())
                .then(data => {
                    setProject(data);
                    setShowProjectForm(false);
                    setType('success');
                    setMessage(`Projeto Nº ${project.id} atualizado com sucesso!`);
                })
                .catch(err => console.error(err));
        }
    };

    return (
        <Container customClass="column">
            {message && <Message msg={message} type={type} />}
            {project.name ? (
                <div className={styles.projectDetails}>
                    <div className={styles.projectHeader}>
                        <div className={styles.titleContainer}>
                            <h2>Projeto: {project.name}</h2>
                            <SubmitButton onClick={() => setShowProjectForm(!showProjectForm)}>{showProjectForm ? 'Fechar' : 'Editar Projeto'}</SubmitButton>
                        </div>
                        {showProjectForm ? (
                            <div className={styles.projectInfo}>
                                <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                            </div>
                        ) : (
                            <div className={styles.projectInfo}>
                                <p>
                                    <span>Categoria: </span>
                                    {project.category.name}
                                </p>
                                <p>
                                    <span>Orçamento Total: </span>
                                    R${project.budget}
                                </p>
                                <p>
                                    <span>Orçamento utilizado: </span>
                                    R${project.cost}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </Container>
    );
}
