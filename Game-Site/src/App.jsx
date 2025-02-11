import { useRef, useState } from 'react'
import styles from './App.module.css';
import Navbar from './Navbar';
import Card from './card';
import { Outlet, NavLink, Link} from 'react-router-dom';
import gamedata from './gameData.js';
function App() {
  const [gameActive, setGameActive] = useState(styles.gridContainer)



  function gameShow(){
    if (gameActive == styles.gridContainer){
      setGameActive(styles.gridnone);
    }
    else{
      setGameActive(styles.gridContainer);
    }
  }
  
  const gData = gamedata.map((game) => 
    <div onClick={gameShow}>
      <NavLink  to={`/gamePage/${game.title}`}>
      <Card title={game.title} description={game.description} imageSrc={game.imagePath} >

      </Card>
      </NavLink>
    </div> 
    );
    
    return (
      <>
      <Navbar />
    <div className={styles.outletContainer} >
    <Link to="/" className={styles.closeButton} onClick={gameShow}  >X</Link>
      <Outlet context={{ gData }} />
      </div>
      <div className={gameActive}>
        {gData}
      </div>
    </>
  )
}

export default App
