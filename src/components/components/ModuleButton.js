import styles from './ModuleButton.module.css';

function ModuleButton(props){
    return(
        <button className={styles.background_button}>
            <h1 className={styles.button_text}>{props.name}</h1>
        </button>
    );
}

export default ModuleButton;