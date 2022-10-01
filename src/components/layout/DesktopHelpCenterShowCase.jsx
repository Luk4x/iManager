import styles from './DesktopHelpCenterShowCase.module.css';

import SheeleChatBot from '../layout/SheeleChatBot';

import { FaWindows, FaMonero } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';
import { BsFillVolumeUpFill, BsSquare, BsCreditCard2Front } from 'react-icons/bs';
import { BiMessage, BiBookBookmark, BiCoinStack } from 'react-icons/bi';
import { AiOutlineMinus, AiOutlineClose, AiOutlineSearch, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineIdentification } from 'react-icons/hi';
import { MdLock, MdOutlineAttachMoney } from 'react-icons/md';
import { GiCommercialAirplane } from 'react-icons/gi';
import { FiArrowUpRight } from 'react-icons/fi';

import 'animate.css/animate.min.css';

import { useState, useRef } from 'react';

export default function DesktopHelpCenterShowCase() {
    const [faqInputFocus, setFaqInputFocus] = useState(false);

    const monitorContainer = useRef();

    return (
        <div className={styles.monitorFoot}>
            <div className={styles.monitorContainer} ref={monitorContainer}>
                <div className={styles.monitorBarUp}>
                    <FaMonero />
                    <div>
                        <AiOutlineMinus />
                        <BsSquare />
                        <AiOutlineClose />
                    </div>
                </div>
                <SheeleChatBot externalContainer={monitorContainer} inDesktop={true} />
                <div className={styles.monitorHeader}>
                    <h4>
                        <span>FAQ</span> da equipe <span>iManager</span>
                    </h4>
                </div>
                <div className={styles.backgroundHighlight}>
                    <div className={`${styles.inputArea} ${!faqInputFocus ? 'animate__animated animate__slower animate__infinite animate__flash' : ''}`}>
                        <AiOutlineSearch />
                        <input type="text" placeholder="Busque por respostas..." onFocus={() => setFaqInputFocus(true)} onBlur={() => setFaqInputFocus(false)} />
                    </div>
                </div>
                <ul className={styles.faqList}>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <BiBookBookmark />
                                <h5>Sobre a conta e abertura</h5>
                            </div>
                            <p>Saiba mais sobre a Conta Digital e como pedir a abertura.</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>46 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <FaMonero />
                                <h5>Sobre o iManager</h5>
                            </div>
                            <p>Informações gerais sobre o iManager e nossas campanhas!</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>30 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <HiOutlineIdentification />
                                <h5>Conta Digital Pessoa Jurídica</h5>
                            </div>
                            <p>Entenda um pouco mais sobre as características e serviços da Conta PJ.</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>129 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <MdLock />
                                <h5>i-Safe</h5>
                            </div>
                            <p>O i-safe é uma ferramenta que reforça ainda mais a segurança no acesso e nas transações realizadas pela sua conta.</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>4 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <BsCreditCard2Front />
                                <h5>Cartão</h5>
                            </div>
                            <p>Saiba mais sobre o envio, a função crédito, compras com o cartão, etc.</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>130 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <BiCoinStack />
                                <h5>Limite de crédito</h5>
                            </div>
                            <p>Saiba mais sobre o limite de crédito do seu cartão e como negociar limites!</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>19 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <GiCommercialAirplane />
                                <h5>Serviços e viagens do iManager</h5>
                            </div>
                            <p>Agora com o Serviços de Viagens do iManager, você pode comprar passagens e hospedagens em um mesmo lugar. E claro, com muito cashback para você explorar destinos nacionais e internacionais.</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>25 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <MdOutlineAttachMoney />
                                <h5>Transações</h5>
                            </div>
                            <p>Saiba mais sobre transferências, saques, pagamentos e outros serviços da sua Conta Digital.</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>89 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className={styles.faq}>
                        <a href="#?">
                            <div className={styles.faqTitle}>
                                <AiOutlineInfoCircle />
                                <h5>iManager Pass</h5>
                            </div>
                            <p>Saiba mais sobre o iManager Pass, nosso programa de assinaturas!</p>
                            <div className={styles.faqFooter}>
                                <div className={styles.sheele2Image} />
                                <div>
                                    <h6>3 artigos nesta coleção</h6>
                                    <p>
                                        Escrito por <span>Sheele</span>.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <a href="#?">
                    <button className={styles.fullFaqButton}>
                        Veja nossa FAQ completa
                        <FiArrowUpRight />
                    </button>
                </a>
                <div className={styles.monitorBarDown}>
                    <FaWindows />
                    <div>
                        <IoIosArrowUp />
                        <BsFillVolumeUpFill />
                        <p>9:30</p>
                        <BiMessage />
                    </div>
                </div>
            </div>
        </div>
    );
}
