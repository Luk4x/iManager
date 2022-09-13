import styles from './ProjectForm.module.css';

import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

export default function ServiceForm({ handleSubmit, btnText, projectData, id }) {
    const [service, setService] = useState(id ? projectData.services.filter(service => service.id === id) : {});
    console.log(service);

    const submit = e => {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    };

    const handleInput = e => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submit} className={styles.form}>
                <Input type="text" name="name" placeholder="Insira o nome do Serviço" labelContent="Nome do Serviço" onChange={handleInput} value={service[0].name ? service[0].name : ''} />
                <Input type="number" name="cost" placeholder="Insira o custo do Serviço" labelContent="Custo do Serviço" onChange={handleInput} value={service[0].cost ? service[0].cost : ''} />
                <Input type="text" name="desc" placeholder="Descreva o Serviço" labelContent="Descrição do Serviço" onChange={handleInput} value={service[0].desc ? service[0].desc : ''} />
                <SubmitButton type="submit">{btnText}</SubmitButton>
            </form>
            <div className={styles.blurContainer}></div>
        </div>
    );
}
