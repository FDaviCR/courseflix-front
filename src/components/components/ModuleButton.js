import styles from './ModuleButton.module.css';

function ModuleButton(props){
    const Execute = () => {
        props.onClick(props.id);
    };

    return(
        <button onClick={Execute} className={styles.background_button}>
            <p className={styles.button_text}>{props.name}</p>
        </button>
    );
}

export default ModuleButton;