import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Projects.module.css';

import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';

export default function Projects() {
    const location = useLocation();
    const message = location.state ? location.state.message : '';
    const type = location.state ? location.state.type : '';

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <section className={styles.project}>
            <Message msg={message} type={type} />
            <div className={styles.titleContainer}>
                <h2>Meus Projetos</h2>
                <LinkButton to="/create-project">Novo Projeto</LinkButton>
            </div>
            <Container customClass="start">{projects.length > 0 && projects.map(project => <ProjectCard key={project.id} {...project} />)}</Container>
        </section>
    );
}
