import styles from './Company.module.css';

import SubmitButton from '../form/SubmitButton';
import CompanyImage2 from '../../assets/companyImage2.jpg';
import CompanyImage4 from '../../assets/companyImage4.jpg';

import { BiDownArrow } from 'react-icons/bi';
import { MdMonitor, MdAccountCircle, MdLock, MdAirplaneTicket, MdNetworkCell } from 'react-icons/md';
import { SiPlatzi } from 'react-icons/si';
import { CgMathPlus } from 'react-icons/cg';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsCreditCard2FrontFill, BsCheckLg } from 'react-icons/bs';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Company() {
    return (
        <section className={styles.section}>
            <article className={styles.headerImage}>
                <h2>Agente respira o novo</h2>
                <a href="#colorHighlight">
                    <SubmitButton>
                        <BiDownArrow />
                    </SubmitButton>
                </a>
            </article>
            <article id="colorHighlight" className={styles.colorHighlight}>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <h3>Nascemos para fazer diferente</h3>
                    <p>
                        A iManager está aqui para fazer aquilo que ninguém conseguiu...
                        <br />
                        Para reunir em um Web App tudo que faz diferença na gestão da sua empresa.
                    </p>
                </ScrollAnimation>
            </article>
            <article className={styles.simplicity}>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <div>
                        <h3>Criamos o que simplifica a gestão das empresas</h3>
                        <p>Simplificar é tirar as burocracias da frente e conectar as soluções que a sua empresa precisa em um só lugar.</p>
                    </div>
                    <img src={CompanyImage2} alt="woman programmer working" />
                </ScrollAnimation>
            </article>
            <div className={styles.simplicityImageDown}>
                <MdMonitor />
                <p>Mais que um gerenciador, um Web App que simplifica a sua empresa.</p>
            </div>
            <article id="now" className={styles.services}>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <img src={CompanyImage4} alt="woman accountant working" />
                    <div>
                        <h3>
                            Isso é <span>iManager</span>
                        </h3>
                        <p>
                            Descomplicamos o funcionamento da sua empresa <BsCheckLg />
                        </p>
                        <ul>
                            <li>
                                <MdAccountCircle /> Conta digital gratuita
                            </li>
                            <li>
                                <SiPlatzi /> Plataforma de gestão de projetos
                            </li>
                            <li>
                                <MdLock /> Seguros para sua empresa
                            </li>
                            <li>
                                <RiShoppingBagFill /> Shopping com os melhores lojistas do Brasil
                            </li>
                            <li>
                                <BsCreditCard2FrontFill /> Crédito pra você realizar seus projetos
                            </li>
                            <li>
                                <MdAirplaneTicket /> Passagens aéreas para seus clientes
                            </li>
                            <li>
                                <MdNetworkCell /> Operadora móvel virtual própria
                            </li>
                            <li>
                                <CgMathPlus /> E muuuuuito mais!
                            </li>
                        </ul>
                    </div>
                </ScrollAnimation>
            </article>
        </section>
    );
}

/* <p>O iManager é um gerenciador de custo baseado na Web que visa auxiliar empresas em sua gestão de projetos.</p>
<p>Nós da iManager percebemos uma dificuldade das empresas e estamos aqui trazendo a solução que ninguém trouxe: Reunimos em uma Aplicação Web tudo o que a sua empresa precisa para ter uma gestão simples, rápida e prática.</p> */
