import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from './gamePage.module.css';

const GamePage = () => {
const { gData } = useOutletContext();
const params = useParams();    
const data = gData.map((game) => game.props.children.props);
console.log(data)
const realData = data.find((game) => game.title === params.title);
return (
        <>
        
        <div className={styles.gamePage}>
            <img src={realData.imageSrc} alt={"title"} className={styles.gameImage} />
            <h1 className={styles.gameTitle}>{realData.title}</h1>
            <p className={styles.gameDescription}>{realData.description}</p>
            {/* <p className={styles.gamePrice}>${price}</p> */}
        </div>
        </>
    );
};

export default GamePage;