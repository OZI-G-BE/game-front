import {  useState } from 'react'
import styles from './About.module.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

import { Outlet, NavLink, Link} from 'react-router-dom';

function AboutUs() {
  
    
    return (
      <>
      <Navbar/>
  
      <h1 className={styles.para}>ABOUT US</h1>
      <div className={styles.para}>
       <p className={styles.prap}>
        Welcome to our Game Site! Our project is dedicated to providing gamers with the latest news, reviews, and updates on the most popular games. Our team of passionate gamers and developers work tirelessly to bring you in-depth articles, engaging content, and a vibrant community where you can connect with fellow enthusiasts. Whether you're a casual player or a hardcore gamer, our site offers something for everyone. Stay tuned for exciting features, exclusive interviews, and much more as we continue to grow and evolve. Thank you for being a part of our journey!
       </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
