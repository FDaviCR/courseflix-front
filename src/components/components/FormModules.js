import styles from './FormModules.module.css';

function FormModules(){
    function post(){
        console.log('Enviar formulario');
    };

    return(
        <div className={styles.formCard}>
            <form onSubmit={post}>
                <label>Módulo:</label>
                <input type="text" name="name" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormModules;