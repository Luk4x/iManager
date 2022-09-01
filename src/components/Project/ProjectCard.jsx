import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { VscPreview } from 'react-icons/vsc';

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.projectCard}>
            <h3>{name}</h3>
            <div className={styles.innerCard}>
                <div>
                    <p>
                        <span>Orçamento:</span>
                        <br />
                        &ensp;R${budget}
                    </p>
                    <p className={styles.categoryText}>
                        <span className={styles[category.name.toLowerCase()]}></span> {category.name}
                    </p>
                    <p className={styles.projectNumber}>
                        <span>Nº</span> {id}
                    </p>
                </div>
                <VscPreview />
            </div>
            <div className={styles.footerCard}>
                <Link to="/">
                    <BsPencil />
                    Editar
                </Link>
                <button>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    );
}
