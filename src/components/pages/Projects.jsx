import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Projects.module.css';

import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../Project/ProjectCard';
import Loading from '../layout/Loading';
import PurpleBackground from '../layout/PurpleBackground';

import { HiOutlineEmojiSad } from 'react-icons/hi';
import { MdDesignServices } from 'react-icons/md';

export default function Projects() {
    const location = useLocation();
    const [message, setMessage] = useState(location.state ? location.state.message : '');
    const [type, setType] = useState(location.state ? location.state.type : '');
    const [loader, setLoader] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/projects`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setLoader(false);
                    setProjects(data);
                }, 500);
            })
            .catch(err => console.error(err));
    }, []);

    const removeProject = id => {
        fetch(`${import.meta.env.VITE_BASE_URL}/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                setProjects(projects.filter(project => project.id !== id));
                setType('success');
                setMessage(`Projeto Nº ${id} removido com sucesso!`);
            })
            .catch(err => console.log(err));
    };

    return (
        <section className={styles.project}>
            <PurpleBackground style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: '100%', height: '45%' }} />
            <Message msg={message} type={type} />
            {!loader && projects.length > 0 && <MdDesignServices />}
            <div className={styles.titleContainer}>
                <h2>Meus Projetos</h2>
                <LinkButton to="/create-project">Novo Projeto</LinkButton>
            </div>
            {loader ? (
                <Loading />
            ) : (
                <Container customClass="start">
                    {projects.length > 0 ? (
                        projects.map(project => <ProjectCard key={project.id} {...project} handleRemove={removeProject} />)
                    ) : (
                        <div className={styles.noProjects}>
                            <HiOutlineEmojiSad />
                            <h3>Não há projetos cadastrados!</h3>
                        </div>
                    )}
                </Container>
            )}
        </section>
    );
}
