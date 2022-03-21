import styles from './ClassCard.module.css';

function ClassCard(props){
    return(
        <div className={styles.classCard}>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default ClassCard;