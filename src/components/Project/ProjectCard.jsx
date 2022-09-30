import styles from './ProjectCard.module.css';

import { Link } from 'react-router-dom';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { VscPreview } from 'react-icons/vsc';

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.projectCard}>
            <h3>&ensp;{name}&ensp;</h3>
            <div className={styles.innerCard}>
                <div>
                    <p>
                        <span>Orçamento:</span>
                        <br />
                        <span className={styles.projectBudget}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(budget)}</span>
                    </p>
                    <p className={styles.categoryText}>
                        <span className={styles[category.name.toLowerCase()]}></span> {category.name}
                    </p>
                    <p className={styles.projectNumber}>
                        <span>Nº</span> {id}
                    </p>
                </div>
                <div className={styles[category.name.toLowerCase()]}>
                    <VscPreview />
                </div>
            </div>
            <div className={styles.footerCard}>
                <Link to={`/project/${id}`}>
                    <BsPencil />
                    Editar
                </Link>
                <button onClick={() => handleRemove(id)}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    );
}
