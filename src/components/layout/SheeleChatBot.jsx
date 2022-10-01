import styles from './SheeleChatBot.module.css';

import sheeleImage from '../../assets/sheeleImage.png';

import { BsCreditCard2FrontFill } from 'react-icons/bs';
import { RiShoppingBagFill, RiMessage3Fill } from 'react-icons/ri';
import { MdLock, MdAttachMoney, MdAccountCircle } from 'react-icons/md';
import { CgMathPlus } from 'react-icons/cg';
import { VscPreview } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineAudio } from 'react-icons/ai';
import { BiSend } from 'react-icons/bi';

import 'animate.css/animate.min.css';

import { useState, useRef } from 'react';

export default function SheeleChatBot({ externalContainer, inDesktop }) {
    const [activeChatBot, setActiveChatBot] = useState(false);

    const chatBotInput = useRef();
    const [chatBotInputValue, setChatBotInputValue] = useState('');

    const chatBotContainer = useRef();
    const toggleChatBotContainer = () => {
        if (chatBotContainer.current.style.height !== '100%') {
            setActiveChatBot(true);
            chatBotContainer.current.style.height = '100%';
            externalContainer.current.style.overflowY = 'hidden';
            externalContainer.current.scrollTo(0, 0);
        } else {
            setActiveChatBot(false);
            chatBotContainer.current.style.height = '0';
            externalContainer.current.style.overflowY = 'scroll';
        }
    };

    return (
        <>
            <div className={styles.chatBotContainer} ref={chatBotContainer}>
                <div className={styles.chatBotContainerBlur} />
                <div className={`${inDesktop ? styles.attendantIconDesktop : styles.attendantIcon}`} style={activeChatBot ? {} : { display: 'none' }} />
                <div className={styles.chatBot}>
                    <div className={styles.chatBotHeader}>
                        <div>
                            <RiMessage3Fill />
                            <p>
                                <span>Sheele</span> ChatBot
                            </p>
                        </div>
                        <IoIosArrowDown onClick={toggleChatBotContainer} style={inDesktop ? { cursor: 'pointer' } : {}} />
                    </div>
                    <div className={`${styles.chatBotSheeleMessageContainer} ${activeChatBot ? 'animate__animated animate__delay-1s animate__fadeIn' : ''}`}>
                        <div className={styles.chatBotSheeleMessage}>
                            Olá! Sou a <span>Sheele</span>, a Chatbot do iManager. Como posso ajudá-lo?
                        </div>
                        <img src={sheeleImage} alt="Chabot Sheele Image" />
                    </div>
                    <ul className={`${styles.userOptions} ${activeChatBot ? 'animate__animated animate__delay-2s animate__fadeIn' : ''}`} style={inDesktop ? { cursor: 'pointer' } : {}}>
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
                        <button style={inDesktop ? { cursor: 'pointer' } : {}}>{chatBotInputValue !== '' ? <BiSend /> : <AiOutlineAudio />}</button>
                    </div>
                </div>
            </div>
            <button onClick={toggleChatBotContainer} className={`${inDesktop ? styles.sheeleIconDesktop : styles.sheeleIcon} animate__animated ${activeChatBot ? `${inDesktop ? styles.activeSheeleIconDesktop : styles.activeSheeleIcon} animate__delay-1s animate__tada` : 'animate__infinite animate__pulse'}`} />
        </>
    );
}
