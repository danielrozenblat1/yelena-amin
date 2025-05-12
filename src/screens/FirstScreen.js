import React, { useState, useEffect } from 'react';
import styles from './FirstScreen.module.css';

import middleImage from "../images/ילנה אמין תמונה מרכזית.png";
import rightImage from "../images/ילנה אמין תמונה ימין.png"
import leftImage from "../images/ילנה אמין תמונה שמאל.png"
import { ChevronDown } from 'lucide-react';
import Loader from '../components/loader/Loader';
// import GradientLoader from '../components/loader/Loader';

const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <Loader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>ילנה אמין</h1>
        <div className={styles.description}>טיפולים קוסמטים שיעזרו לך להשיג עור בריא,זוהר וחלק</div>
        <div className={styles.arrowContainer}>
          <ChevronDown size={32} className={styles.bounceArrow} strokeWidth={1}/>
        </div>
      </div>
  
    </div>
  );
};

export default FirstScreen;