import React, { useEffect, useState, useRef } from 'react';
import styles from './Treatments.module.css';
import acne from "../../videos/ילנה סרטון אקנה.mp4";
import makeup from "../../videos/ילנה סרטון מייקאפ.mp4";
import aging from "../../videos/ילנה סרטון פיגמנטציה.mp4";
import mahshir from "../../images/ילנה תמונה מכשיר.png";
import acneImage from "../../images/אקנה.png";
import antiagingImage from "../../images/אנטי אייגינג.png";
import makeupImage from "../../images/אקנה.png";
import agingImage from "../../images/אייגינג.png";
import Button from "../button/Button"

const VideoWithThumbnail = ({ videoSource, className }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.style.opacity = '0';
    
    const generateThumbnail = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        setThumbnailUrl(url);
        video.style.opacity = '1';
      }, 'image/jpeg', 1.0);
    };

    const handleLoadedMetadata = () => {
      video.currentTime = 0.1;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', generateThumbnail, { once: true });
    
    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', generateThumbnail);
      if (thumbnailUrl) {
        URL.revokeObjectURL(thumbnailUrl);
      }
    };
  }, []);

  return (
    <video 
      ref={videoRef}
      controls 
      className={className}
      style={{ transition: 'opacity 0.3s ease' }}
      src={videoSource}
      poster={thumbnailUrl}
    >
      <source src={videoSource} type="video/mp4" />
    </video>
  );
};

const Treatments = () => {
  const treatments = [
    {
      title: 'טיפול באקנה',
      targetAudience: '+18',
      description: 'טיפול מותאם אישית לפתרון בעיות אקנה ופצעים',
      stages: [
        'אבחון מצב העור וסוג האקנה',
        'תיאום ציפיות ובניית תכנית טיפול',
        'טיפול ראשוני והנחיות להמשך',
        'הדרכה לטיפול ביתי',
        'מעקב והתאמת הטיפול'
      ],
      benefits: [
        'שיפור משמעותי במראה העור',
        'מניעת היווצרות צלקות',
        'חיזוק הביטחון העצמי',
        'מראה טבעי ובריא'
      ],
      problems: [
    
        'פצעים ודלקות',
        'צלקות שנשארו מהפצעים',

      ],
      videoId: acne,
      mainImage: acneImage
    },
    {
      title: 'אנטי אייג׳ינג',
      targetAudience: 'נשים +25',
      description: 'טיפול מונע והפחתת סימני גיל',
      stages: [
        'אבחון מצב העור',
        'התאמת פרוטוקול טיפולים',
        'טיפול בכתמי שמש',
        'הזנה והגנה',
        'תחזוקה שוטפת'
      ],
      benefits: [
        'מראה צעיר וזוהר',
        'הפחתת קמטים',
        'שיפור טקסטורת העור',
        'האטת תהליכי הזדקנות'
      ],
      problems: [
        'כתמי שמש',
        'קמטים',
        'עור עייף',
        'חוסר אחידות בגוון העור'
      ],
      videoId: aging,
      mainImage: antiagingImage
    },
    {
      title: 'אייג׳ינג',
      targetAudience: 'נשים +45',
      description: 'טיפול מתקדם להתחדשות העור',
      stages: [
        'הערכת מצב העור',
        'טיפול בסימני גיל מתקדמים',
        'שיפור מרקם העור',
        'הזנה אינטנסיבית',
        'תחזוקה והגנה'
      ],
      benefits: [
        'שיפור מרקם העור',
        'העלמת כתמי גיל',
        'מראה רענן וחיוני',
        'עור בריא ומטופח'
      ],
      problems: [
   
        'קמטים עמוקים',
        'צניחת העור',
        'כתמי גיל'
      ],
      videoId: makeup,
      mainImage: agingImage
    }
  ];

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.grid}>
        {treatments.map((treatment, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.backgroundImageContainer}>
              <img 
                src={treatment.mainImage}
                alt="" 
                className={styles.backgroundImage} 
              />
            </div>
            <div className={styles.contentOverlay}>
              <div className={styles.titleContent}>
                <h2 className={styles.title}>{treatment.title}</h2>
                <div className={styles.audience}>מיועד ל: {treatment.targetAudience}</div>
              </div>
              <p className={styles.description}>{treatment.description}</p>
              
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>שלבי הטיפול:</h3>
                <div className={styles.stages}>
                  {treatment.stages.map((stage, idx) => (
                    <p key={idx} className={styles.stage}>{stage}</p>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>במה זה יעזור לך?</h3>
                <div className={styles.benefitsContainer}>
                  {treatment.benefits.map((benefit, idx) => (
                    <span key={idx} className={styles.benefit}>{benefit}</span>
                  ))}
                </div>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>פותר את הבעיות הבאות:</h3>
                <div className={styles.problemsList}>
                  {treatment.problems.map((problem, idx) => (
                    <p key={idx} className={styles.problem}>{problem}</p>
                  ))}
                </div>
              </div>

              <div className={styles.videoSection}>
                <h3 className={styles.sectionTitle}>קצת ממני על הטיפול:</h3>
                <VideoWithThumbnail 
                  videoSource={treatment.videoId}
                  className={styles.video}
                />
                <div className={styles.buttonContainer}>
                  <Button 
                    text="אני רוצה לתאם טיפול"
                    message={`היי ילנה, הגעתי מהדף! אשמח לשמוע עוד לגבי ${treatment.title}`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;