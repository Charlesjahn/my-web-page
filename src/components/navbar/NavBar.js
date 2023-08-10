import React, { useState } from 'react'

import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import { useRef } from 'react'

import styles from './NavBar.module.css'

import imgLogo from '../../img/logomini_trans.png'

function NavBar() {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
        console.log("working")
    }

    return (
        <header>
            <Link to="/" className={styles.link}><
                img src={imgLogo} alt="My Logo" />
            </Link>

            <nav ref={navRef}>

                <Link to="/Projects" className={styles.link}>Projects</Link>
                <Link to="/contact" className={styles.link}>Contact</Link>
                <Link to="/Timeline" className={styles.link}>Timeline</Link>

                <button className='nav_btn Nav_close_btn' onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>

            <button className='nav_btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavBar