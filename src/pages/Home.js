import styles from './Home.module.css';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Courseflix</span>
            </h1>
            <p>Veja nosso catalogo de cursos agora mesmo!</p>
        </section>
    );
}

export default Home;