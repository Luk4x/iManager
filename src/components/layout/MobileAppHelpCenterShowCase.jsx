import styles from './MobileAppHelpCenterShowCase.module.css';

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
    const searchInputContainer = useRef();

    return (
        <div className={styles.mobileRightButtons}>
            <div className={`${styles.mobileContainer} mobileContainer`} id="mobileShowCase">
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
                    <Carousel className={styles.servicesCarousel} showArrows={false} showStatus={false} transitionTime={900} showThumbs={false} showIndicators={false} swipeable={true} useKeyboardArrows={true} emulateTouch={true}>
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
            </div>
            <div className={`${styles.sheeleIcon} animate__animated animate__slow animate__infinite animate__tada`} />
            <div className={styles.mobileUpDownButtons}></div>
        </div>
    );
}
