import styles from './Contact.module.css'

import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function Contact() {

    return (
        <section>
            <h1>Contact</h1>

            <div className={styles.social}>
                <div >
                    <span>Instagram</span>
                    <a href='https://www.instagram.com/cfjahnprojects/' className={styles.insta}>
                        <FaInstagram />
                    </a>
                </div>

                <div >
                    <span>Linkedin</span>
                    <a href='https://www.linkedin.com/in/charles-franklin-jahn/' className={styles.link}>
                        <FaLinkedin />
                    </a>
                </div>

                <div >
                    <span>Github</span>
                    <a href='https://github.com/Charlesjahn' className={styles.github}>
                        <FaGithub />
                    </a>
                </div>

                <div >
                    <span>Call/Text me:</span>
                    <a href='https://wa.me/353834601235' className={styles.whats}>
                        <FaWhatsapp />
                    </a>
                </div>

                <div >
                    <span>Mail me:</span>
                    <a href='mailto:charles.jahn@gmail.com?subject=&body=' className={styles.gmail}>
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact