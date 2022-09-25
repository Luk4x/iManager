import styles from './Contact.module.css';

import MobileAppHelpCenterShowCase from '../layout/MobileAppHelpCenterShowCase';
import DesktopHelpCenterShowCase from '../layout/DesktopHelpCenterShowCase';

import { BiSupport } from 'react-icons/bi';
import { MdOutlineContactSupport, MdOutlineMonitor } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';

export default function Contact() {
    return (
        <section className={styles.section}>
            <article className={styles.contactHeader} id="contactHeader">
                <div>
                    <BiSupport />
                    <p>Canais de Atendimento</p>
                </div>
                <h3>Quer falar com agente?</h3>
            </article>
            <article className={styles.helpCenter} id="helpCenter">
                <div>
                    <h2>Central de Ajuda e Chat</h2>
                    <p>
                        Na <span className={styles.bold}>Central de Ajuda</span> você encontra artigos para as perguntas mais frequentes, escritos pela nossa equipe de atendimento.
                    </p>
                    <p>
                        Ainda não achou a resposta que precisa? A <span className={`${styles.bold} ${styles.color}`}>Sheele</span>, nossa Bot de Atendimento, tira todas suas dúvidas sobre a Conta Digital no <span className={styles.bold}>Chat</span>, e se precisar, ela transfere sua conversa para um de nosso atendentes.
                    </p>
                    <p>
                        <span className={styles.bold}>Funcionamento do chat:</span>
                        <br />O atendimento no chat acontece 24h, 7 dias por semana.
                    </p>
                </div>
                <MdOutlineContactSupport />
            </article>
            <article className={styles.helpCenterShowCase} id="helpCenterShowcase">
                <div className={styles.mobileHelpCenterShowCase}>
                    <MobileAppHelpCenterShowCase />
                    <div className={styles.mobileHelpCenterShowCaseDesc}>
                        <GiSmartphone />
                        <h3>No App</h3>
                        <p>
                            Navegue até a <span className={styles.borderBottom}>Central de Ajuda</span>. Nela, você pode pesquisar suas dúvidas, ler os conteúdos que dividimos por tópicos e serviços, e também acessar o <span className={styles.bold}>Chat</span> clicando na <span className={`${styles.bold} ${styles.color}`}>Sheele</span>.
                        </p>
                    </div>
                </div>
                <div className={styles.desktopHelpCenterShowCase}>
                    <DesktopHelpCenterShowCase />
                    <div className={styles.desktopHelpCenterShowCaseDesc}>
                        <div>
                            <MdOutlineMonitor />
                            <h3>No Site</h3>
                        </div>
                        <p>
                            Você pode tanto acessar nossa página de <span className={styles.borderBottom}>FAQ</span> para pesquisar sua dúvida pelos artigos, quanto clicar na <span className={`${styles.bold} ${styles.color}`}>Sheele</span>, no canto inferior direito desta página, para acessar o <span className={styles.bold}>Chat</span>.
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}
