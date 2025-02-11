import { useState } from 'react'
import styles from './App.module.css';
import Navbar from './Navbar';
import Card from './card';
import { Outlet, NavLink} from 'react-router-dom';
import gamedata from './gameData.js';
function App() {
  const [count, setCount] = useState(0)
  
  
  const gData = gamedata.map((game) => 
    <NavLink  to={`/gamePage/${game.title}`}>
      <Card title={game.title} description={game.description} imageSrc={game.imagePath} />
    </NavLink>);

  return (
    <>
      <Navbar />
      <Outlet context={{ gData }} />
      <div className={styles.gridContainer}>
        {gData}
      </div>
    </>
  )
}

export default App
