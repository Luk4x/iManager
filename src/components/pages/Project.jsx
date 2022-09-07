import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { VscProject } from 'react-icons/vsc';
import { parse, v4 as uuidv4 } from 'uuid';

import Container from '../layout/Container';
import Loading from '../layout/Loading';
import SubmitButton from '../form/SubmitButton';
import ProjectForm from '../Project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../Project/ServiceForm';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
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
        setMessage('');

        if (project.budget < project.cost) {
            setType('error');
            setMessage(`Projeto Nº ${project.id} não pôde ser atualizado: O custo do projeto não pode ser maior que o orçamento!`);
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

    const createService = project => {
        setMessage('');

        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();

        const newCost = parseFloat(project.cost) + parseFloat(lastService.cost);
        if (newCost > parseFloat(project.budget)) {
            setType('error');
            setMessage(`O orçamento do Projeto Nº ${project.id} foi ultrapassado, verifique o valor do serviço.`);
            project.services.pop();
            return false;
        } else {
            project.cost = newCost;
            fetch(`http://localhost:5000/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(project)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setType('success');
                    setMessage(`Serviço adicionado com sucesso!`);
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
                                <div>
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
                                <VscProject />
                            </div>
                        )}
                    </div>
                    <div className={styles.serviceContainer}>
                        <div className={styles.serviceTitleContainer}>
                            <h2>Serviços: </h2>
                            <SubmitButton onClick={() => setShowServiceForm(!showServiceForm)}>{showServiceForm ? 'Fechar' : 'Novo Serviço'}</SubmitButton>
                        </div>
                        <div className={styles.serviceListContainer}>
                            {showServiceForm ? (
                                <div className={styles.serviceList}>
                                    <ServiceForm handleSubmit={createService} btnText="Adicionar Serviço" projectData={project} />
                                </div>
                            ) : (
                                <div className={styles.serviceList}>
                                    <p>Não há serviços cadastrados!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </Container>
    );
}
