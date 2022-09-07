import styles from './ProjectForm.module.css';

import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

export default function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({});

    const submit = e => {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    };

    const handleInput = e => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text" name="name" placeholder="Insira o nome do Serviço" labelContent="Nome do Serviço" onChange={handleInput} />
            <Input type="number" name="cost" placeholder="Insira o custo do Serviço" labelContent="Custo do Serviço" onChange={handleInput} />
            <Input type="text" name="desc" placeholder="Descreva o Serviço" labelContent="Descrição do Serviço" onChange={handleInput} />
            <SubmitButton type="submit">{btnText}</SubmitButton>
        </form>
    );
}
