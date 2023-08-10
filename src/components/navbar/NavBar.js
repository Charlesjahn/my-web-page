import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'

import imgLogo from '../../img/logomini_trans.png'

function NavBar() {

    const [navVisible, setNavVisible] = useState(false);

    const showNavBar = () => {
        setNavVisible(!navVisible);
    }
    const closeNavBar = () => {
        setNavVisible(false);
    }

    return (
        <header>
            <Link to="/my-web-page" onClick={closeNavBar}>
                <img className={styles.img_logo} src={imgLogo} alt="My Logo" />
            </Link>

            <nav className={navVisible ? styles.responsive_nav : styles.nav}>

                <button className={styles.closeBtn} onClick={showNavBar}>
                    <FaTimes />
                </button>
                <Link to="/Projects" onClick={closeNavBar}>Projects</Link>
                <Link to="/contact" onClick={closeNavBar}>Contact</Link>
                <Link to="/Timeline" onClick={closeNavBar}>Timeline</Link>

            </nav>

            <button className={styles.nav_btn} onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavBar