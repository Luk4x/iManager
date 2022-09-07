import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

export default function ProjectForm({ btnText, handleSubmit, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    const submit = e => {
        e.preventDefault();
        handleSubmit(project);
    };

    const handleInput = e => {
        setProject({ ...project, [e.target.name]: e.target.value });
    };

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" name="name" placeholder="Insira o nome do Projeto" labelContent="Nome do Projeto" onChange={handleInput} value={project.name ? project.name : ''} />
            <Input type="number" name="budget" placeholder="Insira o orçamento total" labelContent="Orçamento do Projeto" onChange={handleInput} value={project.budget ? project.budget : ''} />
            <Select name="category" labelContent="Selecione uma categoria" options={categories} onChange={handleCategory} value={project.category ? project.category.id : ''} />
            <SubmitButton type="submit">{btnText}</SubmitButton>
        </form>
    );
}
