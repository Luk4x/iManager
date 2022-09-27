import styles from './Contact.module.css';

import MobileAppHelpCenterShowCase from '../layout/MobileAppHelpCenterShowCase';
import DesktopHelpCenterShowCase from '../layout/DesktopHelpCenterShowCase';
import IManagerFooter from '../layout/IManagerFooter';

import { BiSupport } from 'react-icons/bi';
import { MdOutlineContactSupport, MdOutlineMonitor } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';
import { BsFillTelephoneFill, BsFillTelephonePlusFill, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { FaFacebookF, FaHandsHelping, FaHashtag, FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

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
                        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={2} delay={100} animatePreScroll={false}>
                            <p>
                                Navegue até a <span className={styles.borderBottom}>Central de Ajuda</span>. Nela, você pode pesquisar suas dúvidas, ler os conteúdos que dividimos por tópicos e serviços, e também acessar o <span className={styles.bold}>Chat</span> clicando na <span className={`${styles.bold} ${styles.color}`}>Sheele</span>.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className={styles.desktopHelpCenterShowCase}>
                    <DesktopHelpCenterShowCase />
                    <div className={styles.desktopHelpCenterShowCaseDesc}>
                        <div>
                            <MdOutlineMonitor />
                            <h3>No Site</h3>
                        </div>
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={2} animatePreScroll={false}>
                            <p>
                                Você pode tanto acessar nossa página de <span className={styles.borderBottom}>FAQ</span> para pesquisar sua dúvida pelos artigos, quanto clicar na <span className={`${styles.bold} ${styles.color}`}>Sheele</span>, no canto inferior direito desta página, para acessar o <span className={styles.bold}>Chat</span>.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </article>
            <div className={styles.relationshipCenterBackground}>
                <article className={styles.relationshipCenter}>
                    <h2>Central de Relacionamento</h2>
                    <p>Se quiser falar com a gente por telefone, nosso setor de atendimento está disponível a qualquer hora, é só ligar em um dos números abaixo:</p>
                    <div className={styles.serviceSector}>
                        <BsFillTelephoneFill />
                        <ul>
                            <li>
                                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={100} animatePreScroll={false}>
                                    <a href="tel:#">9009 9999</a>
                                    <p>
                                        Capitais e regiões
                                        <br />
                                        metropolitanas
                                    </p>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={600} animatePreScroll={false}>
                                    <a href="tel:#">0800 099 9999</a>
                                    <p>Demais localidades</p>
                                </ScrollAnimation>
                            </li>
                            <li>
                                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1100} animatePreScroll={false}>
                                    <a href="tel:#">0800 999 9999</a>
                                    <p>Deficiente de fala e audição</p>
                                </ScrollAnimation>
                            </li>
                        </ul>
                    </div>
                    <h3>SAC (24 horas)</h3>
                    <p>Para registrar sugestões, reclamações ou para fazer algum cancelamento, o SAC é o canal de atendimento ideal. Disponível todos os dias, 24h por dia.</p>
                    <div className={styles.sacChannel}>
                        <BsFillTelephonePlusFill />
                        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={1} delay={400} animatePreScroll={false}>
                            <a href="tel:#">0800 909 9999</a>
                        </ScrollAnimation>
                    </div>
                    <h3>Ouvidoria</h3>
                    <p>Já entrou em contato com o Banco Inter mas não conseguiu resolver o seu problema? Nossa ouvidoria é um canal de comunicação de segunda instância.</p>
                    <p>Segunda a sexta - 9h00 às 18h00</p>
                    <div className={styles.ombudsmanSector}>
                        <BsFillTelephoneFill />
                        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={1} delay={400} animatePreScroll={false}>
                            <a href="tel:#">0800 990 9999</a>
                        </ScrollAnimation>
                    </div>
                    <p>
                        Para conhecer mais sobre esse canal e o passo a passo para o atendimento, acesse a <a href="#?">página da ouvidoria</a>.
                    </p>
                </article>
            </div>
            <article className={styles.investmentsHelp}>
                <div className={styles.investmentsHelpDesc}>
                    <h2>Precisa de ajuda relacionada a investimentos?</h2>
                    <p>
                        Além de falar com a gente pelos nossos <a href="#?">canais de atendimento</a>, você também pode entrar em contato com a <span className={styles.bold}>CVM</span> e com a <span className={styles.bold}>BSM</span>. Consulte também a <a href="#?">lista de documentos</a> que serão solicitados pela CVM.
                    </p>
                </div>
                <div className={styles.investmentsHelpLinks}>
                    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                        <FiPaperclip />
                        <div className={styles.investmentsHelpLinksDesc}>
                            <p>
                                <span>CVM - Comissão de Valores Mobiliários</span>
                            </p>
                            <a href="#?">Serviço de Atendimento ao Cidadão</a>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={500} animatePreScroll={false}>
                        <FiPaperclip />
                        <div className={styles.investmentsHelpLinksDesc}>
                            <p>
                                <span>BSM Supervisão de Mercados</span>
                            </p>
                            <a href="#?">MRP - Mecanismo de Ressarcimento de Prejuízos</a>
                        </div>
                    </ScrollAnimation>
                </div>
            </article>
            <div className={styles.iManagerSocialsBackground}>
                <article className={styles.iManagerSocials}>
                    <div>
                        <h2>Redes sociais</h2>
                        <p>Siga o iManager nas redes sociais e fique por dentro de todas as novidades da sua Conta Digital. Lembre-se: para sua segurança, verifique sempre o selo oficial das nossas redes! Assim você tem a certeza de que somos nós falando com você.</p>
                        <p>
                            Estamos sempre à disposição para tirar as suas dúvidas. <span className={styles.bold}>#contacomagente</span>
                        </p>
                        <div className={styles.iManagerSocialsIcons}>
                            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.5} delay={300} animatePreScroll={false}>
                                <a href="#?">
                                    <FaFacebookF />
                                </a>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.5} delay={600} animatePreScroll={false}>
                                <a href="#?">
                                    <AiFillInstagram />
                                </a>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.5} delay={900} animatePreScroll={false}>
                                <a href="#?">
                                    <BsTwitter />
                                </a>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.5} delay={1200} animatePreScroll={false}>
                                <a href="#?">
                                    <FaLinkedinIn />
                                </a>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.5} delay={1500} animatePreScroll={false}>
                                <a href="#?">
                                    <BsYoutube />
                                </a>
                            </ScrollAnimation>
                        </div>
                        <div className={styles.hashTag}>
                            <FaHashtag />
                            <div>
                                <h4>contacomagente</h4>
                                <p>O blog da Conta Digital do iManager</p>
                            </div>
                        </div>
                    </div>
                    <FaHandsHelping />
                </article>
            </div>
            <IManagerFooter />
        </section>
    );
}
