import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("reponsive_nav");
    }

    return(
        <header>
            <nav ref={navRef}>
                <h1>Logo</h1>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
                <button className={"nav-btn nav-close-btn"} onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={"nav-btn"} onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;