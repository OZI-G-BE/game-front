import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from './Navbar.module.css';


function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("reponsive_nav");
    }

    return(
        <header>
            <nav ref={navRef}>
                <h1>GAME_OVER</h1>
                <div className={styles.navLinks}>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Blog</a>
                    <a href="/">About Us</a>
                    <button className={`${styles.navBtn} ${styles.navOpenBtn}`} onClick={showNavbar}>
                        <FaBars />
                    </button>
                </div>
            </nav>
            <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavbar}>
                <FaTimes />
            </button>
        </header>
    );
}

export default Navbar;