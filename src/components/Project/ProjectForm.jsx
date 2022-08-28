import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';

import Input from '../form/Input';
import Select from '../form/Select';
import LinkButton from '../layout/LinkButton';

export default function ProjectForm() {
    const [categories, setCategories] = useState([]);

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

    return (
        <form className={styles.form}>
            <Input type="text" name="formProjectName" placeholder="Insira o nome do Projeto" labelContent="Nome do Projeto" />
            <Input type="number" name="formProjectBudget" placeholder="Insira o orçamento total" labelContent="Orçamento do Projeto" />
            <Select name="category" labelContent="Selecione uma categoria" options={categories} />
            <LinkButton to="#" type="submit">
                Criar Projeto
            </LinkButton>
        </form>
    );
}
