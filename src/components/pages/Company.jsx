import styles from './Company.module.css';

import SubmitButton from '../form/SubmitButton';
import CompanyImage2 from '../../assets/companyImage2.jpg';
import CompanyImage4 from '../../assets/companyImage4.jpg';
import CompanyImage6 from '../../assets/companyImage6.jpg';
import iBestImage from '../../assets/iBestImage.png';
import reclameAquiImage from '../../assets/reclameAquiImage.png';
import joaoVitorMeninImage from '../../assets/joaoVitorMeninImage.png';
import humanizadasImage from '../../assets/humanizadasImage.png';
import seloOuroGHGImage from '../../assets/seloOuroGHGImage.png';

import { BiDownArrow } from 'react-icons/bi';
import { MdMonitor, MdAccountCircle, MdLock, MdAirplaneTicket, MdNetworkCell, MdOutlineSecurity } from 'react-icons/md';
import { SiPlatzi, SiFastapi, SiPowerbi } from 'react-icons/si';
import { CgMathPlus } from 'react-icons/cg';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsCreditCard2FrontFill, BsCheckLg } from 'react-icons/bs';

import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import AnimatedNumber from 'react-animated-number/build/AnimatedNumber';

import { useState, useRef } from 'react';

export default function Company() {
    const [evolutionEnterpriseValue, setEvolutionEnterpriseValue] = useState(0);
    const [evolutionCollaboratorsValue, setEvolutionCollaboratorsValue] = useState(0);
    const [evolutionPresenceValue, setEvolutionPresenceValue] = useState(0);
    const evolutionSectionRef = useRef(null);

    window.onscroll = () => {
        const evolutionSectionOffset = evolutionSectionRef.current.offsetTop;
        const userOffset = window.scrollY;

        if (userOffset >= evolutionSectionOffset - 400) {
            setEvolutionEnterpriseValue(20);
            setEvolutionCollaboratorsValue(4);
            setEvolutionPresenceValue(99);
        }
    };
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
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.6} delay={100} animatePreScroll={false}>
                    <h3>Nascemos para fazer diferente</h3>
                    <p>
                        A iManager está aqui para fazer aquilo que ninguém conseguiu...
                        <br />
                        Para reunir em um Web App tudo que faz diferença na gestão da sua empresa.
                    </p>
                </ScrollAnimation>
            </article>
            <article className={styles.simplicity}>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Criamos o que simplifica a gestão das empresas</h3>
                    <p>Simplificar é tirar as burocracias da frente e conectar as soluções que a sua empresa precisa em um só lugar.</p>
                    <br />
                    <p>Nós da iManager percebemos uma dificuldade das empresas viemos trazer a solução que ninguém trouxe: Reunimos em um Web App tudo o que a sua empresa precisa para ter uma gestão simples, segura e eficiente.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage2} alt="woman programmer working" />
                </ScrollAnimation>
            </article>
            <div className={styles.simplicityImageDown}>
                <MdMonitor />
                <p>Mais que um gerenciador, um Web App que simplifica a sua empresa.</p>
            </div>
            <article className={styles.services}>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage4} alt="woman accountant working" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
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
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
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
            <article className={styles.evolution} ref={evolutionSectionRef}>
                <h3>Números da nossa evolução</h3>
                <div className={styles.evolutionCardsList}>
                    <div>
                        <h4>
                            + de{' '}
                            <AnimatedNumber
                                value={evolutionEnterpriseValue}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#4f5d75'
                                }}
                                duration={1200}
                                formatValue={v => v.toFixed(0)}
                            />{' '}
                            Milhões
                        </h4>
                        <p>de empresas simplificando a gestão, um número que só cresce a cada dia.</p>
                    </div>
                    <div>
                        <h4>
                            + de <br />{' '}
                            <AnimatedNumber
                                value={evolutionCollaboratorsValue}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#4f5d75'
                                }}
                                duration={900}
                                formatValue={v => v.toFixed(0)}
                            />{' '}
                            mil
                        </h4>
                        <p>colaboradores fazem parte da iManager.</p>
                    </div>
                    <div>
                        <h4>
                            <AnimatedNumber
                                value={evolutionPresenceValue}
                                style={{
                                    transitionProperty: 'all',
                                    transition: '1s ease-out',
                                    fontSize: 60,
                                    borderBottom: '2px solid #b3679b',
                                    color: '#4f5d75'
                                }}
                                duration={1800}
                                formatValue={v => v.toFixed(0)}
                            />
                            %
                        </h4>
                        <p>de presença nos municípios brasileiros.</p>
                    </div>
                </div>
            </article>
            <article className={styles.trajectory}>
                <div>
                    <h3>Nossa Trajetória</h3>
                    <p>Numa jornada com grandes transformações, cada momento é importante para continuarmos crescendo e inovando.</p>
                </div>
                <Carousel className={styles.carouselRoot} showArrows={true} showStatus={false} transitionTime={900} showThumbs={false}>
                    <div>
                        <h4>
                            <span>&emsp;&emsp;</span>
                            1994
                            <span>2015</span>
                        </h4>
                        <p>Nasce o iManagement Enterprise e posteriormente o iManagement App.</p>
                    </div>
                    <div>
                        <h4>
                            <span>1994</span>
                            2015
                            <span>2017</span>
                        </h4>
                        <p>Lançamos a Conta Digital iManagement e nos tornamos a primeira empresa de gestão digital do país.</p>
                    </div>
                    <div>
                        <h4>
                            <span>2015</span>
                            2017
                            <span>2018</span>
                        </h4>
                        <p>A iManagement Enterprise passa a ser iManager.</p>
                    </div>
                    <div>
                        <h4>
                            <span>2017</span>
                            2018
                            <span>2019</span>
                        </h4>
                        <p>Fomos a primeira empresa de gestão digital a oferecer uma solução de gerenciamento corporativo gratuita, completa, autônoma, simples e totalmente online.</p>
                    </div>
                    <div>
                        <h4>
                            <span>2018</span>
                            2019
                            <span>2020</span>
                        </h4>
                        <p>Lançamos oficialmente nossa plataforma de seguros e de gestão, e criamos nossa própria operadora móvel virtual.</p>
                    </div>
                    <div>
                        <h4>
                            <span>2019</span>
                            2020
                            <span>2021</span>
                        </h4>
                        <p>Estabelecemos parcerias com os melhores lojistas do Brasil e com conceituadas companhias aéreas.</p>
                    </div>
                    <div>
                        <h4>
                            <span>2020</span>
                            2021
                            <span>2022</span>
                        </h4>
                        <p>Lançamos oficialmente o iManager Empresas e criamos o plano iManager Plus.</p>
                    </div>
                    <div>
                        <h4>
                            <span>2021</span>
                            2022
                            <span>&emsp;&emsp;</span>
                        </h4>
                        <p>Migramos nossa base de dados e atingimos a marca de 20 milhões de cliente e lançamos a Global Account.</p>
                    </div>
                </Carousel>
            </article>
            <article id="now" className={styles.sustainable}>
                <ScrollAnimation animateIn="animate__fadeDown" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Ser sustentável é agilizar e incluir.</h3>
                    <p>Geramos valor não só para nossos clientes, mas também para colaboradores, investidores e para a sociedade como um todo. Sempre alinhados com nossos pilares de gestão, Ambiental, Social e Governança.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage6} alt="wind energy" />
                </ScrollAnimation>
            </article>
            <article className={styles.recognition}>
                <ScrollAnimation animateIn="animate__pulse" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <Carousel className={styles.secondCarousel} showArrows={true} showStatus={false} transitionTime={500} showThumbs={false}>
                        <div className={styles.carouselItem}>
                            <img src={iBestImage} alt="iBest award image" />
                            <div>
                                <h4>Prêmio iBest</h4>
                                <p>Recebemos os Prêmios de Melhor Gestora Digital do Brasil pelo júri popular, Melhor Web App e Top 3 Gestores Digitais pelo júri da Academia iBest.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={reclameAquiImage} alt="reclame aqui award image" />
                            <div>
                                <h4>Prêmio Reclame Aqui</h4>
                                <p>Fomos eleitos o 2º melhor atendimento do Brasil por voto popular pelo segundo ano consecutivo - categoria de Gestores Digitais.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={joaoVitorMeninImage} alt="João Vitor Menin image" />
                            <div>
                                <h4>Forbes Brasil</h4>
                                <p>João Vitor Menin foi eleito um dos 10 líderes que melhor mantiveram ou elevaram a relevância de suas marcas e os indicadores de seus negócios em meio a crise.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={humanizadasImage} alt="Humanizadas award image" />
                            <div>
                                <h4>Melhores para o Brasil</h4>
                                <p>Fomos reconhecidos pela Humanizadas como uma organização aberta aos feedbacks e agente de transformação social e ambiental que soluciona problemas reais.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={seloOuroGHGImage} alt="Selo Ouro GHG Protocol award image" />
                            <div>
                                <h4>Selo Ouro GHG Protocol</h4>
                                <p>Pela segunda vez consecutiva o iManager teve seu Inventário de emissões de gases de Efeito Estufa (GEE) reconhecido com o Selo Ouro do GHG Protocol, reforçando nosso compromisso com o desenvolvimento sustentável.</p>
                            </div>
                        </div>
                    </Carousel>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Prêmios e reconhecimentos</h3>
                    <p>Somos reconhecidos e premiados em diversas áreas, por nossas ações inovadoras e focadas em impactar positivamente a vida das pessoas, a gestão das empresas, e o mundo.</p>
                </ScrollAnimation>
            </article>
        </section>
    );
}
