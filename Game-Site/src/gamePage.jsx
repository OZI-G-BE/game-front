import React from 'react';
import { useParams, useOutletContext, Link } from 'react-router-dom';
import styles from './gamePage.module.css';
import App from './App';

const GamePage = () => {
const { gData } = useOutletContext();
const params = useParams();    
const data = gData.map((game) => game.props.children.props);
const realData = data.find((game) => game.children.props.title === params.title);

console.log(realData)
return (
    <>
        <div className={styles.gamePage}>
            
            <img src={realData.children.props.imageSrc} alt={"title"} className={styles.gameImage} />
            <h1 className={styles.gameTitle}>{realData.children.props.title}</h1>
            <p className={styles.gameDescription}>{realData.children.props.description}</p>
            {/* <p className={styles.gamePrice}>${price}</p> */}
        </div>
    </>
);
};

export default GamePage;