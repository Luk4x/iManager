import styles from './IManagerFooter.module.css';

import { TbWorld } from 'react-icons/tb';
import { BsApple, BsInstagram, BsTwitter, BsLinkedin, BsSpotify, BsYoutube, BsFacebook } from 'react-icons/bs';
import { IoLogoGooglePlaystore, IoLogoTiktok } from 'react-icons/io5';
import { GoLocation } from 'react-icons/go';

export default function IManagerFooter() {
    return (
        <div className={styles.iManagerFooter}>
            <div className={styles.footerContainer} id="IManagerFooter">
                <div className={styles.socialsGridPart}>
                    <div className={styles.NasdaqListed}>
                        <TbWorld />
                        <p className={styles.NasdaqListedParagraph}>
                            <span>
                                IMNGR <span>|</span> Nasdaq
                            </span>{' '}
                            Listed
                        </p>
                    </div>
                    <div className={styles.socialsAndAppContainer}>
                        <div className={styles.downloadApp}>
                            <h5>Baixe o Super App:</h5>
                            <div className={styles.downloadAppButtons}>
                                <a href="#">
                                    <button>
                                        <BsApple />
                                        <span>App Store</span>
                                    </button>
                                </a>
                                <a href="#">
                                    <button>
                                        <IoLogoGooglePlaystore />
                                        <span>Google Play</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className={styles.followIManager}>
                            <h5>Siga o iManager:</h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <BsYoutube />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IoLogoTiktok />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <BsSpotify />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.midLinks} id={styles.firstMidLink}>
                    <h4>Pra você</h4>
                    <ul>
                        <li>
                            <a href="#">Conta Digital Pessoa Física</a>
                        </li>
                        <li>
                            <a href="#">Cartão de Crédito IMNGR</a>
                        </li>
                        <li>
                            <a href="#">Conta Digital Pessoa Jurídica</a>
                        </li>
                        <li>
                            <a href="#">Empréstimos e Crédito</a>
                        </li>
                        <li>
                            <a href="#">iManager Plus</a>
                        </li>
                        <li>
                            <a href="#">iManager Shop</a>
                        </li>
                        <li>
                            <a href="#">iManager Seguros</a>
                        </li>
                        <li>
                            <a href="#">Purple Friday</a>
                        </li>
                        <li>
                            <a href="#">Super App</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.midLinks}>
                    <h4>Precisa de ajuda?</h4>
                    <ul>
                        <li>
                            <a href="#">Central de ajuda</a>
                        </li>
                        <li>
                            <a href="#">Canais de atendimento</a>
                        </li>
                        <li>
                            <a href="#">Ouvidoria</a>
                        </li>
                        <li>
                            <a href="#">Operações</a>
                        </li>
                        <li>
                            <a href="#">Tarifas</a>
                        </li>
                        <li>
                            <a href="#">2ª via do boleto</a>
                        </li>
                        <li>
                            <a href="#">Saldo</a>
                        </li>
                        <li>
                            <a href="#">Negocie sua dívida</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.talkWithUs}>
                    <h4>Fale com agente</h4>
                    <ul>
                        <li>
                            <p>Capitais e regiões metropolitanas:</p>
                            <a href="tel:#">9009 9999</a>
                        </li>
                        <li>
                            <p>Demais localidades:</p>
                            <a href="tel:#">0800 099 9999</a>
                        </li>
                        <li>
                            <p>SAC (24 horas):</p>
                            <a href="tel:#">0800 909 9999</a>
                        </li>
                        <li>
                            <p>Deficiente de fala e audição:</p>
                            <a href="tel:#">0800 999 9999</a>
                        </li>
                        <li>
                            <p>Ouvidoria:</p>
                            <a href="tel:#">0800 990 9999</a>
                        </li>
                        <li>
                            <p>
                                <strong>Não ligamos pra você por esses telefones.</strong> Também não solicitamos dados pessoais, senha da conta, código de transação por telefone. Estes números são apenas para você fazer ligações para o iManager.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.downFooter}>
                <ul>
                    <li>
                        <a href="#">Confira Nossas Vagas</a>
                    </li>
                    <li>
                        <a href="#">Tarifas</a>
                    </li>
                    <li>
                        <a href="#">Segurança</a>
                    </li>
                    <li>
                        <a href="#">Privacidade de Dados</a>
                    </li>
                    <li>
                        <a href="#">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="#">Canal de Ética</a>
                    </li>
                    <li>
                        <a href="#">Política de Segurança da Informação</a>
                    </li>
                    <li>
                        <a href="#">Política de Segurança da Informação para Fornecedores</a>
                    </li>
                </ul>
                <p className={styles.copyRightParagraph}>&copy; iManager S.A. CNPJ: 12.345.678/0001-09</p>
                <div>
                    <a href="#">
                        <GoLocation /> Belo Horizonte | MG - Av. ABCD, 9999 - EFGH. CEP: 99999-000
                    </a>
                    <br />
                    <a href="#">
                        <GoLocation /> São Paulo | SP - Av. ABCD, 9999 - IJKL. CEP: 99999-000
                    </a>
                </div>
            </div>
        </div>
    );
}
