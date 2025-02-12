import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import styles from './gamePage.module.css';


const GamePage = () => {
const { gData } = useOutletContext();
const params = useParams();    
const data = gData.map((game) => game.props.children.props);
const realData = data.find((game) => game.children.props.title === params.title);
return (
    <>
        <div className={styles.gamePage}>
            
            <img src={realData.children.props.imageSrc} alt={"title"} className={styles.gameImage} />
            <h1 className={styles.gameTitle}>{realData.children.props.price} &nbsp; {realData.children.props.title}</h1>
            <ul>
                <li>
                    <strong>Developer:</strong> {realData.children.props.developer}
                </li>
                <li>
                    <strong>Publisher:</strong> {realData.children.props.publisher}
                </li>
                <li>
                    <strong>Genre:</strong> {realData.children.props.genre}
                </li>
                </ul>
            <p className={styles.gameDescription}>{realData.children.props.longDescription}</p>
            
        </div>
    </>
);
};

export default GamePage;