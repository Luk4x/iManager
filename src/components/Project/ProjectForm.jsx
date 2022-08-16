import styles from './ProjectForm.module.css';

export default function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do Projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total" />
            </div>
            <div>
                <select name="category_id" id="category_id">
                    Selecione a categoria
                </select>
            </div>
            <button>Criar Projeto</button>
        </form>
    );
}
