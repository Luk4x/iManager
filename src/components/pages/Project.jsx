import styles from './Project.module.css';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { VscProject } from 'react-icons/vsc';
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

import Container from '../layout/Container';
import Loading from '../layout/Loading';
import SubmitButton from '../form/SubmitButton';
import ProjectForm from '../Project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../Project/ServiceForm';
import ServiceCard from '../Project/ServiceCard';

export default function Project() {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [showServiceEditForm, setShowServiceEditForm] = useState(false);
    const [serviceId, setServiceId] = useState();
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
        console.log(project);
        
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
                    setShowServiceForm(false);
                    setType('success');
                    setMessage(`Serviço adicionado com sucesso!`);
                })
                .catch(err => console.error(err));
        }
    };

    const removeService = (id, cost) => {
        setMessage('');

        const servicesUpdated = project.services.filter(service => service.id !== id);
        const projectUpdated = project;

        projectUpdated.services = servicesUpdated;
        projectUpdated.cost -= parseFloat(cost);

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        })
            .then(res => res.json())
            .then(data => {
                setProject(projectUpdated);
                setType('success');
                setMessage('Serviço removido com sucesso!');
            })
            .catch(err => console.error(err));
    };

    const handleEditService = id => {
        setServiceId(id);
        setShowServiceEditForm(!showServiceEditForm);
    };

    const editService = (project, service) => {
        setMessage('');
        console.log(service);
    };

    return (
        <Container customClass="column">
            <Message msg={message} type={type} />
            {project.name ? (
                <div className={styles.projectDetails}>
                    <div className={styles.projectHeader}>
                        <div className={styles.titleContainer}>
                            <h2>
                                <span>{project.id}° Projeto:</span>
                                <span>{project.name}</span>
                            </h2>
                            <SubmitButton onClick={() => setShowProjectForm(!showProjectForm)}>{showProjectForm ? 'Fechar' : 'Editar Projeto'}</SubmitButton>
                        </div>
                        {showProjectForm ? (
                            <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                        ) : (
                            <div className={styles.projectInfo}>
                                <div>
                                    <p className={styles[project.category.name.toLowerCase()]}>
                                        Categoria: <span>{project.category.name}</span>
                                    </p>
                                    <p>
                                        Orçamento Total: <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.budget)}</span>
                                    </p>
                                    {parseInt(project.cost) !== parseInt(project.budget) ? (
                                        <p>
                                            Orçamento utilizado: <span className={styles.noCut}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.cost)}</span>
                                        </p>
                                    ) : (
                                        <p>
                                            Orçamento utilizado: <span className={styles.cut}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(project.cost)}</span>
                                        </p>
                                    )}
                                </div>
                                <VscProject />
                            </div>
                        )}
                    </div>
                    <div className={styles.serviceContainer}>
                        {project.services.length > 0 && <AiOutlineFundProjectionScreen />}
                        <div className={styles.serviceTitleContainer}>
                            <h2>Serviços: </h2>
                            <SubmitButton onClick={() => setShowServiceForm(!showServiceForm)}>{showServiceForm ? 'Fechar' : 'Novo Serviço'}</SubmitButton>
                        </div>
                        <Container customClass="start">
                            {showServiceForm ? (
                                <ServiceForm handleSubmit={createService} btnText="Adicionar Serviço" projectData={project} />
                            ) : project.services.length > 0 ? (
                                showServiceEditForm ? (
                                    <ServiceForm handleSubmit={editService} btnText="Concluir Edição" projectData={project} id={serviceId} />
                                ) : (
                                    project.services.map(service => <ServiceCard key={service.id} ProjectCategory={project.category.name} {...service} handleRemove={removeService} handleEdit={handleEditService} />)
                                )
                            ) : (
                                <div className={styles.noServices}>
                                    <HiOutlineEmojiSad />
                                    <h3>Não há serviços cadastrados!</h3>
                                </div>
                            )}
                        </Container>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </Container>
    );
}
