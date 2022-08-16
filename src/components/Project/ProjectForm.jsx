import styles from './ProjectForm.module.css';
import Input from '../form/Input';

export default function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input type="text" name="formProjectName" placeholder="Insira o nome do Projeto" labelContent="Nome do Projeto" />
            <Input type="number" name="formProjectBudget" placeholder="Insira o orçamento total" labelContent="Orçamento do Projeto" />
            <select name="category_id" id="category_id">
                Selecione a categoria
            </select>
            <input type="button" value="Criar Projeto" />
        </form>
    );
}
