import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Importing CSS module

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="/about">About Us</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link to="/categories">Categories</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;