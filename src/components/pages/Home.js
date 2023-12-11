import styles from './Home.module.css'
import myImg from '../../img/me/me_thinking.png'

import Img from '../layout/Img'

function Home() {
    return (
        <section className={styles.section}>
            <div className={styles.text_home}>

                <h1>Hello World!</h1>

                <p>My name is </p>

                <div className={styles.full_name}>
                    <h2 className={styles.name}>Charles </h2>
                    <h2 className={styles.sename}>Franklin </h2>
                    <h2 className={styles.suname}>Jahn</h2>
                </div>
                <p>Originally from Brazil and currently based in Ireland for the past 5 years. Confident and competent in all basic IT fundamentals including the use of IT software. Dedicated individual committed to achieving my goals and building a successful future.</p>

                <p>Enthusiastic about my journey as a Software Engineer, actively advancing my proficiency in a range of technologies—Unity, C#, React, HTML, CSS, JavaScript, Node.js, SpringBoots, Java, Python. Continually exploring new languages and frameworks to broaden my expertise.</p>
                <div className={styles.divbtn}>
                    <a
                        href="https://drive.google.com/file/d/1a2Qdim6jN9ywFR7XW_2U1EYrq1sL-sNw/view?usp=sharing"
                        download="CharlesJahnCV.pdf"
                        rel="noopener noreferrer"
                        >
                            Download CV
                    </a>
                </div>
            </div>

            <div className={styles.img_div}>
                <Img src={myImg} alt={"Myself"} />
            </div>

        </section>
    )
}

export default Home