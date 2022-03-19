import React, { useEffect, useState } from 'react';
//import api from '../services/api';
import styles from './Home.module.css';
import ModuleButton from '../components/components/ModuleButton';
import axios from 'axios';

function Home() {
    const [modules, setModules] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/modules")
            .then((response) => {
                setModules(response.data);
            })
            .catch((error) => {
                console.error(error)
            }
        );
    });

    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Courseflix</span>
            </h1>
            <p>Veja nosso catalogo de cursos agora mesmo!</p>

            <div className={styles.modules_container}>
                {
                    parseInt(modules.length) == 0 ? (
                        <h1>Não há módulos</h1>
                    ):(
                        modules.map((module)=>(
                            <ModuleButton
                                key={module.id}
                                name={module.name}
                            />
                        ))
                    )
                }
            </div>
        </section>
    );
}

export default Home;