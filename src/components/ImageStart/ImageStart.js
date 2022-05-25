import React from 'react';
import startImg from './img/startImg.jpg';
import styles from './ImageStart.module.css';

const ImageStart = () => {
    return (
        <div className={styles.wrap}>
            <img src={startImg} alt='image' className={styles.img}></img>
        </div>
    );
}

export default ImageStart;
