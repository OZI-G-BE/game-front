import { useRef, useState } from 'react'
import styles from './App.module.css';
import Navbar from './Components/Navbar';
import Card from './card';
import { Outlet, NavLink, Link} from 'react-router-dom';
import gamedata from './gameData.js';
function App() {
  const [gameActive, setGameActive] = useState(styles.gridContainer)
  const [xActive, setXActive] = useState(styles.gridnone)
  const [, setGData] = useState([])



  function gameShow(){
    if (gameActive == styles.gridContainer){
      setGameActive(styles.gridnone);
      setXActive(styles.closeButton);
    }
    else{
      setGameActive(styles.gridContainer);
      setXActive(styles.gridnone);
    }
  }
  
  const gData = gamedata.map((game) => 
    <div onClick={gameShow}>
      <NavLink  to={`/gamePage/${game.title}`}>
      <Card title={game.title} description={game.description} longDescription={game.longDescription} imageSrc={game.imagePath} >

      </Card>
      </NavLink>
    </div> 
    );
    
    return (
      <>
      <Navbar />
    <div className={styles.outletContainer} >
    <Link to="/" className={xActive} onClick={gameShow}  >X</Link>
      <Outlet context={{ gData }} />
      </div>
      <div className={gameActive}>
        {gData}
      </div>
    </>
  )
}

export default App
