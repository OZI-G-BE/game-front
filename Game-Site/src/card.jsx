import React from 'react';
import styles from './Card.module.css';

const Card = ({ imageSrc, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default Card;