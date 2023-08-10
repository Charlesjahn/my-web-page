import styles from './Img.module.css'

function Img(props) {

    return (
        <div className={styles.main}>
            <img src={props.src} alt={props.alt} />
        </div>
    )
}

export default Img