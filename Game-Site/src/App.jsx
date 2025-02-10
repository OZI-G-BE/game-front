import { useState } from 'react'
import styles from './App.module.css';
import Navbar from './Navbar';
import Card from './card';
import GG from './assets/GG.jpg';
import Tekken from './assets/Tekken.jpg';
import StreetFighter from './assets/Street fighter.jpg';
import MortalKombat from './assets/mk1.jpg';
import DBFZ from './assets/dbfz.jpg';
import Smash from './assets/rivals.jpg';
import DOA from './assets/doa.jpg';
import SoulCalibur from './assets/soul calibur.jpg';
import VF from './assets/vf5.jpg';
import KOF from './assets/kof.jpg';
import MVC from './assets/mahvel baby.jpg';
import SS from './assets/sam sho.jpg';
import BB from './assets/BB.jpg';
import UNI from './assets/UN.jpg';
import SG from './assets/sg.jpg';
import KI from './assets/KI.jpg';
import Injustice from './assets/injustice.jpg';
import DS from './assets/DS.jpg';
import { Outlet } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <Navbar />



<Outlet />
      <div className={styles.gridContainer}>
        <Card title={"Guilty Gear"} description={"A fast-paced anime fighting game with unique characters and deep mechanics."} imageSrc={GG} />
        <Card title={"Tekken"} description={"A 3D fighting game known for its deep combat system and diverse character roster."} imageSrc={Tekken} />
        <Card title={"Street Fighter"} description={"A classic 2D fighting game series with iconic characters and competitive gameplay."} imageSrc={StreetFighter} />
        <Card title={"Mortal Kombat"} description={"A brutal fighting game famous for its violent fatalities and dark storyline."} imageSrc={MortalKombat} />
        <Card title={"Dragon Ball FighterZ"} description={"A visually stunning 2D fighter featuring characters from the Dragon Ball series."} imageSrc={DBFZ} />
        <Card title={"Super Smash Bros"} description={"A crossover fighting game with characters from various Nintendo franchises."} imageSrc={Smash} />
        <Card title={"Dead or Alive"} description={"A 3D fighting game known for its fast-paced combat and interactive stages."} imageSrc={DOA} />
        <Card title={"Soul Calibur"} description={"A weapon-based 3D fighting game with a rich story and diverse characters."} imageSrc={SoulCalibur} />
        <Card title={"Virtua Fighter"} description={"A pioneering 3D fighting game with a focus on realistic martial arts."} imageSrc={VF} />
        <Card title={"King of Fighters"} description={"A team-based 2D fighting game with a large roster and intricate mechanics."} imageSrc={KOF} />
        <Card title={"Marvel vs Capcom"} description={"A crossover fighting game featuring characters from Marvel and Capcom universes."} imageSrc={MVC} />
        <Card title={"Samurai Shodown"} description={"A weapon-based 2D fighting game set in feudal Japan with strategic combat."} imageSrc={SS} />
        <Card title={"BlazBlue"} description={"An anime-style 2D fighting game with complex mechanics and an engaging story."} imageSrc={BB} />
        <Card title={"Under Night In-Birth"} description={"A 2D fighting game with a unique cast and fast-paced combat."} imageSrc={UNI} />
        <Card title={"Skullgirls"} description={"A 2D fighting game with hand-drawn animation and a diverse cast of characters."} imageSrc={SG} />
        <Card title={"Killer Instinct"} description={"A fast-paced 2D fighting game with combo-heavy mechanics and unique characters."} imageSrc={KI} />
        <Card title={"Injustice"} description={"A fighting game featuring DC Comics characters with a focus on story and superpowers."} imageSrc={Injustice} />
        <Card title={"Darkstalkers"} description={"A 2D fighting game with a gothic horror theme and unique character designs."} imageSrc={DS} /> 
      </div>
    </>
  )
}

export default App
