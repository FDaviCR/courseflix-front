import React, { useEffect, useState } from 'react';
//import api from '../services/api';
import styles from './Home.module.css';
import ModuleButton from '../components/components/ModuleButton';
import ClassCard from '../components/components/ClassCard';
import axios from 'axios';

function Home() {
    const [show, setShow] = useState(false);
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

    function openClasses(idModule){
        axios.get(`http://localhost:4000/classes/${idModule}`)
            .then((response) => {
                setClasses(response.data);
            })
            .catch((error) => {
                console.error(error)
            }
        );
        setShow(true);
    };

    return (
        <section className={styles.home_container}>
            <h1>
                Bem-vindo ao <span>Courseflix</span>
            </h1>
            <p>Veja nosso catalogo de cursos agora mesmo!</p>

            <div className={styles.modules_container}>
                {
                    parseInt(modules.length) === 0 ? (
                        <h1>Não há módulos</h1>
                    ):(
                        modules.map((module)=>(
                            <ModuleButton
                                key={module.id}
                                id={module.id}
                                name={module.name}
                                onClick={openClasses}
                            />
                        ))
                    )
                }
            </div>

            <div className={styles.classes_container}>
                {
                    parseInt(classes.length) === 0 && show == true ? (
                        <h1>Não há aulas cadastradas neste módulo</h1>
                    ):(
                        classes.map((aula)=>(
                            <ClassCard
                                key={aula.id}
                                id={aula.id}
                                name={aula.name}
                                description={aula.description}
                                date={aula.date}
                            />
                        ))
                    )
                }
            </div>
        </section>
    );
}

export default Home;