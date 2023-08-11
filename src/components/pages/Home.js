import styles from './Home.module.css'
import myImg from '../../img/me_thinking.png'

import Img from '../layout/Img'
import LinkBtn from '../layout/LinkBtn'

function Home() {

    return (
        <section className={styles.section}>
            <div className={styles.text_home}>
                <h1>Hello World!</h1>
                <p>I'm </p>
                <div className={styles.full_name}>
                    <h2 className={styles.name}>Charles </h2>
                    <h2 className={styles.sename}>Franklin </h2>
                    <h2 className={styles.suname}>Jahn</h2>
                </div>
                <p>An emerging Full Stack Developer. Enthusiastic in React, HTML, CSS, JavaScript, Python, Node.js, Java and more...</p>

                <div className={styles.btn_div}>
                    <LinkBtn to="/contact" text="Contact" />
                </div>
            </div>

            <div className={styles.img_div}>
                <Img src={myImg} alt={"Myself"} />
            </div>
        </section>
    )
}

export default Home