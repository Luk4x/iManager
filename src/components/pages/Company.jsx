import styles from './Company.module.css';

export default function Company() {
    return (
        <section className={styles.section}>
            <div className={styles.headerImage}>
                <h2>Agente respira o novo</h2>
                <button>arrow</button>
            </div>
        </section>
    );
}

/* <p>O iManager é um gerenciador de custo baseado na Web que visa auxiliar empresas em sua gestão de projetos.</p>
<p>Nós da iManager percebemos uma dificuldade das empresas e estamos aqui trazendo a solução que ninguém trouxe: Reunimos em uma Aplicação Web tudo o que a sua empresa precisa para ter uma gestão simples, rápida e prática.</p> */
