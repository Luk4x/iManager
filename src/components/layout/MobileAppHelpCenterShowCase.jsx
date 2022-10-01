import styles from './MobileAppHelpCenterShowCase.module.css';

import SheeleChatBot from '../layout/SheeleChatBot';

import { BsReception4, BsWifi, BsBatteryFull, BsArrowLeft, BsQuestionSquareFill, BsSearch, BsCreditCard2FrontFill } from 'react-icons/bs';
import { RiShoppingBagFill } from 'react-icons/ri';
import { MdLock, MdAirplaneTicket, MdNetworkCell, MdPayments, MdAttachMoney, MdBusinessCenter } from 'react-icons/md';
import { CgMathPlus } from 'react-icons/cg';
import { VscPackage } from 'react-icons/vsc';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import 'animate.css/animate.min.css';

import { useRef } from 'react';

export default function MobileAppHelpCenterShowCase() {
    const mobileContainer = useRef();
    const searchInputContainer = useRef();

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
                        <a href="#?">
                            <VscPackage />
                            <div>
                                <h5>Reembolsos e devoluções</h5>
                                <p>12 artigos</p>
                            </div>
                        </a>
                        <a href="#?">
                            <MdPayments />
                            <div>
                                <h5>Pagamentos</h5>
                                <p>6 artigos</p>
                            </div>
                        </a>
                        <a href="#?">
                            <MdBusinessCenter />
                            <div>
                                <h5>Gestão e Negócios</h5>
                                <p>19 artigos</p>
                            </div>
                        </a>
                        <a href="#?">
                            <RiShoppingBagFill />
                            <div>
                                <h5>Compras e entregas</h5>
                                <p>8 artigos</p>
                            </div>
                        </a>
                        <a href="#?">
                            <MdAttachMoney />
                            <div>
                                <h5>Empréstimos</h5>
                                <p>3 artigos</p>
                            </div>
                        </a>
                    </div>
                </div>
                <SheeleChatBot externalContainer={mobileContainer} />
            </div>
            <div className={styles.mobileUpDownButtons} />
        </div>
    );
}
