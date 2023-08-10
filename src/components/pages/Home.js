import styles from './Home.module.css'
import myImg from '../../img/me_thinking.png'

import Img from '../layout/Img'

function Home() {

    return (
        <section className={styles.section}>
            <div>
                <h1>Hello World!</h1>
                <p>I`m </p>
                <div >
                    <h2>Charles </h2>
                    <h2>Franklin </h2>
                    <h2>Jahn</h2>
                </div>
                <p>An emerging Full Stack Developer. Enthusiastic in React, HTML, CSS, JavaScript, Python, Node.js, Java and more...</p>
            </div>

            <Img src={myImg} alt={"Myself"} />
        </section>
    )
}

export default Home