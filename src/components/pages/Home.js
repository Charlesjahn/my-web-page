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
                <p>Originally from Brazil and currently based in Ireland for the past 5 years. I'm a hardworking and dedicated individual committed to achieving my goals and building a successful future.</p>

                <p>I'm an aspiring Full Stack Developer, eager to expand and refine my skillset. My passion lies in creating dynamic web experiences using technologies like React, HTML, CSS, and JavaScript. I'm also proficient in Python, Node.js, Java, and more, always excited to delve into new languages and frameworks to broaden my expertise.</p>

            </div>

            <div className={styles.img_div}>
                <Img src={myImg} alt={"Myself"} />
            </div>

        </section>
    )
}

export default Home