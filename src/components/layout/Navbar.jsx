import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaMonero } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
    const [activeHome, setActiveHome] = useState(true);
    const [activeProjects, setActiveProjects] = useState();
    const [activeCompany, setActiveCompany] = useState();
    const [activeContact, setActiveContact] = useState();

    const handleToggleLink = linkNumber => {
        switch (linkNumber) {
            case 1:
                setActiveHome(true);
                setActiveProjects(false);
                setActiveCompany(false);
                setActiveContact(false);
                break;

            case 2:
                setActiveHome(false);
                setActiveProjects(true);
                setActiveCompany(false);
                setActiveContact(false);
                break;

            case 3:
                setActiveHome(false);
                setActiveProjects(false);
                setActiveCompany(true);
                setActiveContact(false);
                break;

            case 4:
                setActiveHome(false);
                setActiveProjects(false);
                setActiveCompany(false);
                setActiveContact(true);
                break;

            default:
                setActiveHome(false);
                setActiveProjects(false);
                setActiveCompany(false);
                setActiveContact(false);
                console.log(linkNumber);
                break;
        }
    };

    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <FaMonero className={styles.iconLogo} />
            </Link>
            <ul className={styles.list}>
                <li>
                    <Link onClick={() => handleToggleLink(1)} className={activeHome ? styles.activeLink : null} to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={() => handleToggleLink(2)} className={activeProjects ? styles.activeLink : null} to="/projects">
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link onClick={() => handleToggleLink(3)} className={activeCompany ? styles.activeLink : null} to="/company">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link onClick={() => handleToggleLink(4)} className={activeContact ? styles.activeLink : null} to="/contact">
                        Contato
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
