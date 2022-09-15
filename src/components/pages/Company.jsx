import styles from './Company.module.css';
import { BiDownArrow } from 'react-icons/bi';

import SubmitButton from '../form/SubmitButton';

export default function Company() {
    return (
        <section className={styles.section}>
            <div className={`${styles.width100Vw} ${styles.headerImage}`}>
                <h2>Agente respira o novo</h2>
                <a href="#colorHighlight">
                    <SubmitButton>
                        <BiDownArrow />
                    </SubmitButton>
                </a>
            </div>
            <div id="colorHighlight" className={`${styles.width100Vw} ${styles.colorHighlight}`}>
                <div>
                    <h3>Nascemos para fazer diferente</h3>
                    <p>
                        A iManager está aqui para fazer aquilo que ninguém conseguiu...
                        <br />
                        Para reunir em um Web App tudo que faz diferença na gestão da sua empresa.
                    </p>
                </div>
            </div>
        </section>
    );
}

/* <p>O iManager é um gerenciador de custo baseado na Web que visa auxiliar empresas em sua gestão de projetos.</p>
<p>Nós da iManager percebemos uma dificuldade das empresas e estamos aqui trazendo a solução que ninguém trouxe: Reunimos em uma Aplicação Web tudo o que a sua empresa precisa para ter uma gestão simples, rápida e prática.</p> */
