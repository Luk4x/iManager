import { BsLine, BsLinkedin, BsGithub, BsWhatsapp, BsTelegram, BsInstagram, BsDiscord } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <ul className={styles.socials}>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/lucasmacielf/">
                            <BsLinkedin />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/Luk4x">
                            <BsGithub />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="mailto:luk4xm4ci3l@gmail.com">
                            <SiGmail />
                        </a>
                    </li>
                </ul>
                <ul className={styles.socials}>
                    <li>
                        <a target="_blank" href="https://wa.me/5522996112570?text=Yo,%20sinta-se%20livre%20para%20entrar%20em%20contato%20comigo.">
                            <BsWhatsapp />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://t.me/lu_k4x">
                            <BsTelegram />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.instagram.com/lu_k4x/">
                            <BsInstagram />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href="https://line.me/ti/p/9DbuEDA6O7">
                            <BsLine />
                        </a>
                    </li>
                    <li>
                        <button onClick={() => navigator.clipboard.writeText('Luk4x#5068')}>
                            <abbr title="Copy: Luk4x#5068">
                                <BsDiscord />
                            </abbr>
                        </button>
                    </li>
                </ul>
            </div>
            <p>
                <span>iManager</span> &copy; 2022 — <span>developed by</span>{' '}
                <a href="https://github.com/Luk4x" target="_blank">
                    Luk4x
                </a>
            </p>
        </footer>
    );
}
