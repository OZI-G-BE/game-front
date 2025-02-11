import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';


const GamePage = () => {
const { gData } = useOutletContext();
const params = useParams();    
const data = gData.map((game) => game.props.children.props);
console.log(data)
const realData = data.find((game) => game.title === params.title);
return (
        <>
        
        <div className="gamePage">
            <img src={realData.imageSrc} alt={"title"} className="gameImage" />
            <h1 className="gameTitle">{realData.title}</h1>
            <p className="gameDescription">{realData.description}</p>
            {/* <p className="gamePrice">${price}</p> */}
        </div>
        </>
    );
};

export default GamePage;