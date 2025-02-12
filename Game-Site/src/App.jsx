import {  useState } from 'react'
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer.jsx';
import Card from './card';
import { Outlet, NavLink, Link} from 'react-router-dom';
import {gamesData,slides} from './gameData.js';
import GamePage from './gamePage';
import { useEffect } from 'react';




function App() {
  const [gameActive, setGameActive] = useState(styles.gridContainer)
  const [xActive, setXActive] = useState(styles.xnone)
  const [bodActive, setBodActive] = useState(styles.xnone)
  const [footActive, setFootActive] = useState(styles.foot)
 
const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);


  function gameShow(){
    if (gameActive == styles.gridContainer){
      setGameActive(styles.gridnone);
      setXActive(styles.closeButton);
      setBodActive(styles.outletContainer);
      setFootActive(styles.footnone);
    
    }
    else{
      setGameActive(styles.gridContainer);
      setXActive(styles.xnone);
      setBodActive(styles.xnone);
      setFootActive(styles.foot);
      
    }
  }
  
  const gData = gamesData.map((game) => 
    <div onClick={gameShow} key={game.title}>
      <NavLink to={`/gamePage/${game.title}`}>
        <Card 
          title={game.title} 
          description={game.description} 
          longDescription={game.longDescription} 
          imageSrc={game.imagePath} 
          genre={game.genre}
          price={game.price}
          publisher={game.publisher}
          developer={game.developer}    
        />
      </NavLink>
    </div> 

);
const slideData = slides.map((slide) => < img src={slide} key={slide}></img>);
    
    return (
      <>
      <Navbar/>
      <div className={bodActive} >
        <Link to="/" className={xActive} onClick={gameShow}  >❌</Link>
        <Outlet context={{ gData }} />
        {/* <GamePage/> */}
      </div>
      <h1 className={styles.catchy}>THE ONE STOP DESTINATION FOR THE CURRENT TITANS OF<br></br> THE FIGHTING GAME WORLD</h1>
      <div className={styles.slideContainer}>
        <div className={styles.imgContainer}>
          {/* {slideData}  */}
          </div>
             </div>
      <div className={gameActive}>
        {gData}
      </div>

      <div className={footActive}>
      <Footer />
      </div>
    </>
  )
}

export default App
