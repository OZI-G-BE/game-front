import React from 'react';
import { useParams } from 'react-router-dom';

const gameContent = ({ image, title, description, price }) => {

const params = useParams();
console.log(params)    
return (
        <>
        
        <div className="gameContent">
            <img src={image} alt={title} className="gameImage" />
            <h1 className="gameTitle">{params.title}</h1>
            <p className="gameDescription">{description}</p>
            <p className="gamePrice">${price}</p>
        </div>
        </>
    );
};

export default gameContent;