import styles from './MobileAppHelpCenterShowCase.module.css';

import sheeleImage from '../../assets/sheeleImage.png';

import { BsReception4, BsWifi, BsBatteryFull, BsArrowLeft, BsQuestionSquareFill, BsSearch, BsCreditCard2FrontFill } from 'react-icons/bs';
import { RiShoppingBagFill, RiMessage3Fill } from 'react-icons/ri';
import { MdLock, MdAirplaneTicket, MdNetworkCell, MdPayments, MdAttachMoney, MdBusinessCenter, MdAccountCircle } from 'react-icons/md';
import { CgMathPlus } from 'react-icons/cg';
import { VscPackage, VscPreview } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineAudio } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import 'animate.css/animate.min.css';

import { useState, useRef } from 'react';

export default function MobileAppHelpCenterShowCase() {
    const searchInputContainer = useRef();
    const mobileContainer = useRef();
    const [activeChatBot, setActiveChatBot] = useState(false);

    const chatBotInput = useRef();
    const [chatBotInputValue, setChatBotInputValue] = useState('');

    const chatBotContainer = useRef();
    const toggleChatBotContainer = () => {
        if (chatBotContainer.current.style.height !== '100%') {
            setActiveChatBot(true);
            chatBotContainer.current.style.height = '100%';
            mobileContainer.current.style.overflowY = 'hidden';
            mobileContainer.current.scrollTo(0, 0);
        } else {
            setActiveChatBot(false);
            chatBotContainer.current.style.height = '0';
            mobileContainer.current.style.overflowY = 'scroll';
        }
    };

    return (
        <div className={`${styles.mobileRightButtons} mobileRightButtons`}>
            <div className={`${styles.mobileContainer} mobileContainer`} id="mobileShowCase" ref={mobileContainer}>
                <div className={styles.purpleBackground} />
                <div className={styles.mobileHeader}>
                    <p>9:30</p>
                    <div>
                        <BsReception4 />
                        <BsWifi />
                        <BsBatteryFull />
                    </div>
                </div>
                <div className={styles.logo}>
                    <BsArrowLeft />
                    <h2>Central de Ajuda</h2>
                </div>
                <div className={styles.mobileSearch}>
                    <div>
                        <h3>Surgiu a dúvida</h3>
                        <BsQuestionSquareFill />
                    </div>
                    <div ref={searchInputContainer}>
                        <input
                            type="text"
                            placeholder="Pesquise aqui"
                            id="searchInput"
                            onFocus={() => {
                                searchInputContainer.current.style.transform = 'scale(1.3)';
                            }}
                            onBlur={() => {
                                searchInputContainer.current.style.transform = 'scale(1)';
                            }}
                        />
                        <BsSearch />
                    </div>
                </div>
                <div className={styles.mobileServices}>
                    <div>
                        <h4>Serviços</h4>
                        <button>Ver Todos</button>
                    </div>
                    <Carousel className={styles.servicesCarousel} showArrows={false} showStatus={false} transitionTime={1000} showThumbs={false} showIndicators={false} swipeable={true} useKeyboardArrows={true} emulateTouch={true} autoPlay infiniteLoop interval={4000}>
                        <div className={styles.servicesCarouselDiv}>
                            <div className={styles.carouselServiceContainer}>
                                <RiShoppingBagFill />
                                <p>Shopping</p>
                            </div>
                            <div className={styles.carouselServiceContainer}>
                                <MdNetworkCell />
                                <p>Operadora</p>
                            </div>
                        </div>
                        <div className={styles.servicesCarouselDiv}>
                            <div className={styles.carouselServiceContainer}>
                                <MdAirplaneTicket />
                                <p>Passagens</p>
                            </div>
                            <div className={styles.carouselServiceContainer}>
                                <BsCreditCard2FrontFill />
                                <p>Crédito</p>
                            </div>
                        </div>
                        <div className={styles.servicesCarouselDiv}>
                            <div className={styles.carouselServiceContainer}>
                                <MdLock />
                                <p>Seguros</p>
                            </div>
                            <div className={styles.carouselServiceContainer}>
                                <CgMathPlus />
                                <p>Plano Plus</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className={styles.topics}>
                    <div>
                        <h4>Tópicos</h4>
                        <button>Ver Todos</button>
                    </div>
                    <div className={styles.topicsArticles}>
                        <div>
                            <VscPackage />
                            <div>
                                <h5>Reembolsos e devoluções</h5>
                                <p>12 artigos</p>
                            </div>
                        </div>
                        <div>
                            <MdPayments />
                            <div>
                                <h5>Pagamentos</h5>
                                <p>6 artigos</p>
                            </div>
                        </div>
                        <div>
                            <MdBusinessCenter />
                            <div>
                                <h5>Gestão e Negócios</h5>
                                <p>19 artigos</p>
                            </div>
                        </div>
                        <div>
                            <RiShoppingBagFill />
                            <div>
                                <h5>Compras e entregas</h5>
                                <p>8 artigos</p>
                            </div>
                        </div>
                        <div>
                            <MdAttachMoney />
                            <div>
                                <h5>Empréstimos</h5>
                                <p>3 artigos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.chatBotContainer} ref={chatBotContainer}>
                    <div className={styles.chatBotContainerBlur} />
                    <div className={styles.attendantIcon} style={activeChatBot ? {} : { display: 'none' }} />
                    <div className={styles.chatBot}>
                        <div className={styles.chatBotHeader}>
                            <div>
                                <RiMessage3Fill />
                                <p>
                                    <span>Sheele</span> ChatBot
                                </p>
                            </div>
                            <IoIosArrowDown onClick={toggleChatBotContainer} />
                        </div>
                        <div className={`${styles.chatBotSheeleMessageContainer} ${activeChatBot ? 'animate__animated animate__delay-1s animate__fadeIn' : ''}`}>
                            <div className={styles.chatBotSheeleMessage}>
                                Olá! Sou a <span>Sheele</span>, a Chatbot do iManager. Como posso ajudá-lo?
                            </div>
                            <img src={sheeleImage} alt="Chabot Sheele Image" />
                        </div>
                        <ul className={`${styles.userOptions} ${activeChatBot ? 'animate__animated animate__delay-2s animate__fadeIn' : ''}`}>
                            <li>
                                <BsCreditCard2FrontFill />
                                Cartão iManager
                            </li>
                            <li>
                                <RiShoppingBagFill />
                                Shopping
                            </li>
                            <li>
                                <MdLock />
                                Seguros
                            </li>
                            <li>
                                <CgMathPlus />
                                Plano Plus
                            </li>
                            <li>
                                <VscPreview />
                                Meu Projeto
                            </li>
                            <li>
                                <MdAttachMoney />
                                Empréstimo
                            </li>
                            <li>
                                <MdAccountCircle />
                                Conta
                            </li>
                        </ul>
                        <div className={styles.chatBotInputArea}>
                            <input type="text" placeholder="Digite sua mensagem..." onChange={() => setChatBotInputValue(chatBotInput.current.value)} ref={chatBotInput} />
                            <button>{chatBotInputValue !== '' ? <BiSend /> : <AiOutlineAudio />}</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleChatBotContainer} className={`${styles.sheeleIcon} animate__animated ${activeChatBot ? `${styles.activeSheeleIcon} animate__delay-1s animate__tada` : 'animate__infinite animate__pulse'}`} />
            <div className={styles.mobileUpDownButtons} />
        </div>
    );
}
