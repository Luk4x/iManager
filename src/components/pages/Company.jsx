import styles from './Company.module.css';

import SubmitButton from '../form/SubmitButton';

import { BiDownArrow } from 'react-icons/bi';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Company() {
    return (
        <section className={styles.section}>
            <article className={`${styles.width100Vw} ${styles.headerImage}`}>
                <h2>Agente respira o novo</h2>
                <a href="#colorHighlight">
                    <SubmitButton>
                        <BiDownArrow />
                    </SubmitButton>
                </a>
            </article>
            <article id="colorHighlight" className={`${styles.width100Vw} ${styles.colorHighlight}`}>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <h3>Nascemos para fazer diferente</h3>
                    <p>
                        A iManager está aqui para fazer aquilo que ninguém conseguiu...
                        <br />
                        Para reunir em um Web App tudo que faz diferença na gestão da sua empresa.
                    </p>
                </ScrollAnimation>
            </article>
        </section>
    );
}

/* <p>O iManager é um gerenciador de custo baseado na Web que visa auxiliar empresas em sua gestão de projetos.</p>
<p>Nós da iManager percebemos uma dificuldade das empresas e estamos aqui trazendo a solução que ninguém trouxe: Reunimos em uma Aplicação Web tudo o que a sua empresa precisa para ter uma gestão simples, rápida e prática.</p> */
