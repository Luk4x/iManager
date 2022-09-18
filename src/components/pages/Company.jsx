import styles from './Company.module.css';

import SubmitButton from '../form/SubmitButton';
import CompanyImage2 from '../../assets/companyImage2.jpg';
import CompanyImage4 from '../../assets/companyImage4.jpg';

import { BiDownArrow } from 'react-icons/bi';
import { MdMonitor, MdAccountCircle, MdLock, MdAirplaneTicket, MdNetworkCell, MdOutlineSecurity } from 'react-icons/md';
import { SiPlatzi, SiFastapi, SiPowerbi } from 'react-icons/si';
import { CgMathPlus } from 'react-icons/cg';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsCreditCard2FrontFill, BsCheckLg } from 'react-icons/bs';

import ScrollAnimation from 'react-animate-on-scroll';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <h3>Nascemos para fazer diferente</h3>
                    <p>
                        A iManager está aqui para fazer aquilo que ninguém conseguiu...
                        <br />
                        Para reunir em um Web App tudo que faz diferença na gestão da sua empresa.
                    </p>
                </ScrollAnimation>
            </article>
            <article className={styles.simplicity}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
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
            <article className={styles.services}>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
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
            <article className={styles.cards}>
                <h3>
                    O <span>iManager</span> tem tudo que você precisa para gerir sua empresa.
                </h3>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className={styles.cardList}>
                        <div>
                            <MdOutlineSecurity />
                            <p>Segurança</p>
                        </div>
                        <div>
                            <SiFastapi />
                            <p>Agilidade</p>
                        </div>
                        <div>
                            <SiPowerbi />
                            <p>Eficiência</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </article>
            <article className={styles.gettingBetter}>
                <h3>Crescendo cada vez mais</h3>
                <p>Quem é da iManager pode contar com soluções completas para todos os momentos.</p>
                <ul>
                    <li>
                        <span>iManager</span> App
                    </li>
                    <li>
                        <span>iManager</span> Seguros
                    </li>
                    <li>
                        <span>iManager</span> Plus
                    </li>
                    <li>
                        <span>iManager</span> Cel
                    </li>
                    <li>
                        <span>iManager</span> Empresas
                    </li>
                    <li>
                        <span>iManager</span> Shop
                    </li>
                </ul>
            </article>
            <article className={styles.evolution}>
                <h3>Números da nossa evolução</h3>
                <div className={styles.evolutionCardsList}>
                    <div>
                        <h4>+ de 20 Milhões</h4>
                        <p>de empresas simplificando a gestão, um número que só cresce a cada dia.</p>
                    </div>
                    <div>
                        <h4>
                            + de <br />4 mil
                        </h4>
                        <p>colaboradores fazem parte da iManager.</p>
                    </div>
                    <div>
                        <h4>99%</h4>
                        <p>de presença nos municípios brasileiros.</p>
                    </div>
                </div>
            </article>
            <article id="now" className={styles.trajectory}>
                <div>
                    <h3>Nossa Trajetória</h3>
                    <p>Numa jornada com grandes transformações, cada momento é importante para continuarmos crescendo e inovando.</p>
                </div>
                <Carousel className={styles.carouselRoot} showArrows={true} showStatus={false} transitionTime={800}>
                    <div>
                        <h4>1994</h4>
                        <p>Nasce o iManagement Enterprise e posteriormente o iManagement App.</p>
                    </div>
                    <div>
                        <h4>2015</h4>
                        <p>Lançamos a Conta Digital iManagement e nos tornamos a primeira empresa de gestão digital do país.</p>
                    </div>
                    <div>
                        <h4>2017</h4>
                        <p>A iManagement Enterprise passa a ser iManager.</p>
                    </div>
                    <div>
                        <h4>2018</h4>
                        <p>Fomos a primeira empresa de gestão digital a oferecer uma solução de gerenciamento corporativo gratuita, completa, autônoma, simples e totalmente online.</p>
                    </div>
                    <div>
                        <h4>2019</h4>
                        <p>Lançamos oficialmente nossa plataforma de seguros e de gestão, e criamos nossa própria operadora móvel virtual.</p>
                    </div>
                    <div>
                        <h4>2020</h4>
                        <p>Estabelecemos parcerias com os melhores lojistas do Brasil e com conceituadas companhias aéreas.</p>
                    </div>
                    <div>
                        <h4>2021</h4>
                        <p>Lançamos oficialmente o iManager Empresas e criamos o plano iManager Plus.</p>
                    </div>
                    <div>
                        <h4>2022</h4>
                        <p>Migramos nossa base de dados e atingimos a marca de 20 milhões de cliente e lançamos a Global Account.</p>
                    </div>
                </Carousel>
            </article>
        </section>
    );
}

/* <p>O iManager é um gerenciador de custo baseado na Web que visa auxiliar empresas em sua gestão de projetos.</p>
<p>Nós da iManager percebemos uma dificuldade das empresas e estamos aqui trazendo a solução que ninguém trouxe: Reunimos em uma Aplicação Web tudo o que a sua empresa precisa para ter uma gestão simples, segura e eficiente.</p> */
