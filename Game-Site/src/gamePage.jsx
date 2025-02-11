import React from 'react';
import { useParams } from 'react-router-dom';
import Card from './card';

const GamePage = () => {

const params = useParams();   
return (
        <>
        
        <div className="gamePage">
            <img src={image} alt={title} className="gameImage" />
            <h1 className="gameTitle">{params.title}</h1>
            <p className="gameDescription">{description}</p>
            <p className="gamePrice">${price}</p>
        </div>
        </>
    );
};

export default GamePage;