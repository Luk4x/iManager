import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaMonero } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <FaMonero className={styles.iconLogo} />
            </Link>
            <ul className={styles.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projetos</Link>
                </li>
                <li>
                    <Link to="/company">Sobre</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}
