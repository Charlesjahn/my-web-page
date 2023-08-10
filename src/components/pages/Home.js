// import styles from './Home.module.css'
import myImg from '../../img/me_thinking.png'

import Img from '../layout/Img'

function Home() {

    return (
        <section>
            <div >
                <h1>Charles </h1>
                <h1>Franklin </h1>
                <h1>Jahn</h1>
            </div>
            <Img src={myImg} alt={"Myself"}/>
        </section>
    )
}

export default Home