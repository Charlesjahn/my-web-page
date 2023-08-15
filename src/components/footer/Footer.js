import styles from './Footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer}>
            
            <p>
                <span className={styles.copy_right_span}>Charles Franklin Jahn</span> &copy; 2023
            </p>
        </footer>
    )
}

export default Footer