import React, { useRef } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Card = ({ imageSrc, title, description }) => {

const data = useRef([]);
useEffect(() => {
    data.current[0] = title;
    data.current[1] = description;
    data.current[2] = imageSrc;
})

    return (
       <>
       
       
       
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
       
       </>
        
    );
};

export default Card;