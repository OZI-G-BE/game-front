import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";


function Navbar(){
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const showNavbar = () => {
        setIsOpen(!isOpen);
        navRef.current.classList.toggle(styles.responsiveNav);
    }

    return(
        <header>
            <nav>
                <h1 className={styles.navLogo}>GAME_OVER</h1>
                <button className={`${styles.navBtn} ${styles.navOpenBtn}`} onClick={showNavbar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={styles.navLinks}>
                    <a href="/">Home</a>
                    <Link to="/AboutUs">About Us</Link>
                </div>
            </nav>
            <div ref={navRef} className={styles.vertNavLinks}>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Blog</a>
                    <a href="/">About Us</a>
                </div>
        </header>
    );
}

export default Navbar;