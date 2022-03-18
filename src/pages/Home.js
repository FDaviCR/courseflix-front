import React, { useEffect, useState } from 'react';
import useApi from '../services/api';
import styles from './Home.module.css';

function Home() {
    const [modules, setModules] = useState();
    const [classes, setClasses] = useState();

    useEffect(() => {
        useApi.listModules();

        console.log('modules');
        console.log(modules);
    }, []);

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