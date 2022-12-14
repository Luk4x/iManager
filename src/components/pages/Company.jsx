import styles from './Company.module.css';

import SubmitButton from '../form/SubmitButton';
import IManagerFooter from '../layout/IManagerFooter';

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
import { BsCreditCard2FrontFill, BsCheckLg, BsInstagram, BsTwitter, BsLinkedin, BsSpotify } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';

import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import AnimatedNumber from 'react-animated-number/build/AnimatedNumber';

import { useState, useRef, useEffect } from 'react';

export default function Company() {
    const [evolutionEnterpriseValue, setEvolutionEnterpriseValue] = useState(0);
    const [evolutionCollaboratorsValue, setEvolutionCollaboratorsValue] = useState(0);
    const [evolutionPresenceValue, setEvolutionPresenceValue] = useState(0);
    const evolutionSectionRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.onscroll = () => {
        const evolutionSectionOffset = evolutionSectionRef.current.offsetTop;
        const userOffset = window.scrollY;

        if (userOffset >= evolutionSectionOffset - 400) {
            setEvolutionEnterpriseValue(20);
            setEvolutionCollaboratorsValue(4);
            setEvolutionPresenceValue(99);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    }, []);

    return (
        <section className={styles.section}>
            <article className={styles.headerImage} id="companyHeader">
                <h2>Agente respira o novo</h2>
                <a href="#colorHighlight">
                    <SubmitButton>
                        <BiDownArrow />
                    </SubmitButton>
                </a>
            </article>
            <article id="colorHighlight" className={styles.colorHighlight}>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.6} delay={100} animatePreScroll={false}>
                    <h3>
                        Nascemos para fazer
                        <br />
                        diferente
                    </h3>
                    <p>
                        A iManager esta?? aqui para fazer aquilo que ningue??m conseguiu...
                        <br />
                        Para reunir em um Web App tudo que faz diferen??a na gest??o da sua empresa.
                    </p>
                </ScrollAnimation>
            </article>
            <article className={styles.simplicity} id="simplicity">
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Criamos o que simplifica a gest??o das empresas</h3>
                    <p>Simplificar ?? tirar as burocracias da frente e conectar as solu????es que a sua empresa precisa em um s?? lugar.</p>
                    <br />
                    <p>N??s da iManager percebemos uma dificuldade das empresas e viemos trazer a solu????o que ningu??m trouxe: Reunimos em um Web App tudo o que a sua empresa precisa para ter uma gest??o simples, segura e eficiente.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage2} alt="woman programmer working" />
                </ScrollAnimation>
            </article>
            <div className={styles.simplicityImageDown} id="simplicityImageDown">
                <MdMonitor />
                <p>Mais que um gerenciador, um Web App que simplifica a sua empresa.</p>
            </div>
            <article className={styles.services} id="services">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage4} alt="woman accountant working" />
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <div>
                        <h3>
                            Isso ?? <span>iManager</span>
                        </h3>
                        <p>
                            Descomplicamos o funcionamento da sua empresa <BsCheckLg />
                        </p>
                        <ul>
                            <li>
                                <MdAccountCircle /> Conta digital gratuita
                            </li>
                            <li>
                                <SiPlatzi /> Plataforma de gest??o de projetos
                            </li>
                            <li>
                                <MdLock /> Seguros para sua empresa
                            </li>
                            <li>
                                <RiShoppingBagFill /> Shopping com os melhores lojistas do Brasil
                            </li>
                            <li>
                                <BsCreditCard2FrontFill /> Cr??dito pra voc?? realizar seus projetos
                            </li>
                            <li>
                                <MdAirplaneTicket /> Passagens a??reas para seus clientes
                            </li>
                            <li>
                                <MdNetworkCell /> Operadora m??vel virtual pr??pria
                            </li>
                            <li>
                                <CgMathPlus /> E muuuuuito mais!
                            </li>
                        </ul>
                    </div>
                </ScrollAnimation>
            </article>
            <article className={styles.cards} id="cards">
                <h3>
                    O <span>iManager</span> tem tudo que voc?? precisa para gerir sua empresa.
                </h3>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <div className={styles.cardList}>
                        <div>
                            <MdOutlineSecurity />
                            <p>Seguran??a</p>
                        </div>
                        <div>
                            <SiFastapi />
                            <p>Agilidade</p>
                        </div>
                        <div>
                            <SiPowerbi />
                            <p>Efici??ncia</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </article>
            <article className={styles.gettingBetter} id="gettingBetter">
                <h3>Crescendo cada vez mais</h3>
                <p>Quem ?? da iManager pode contar com solu????es completas para todos os momentos.</p>
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
            <article className={styles.evolution} ref={evolutionSectionRef} id="evolution">
                <h3>N??meros da nossa evolu????o</h3>
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
                                    color: '#b3679b'
                                }}
                                duration={1200}
                                formatValue={v => v.toFixed(0)}
                            />{' '}
                            Milh??es
                        </h4>
                        <p>de empresas simplificando a gest??o, um n??mero que s?? cresce a cada dia.</p>
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
                                    color: '#b3679b'
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
                                    color: '#b3679b'
                                }}
                                duration={1800}
                                formatValue={v => v.toFixed(0)}
                            />
                            %
                        </h4>
                        <p>de presen??a nos munic??pios brasileiros.</p>
                    </div>
                </div>
            </article>
            <article className={styles.trajectory} id="trajectory">
                <div>
                    <h3>Nossa Trajet??ria</h3>
                    <p>Numa jornada com grandes transforma????es, cada momento ?? importante para continuarmos crescendo e inovando.</p>
                </div>
                {windowWidth > 600 ? (
                    <Carousel className={styles.carouselRoot} showArrows={true} showStatus={false} transitionTime={900} showThumbs={false} verticalSwipe="natural" swipeable={true} useKeyboardArrows={true} emulateTouch={true}>
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
                            <p>Lan??amos a Conta Digital iManagement e nos tornamos a primeira empresa de gest??o digital do pa??s.</p>
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
                            <p>Fomos a primeira empresa de gest??o digital a oferecer uma solu????o de gerenciamento corporativo gratuita, completa, aut??noma, simples e totalmente online.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2018</span>
                                2019
                                <span>2020</span>
                            </h4>
                            <p>Lan??amos oficialmente nossa plataforma de seguros e de gest??o, e criamos nossa pr??pria operadora m??vel virtual.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2019</span>
                                2020
                                <span>2021</span>
                            </h4>
                            <p>Estabelecemos parcerias com os melhores lojistas do Brasil e com conceituadas companhias a??reas.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2020</span>
                                2021
                                <span>2022</span>
                            </h4>
                            <p>Lan??amos oficialmente o iManager Empresas e criamos o plano iManager Plus.</p>
                        </div>
                        <div>
                            <h4>
                                <span>2021</span>
                                2022
                                <span>&emsp;&emsp;</span>
                            </h4>
                            <p>Migramos nossa base acion??ria para a Nasdaq, importante bolsa de valores americana, e atingimos a marca de 20 milh??es de cliente e lan??amos a Global Account.</p>
                        </div>
                    </Carousel>
                ) : (
                    <Carousel className={styles.carouselRoot} showArrows={true} showStatus={false} transitionTime={900} showThumbs={false} verticalSwipe="natural" swipeable={true} useKeyboardArrows={true} emulateTouch={true}>
                        <div>
                            <h4>1994</h4>
                            <p>Nasce o iManagement Enterprise e posteriormente o iManagement App.</p>
                        </div>
                        <div>
                            <h4>2015</h4>
                            <p>Lan??amos a Conta Digital iManagement e nos tornamos a primeira empresa de gest??o digital do pa??s.</p>
                        </div>
                        <div>
                            <h4>2017</h4>
                            <p>A iManagement Enterprise passa a ser iManager.</p>
                        </div>
                        <div>
                            <h4>2018</h4>
                            <p>Fomos a primeira empresa de gest??o digital a oferecer uma solu????o de gerenciamento corporativo gratuita, completa, aut??noma, simples e totalmente online.</p>
                        </div>
                        <div>
                            <h4>2019</h4>
                            <p>Lan??amos oficialmente nossa plataforma de seguros e de gest??o, e criamos nossa pr??pria operadora m??vel virtual.</p>
                        </div>
                        <div>
                            <h4>2020</h4>
                            <p>Estabelecemos parcerias com os melhores lojistas do Brasil e com conceituadas companhias a??reas.</p>
                        </div>
                        <div>
                            <h4>2021</h4>
                            <p>Lan??amos oficialmente o iManager Empresas e criamos o plano iManager Plus.</p>
                        </div>
                        <div>
                            <h4>2022</h4>
                            <p>Migramos nossa base acion??ria para a Nasdaq, importante bolsa de valores americana, e atingimos a marca de 20 milh??es de cliente e lan??amos a Global Account.</p>
                        </div>
                    </Carousel>
                )}
            </article>
            <article className={styles.sustainable} id="sustainable">
                <ScrollAnimation animateIn="animate__fadeInDown" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Ser sustent??vel ?? agilizar e incluir.</h3>
                    <p>Geramos valor n??o s?? para nossos clientes, mas tamb??m para colaboradores, investidores e para a sociedade como um todo. Sempre alinhados com nossos pilares de gest??o, Ambiental, Social e Governan??a.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <img src={CompanyImage6} alt="wind energy" />
                </ScrollAnimation>
            </article>
            <article className={styles.recognition} id="recognition">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true} duration={2} delay={100} animatePreScroll={false}>
                    <Carousel className={styles.secondCarousel} showArrows={true} showStatus={false} transitionTime={1000} showThumbs={false} autoPlay>
                        <div className={styles.carouselItem}>
                            <img src={iBestImage} alt="iBest award image" />
                            <div>
                                <h4>Pr??mio iBest</h4>
                                <p>Recebemos os Pr??mios de Melhor Gestora Digital do Brasil pelo j??ri popular, Melhor Web App e Top 3 Gestores Digitais pelo j??ri da Academia iBest.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={reclameAquiImage} alt="reclame aqui award image" />
                            <div>
                                <h4>Reclame Aqui</h4>
                                <p>Fomos eleitos o 2?? melhor atendimento do Brasil por voto popular pelo segundo ano consecutivo - categoria de Gestores Digitais.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={joaoVitorMeninImage} alt="Jo??o Vitor Menin image" />
                            <div>
                                <h4>Forbes Brasil</h4>
                                <p>Jo??o Vitor Menin foi eleito um dos 10 l??deres que melhor mantiveram ou elevaram a relev??ncia de suas marcas e os indicadores de seus neg??cios em meio a crise.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={humanizadasImage} alt="Humanizadas award image" />
                            <div>
                                <h4>Melhores para o Brasil</h4>
                                <p>Fomos reconhecidos pela Humanizadas como uma organiza????o aberta aos feedbacks e agente de transforma????o social e ambiental que soluciona problemas reais.</p>
                            </div>
                        </div>
                        <div className={styles.carouselItem}>
                            <img src={seloOuroGHGImage} alt="Selo Ouro GHG Protocol award image" />
                            <div>
                                <h4>Selo Ouro GHG Protocol</h4>
                                <p>Pela segunda vez consecutiva o iManager teve seu Invent??rio de emiss??es de gases de Efeito Estufa (GEE) reconhecido com o Selo Ouro do GHG Protocol, refor??ando nosso compromisso com o desenvolvimento sustent??vel.</p>
                            </div>
                        </div>
                    </Carousel>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true} duration={1.8} delay={100} animatePreScroll={false}>
                    <h3>Pr??mios e reconhecimentos</h3>
                    <p>Somos reconhecidos e premiados em diversas ??reas, por nossas a????es inovadoras e focadas em impactar positivamente a vida das pessoas, a gest??o das empresas, e o mundo.</p>
                </ScrollAnimation>
            </article>
            <article className={styles.partnership} id="partnership">
                <h3>Imprensa e Parcerias</h3>
                <p>Pedidos de imprensa, parcerias e mais informa????es? Fale com a gente.</p>
                <div className={styles.partnershipInfo}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={100} animatePreScroll={false}>
                        <h4>Para informa????es e entrevistas</h4>
                        <p>Mande um e-mail para nossa assessoria de imprensa:</p>
                        <a href="mailto:#">imprensa@iManager.com.br</a>
                        <a href="mailto:#">iManager@idealhks.com</a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={600} animatePreScroll={false}>
                        <h4>Press Kit e Guia da Marca</h4>
                        <p>Acesse nosso guia caso precise utilizar nossa marca e nossos materiais visuais.</p>
                        <a href="#">
                            <button>
                                <span>Baixar material</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1800} animatePreScroll={false}>
                        <h4>Para patroc??nios</h4>
                        <p>Mande um e-mail para:</p>
                        <a href="mailto:#">patrocinios@iManager.com.br</a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1100} animatePreScroll={false}>
                        <h4>Fotos institucionais</h4>
                        <p>O melhor do Inter para voc??. Nossa galeria de fotos ?? sua disposi????o.</p>
                        <a href="#">
                            <button>
                                <span>Baixar fotos</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                </div>
            </article>
            <article className={styles.news} id="news">
                <h3>Fique por dentro das nossas novidades</h3>
                <p>
                    <a href="#">Acompanhe nosso blog</a> e nossas redes sociais para ficar por dentro do que acontece aqui no Inter.
                </p>
                <div className={styles.newsInfo}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={600} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsInstagram />
                            <h4>Instagram</h4>
                        </div>
                        <p>Acompanhe as nossas novidades!</p>
                        <a href="#">
                            <button>
                                <span>Siga o nosso Instagram</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={100} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsLinkedin />
                            <h4>LinkedIn</h4>
                        </div>
                        <p>O iManager se conecta. Fa??a parte da nossa comunidade.</p>
                        <a href="#">
                            <button>
                                <span>Junte-se ?? comunidade</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1100} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsSpotify />
                            <h4>Spotify</h4>
                        </div>
                        <p>Podcast semanal sobre gest??o!</p>
                        <a href="#">
                            <button>
                                <span>Ou??a agora mesmo</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} duration={1} delay={1800} animatePreScroll={false}>
                        <div className={styles.newsInfoTitleContainer}>
                            <BsTwitter />
                            <h4>Twitter</h4>
                        </div>
                        <p>Simplifique a sua empresa ao conferir nossas novidades.</p>
                        <a href="#">
                            <button>
                                <span>Fique por dentro</span>
                                <FiArrowUpRight />
                            </button>
                        </a>
                    </ScrollAnimation>
                </div>
            </article>
            <IManagerFooter />
        </section>
    );
}
