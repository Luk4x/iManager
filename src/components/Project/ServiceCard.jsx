import styles from './ProjectCard.module.css';
import styles2 from './Service.module.css';

import { Link } from 'react-router-dom';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { MdMiscellaneousServices } from 'react-icons/md';

export default function ServiceCard({ id, name, cost, desc, ProjectCategory, handleRemove, handleEdit }) {
    return (
        <div className={styles.projectCard}>
            <h3>{name}</h3>
            <div className={styles2.innerCard}>
                <div className={`${styles2.innerCardHeader} ${styles2[ProjectCategory.toLowerCase()]}`}>
                    <p>
                        <span>Custo:</span>
                        <br />
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cost)}
                    </p>
                    <MdMiscellaneousServices />
                </div>
                <p>
                    <span>Descrição:</span>
                    <br />
                    {desc}
                </p>
            </div>
            <div className={styles.footerCard}>
                <button onClick={() => handleEdit(id)}>
                    <BsPencil />
                    Editar
                </button>
                <button onClick={() => handleRemove(id, cost)}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    );
}
