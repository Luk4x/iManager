import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import LinkButton from '../layout/LinkButton';

export default function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input type="text" name="formProjectName" placeholder="Insira o nome do Projeto" labelContent="Nome do Projeto" />
            <Input type="number" name="formProjectBudget" placeholder="Insira o orçamento total" labelContent="Orçamento do Projeto" />
            <Select name="category" labelContent="Selecione uma categoria" />
            <LinkButton type="submit">Criar Projeto</LinkButton>
        </form>
    );
}
