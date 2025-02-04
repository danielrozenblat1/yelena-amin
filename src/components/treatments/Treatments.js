import React from 'react';
import styles from './Treatments.module.css';
import acneImage from "../../images/אקנה חדש.jpg";
import antiagingImage from "../../images/אנטי אייג'יינג חדש.jpg";
import makeupImage from "../../images/אקנה.png";
import agingImage from "../../images/אייג'ינג חדש.png";
import Button from "../button/Button";

const YouTubeShort = ({ embedId, className }) => {
  return (
    <div className={`${styles.videoWrapper} ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.youtubeIframe}
      />
    </div>
  );
};

const Treatments = () => {
  const treatments = [
    {
      title: 'טיפול באקנה',
      targetAudience: 'בני נוער, מתבגרים ולמי שסובל מאקנה גם בגיל בוגר',
      description: 'טיפול מותאם אישית לפתרון בעיות אקנה ופצעים',
      stages: [
        'אבחון מצב העור וסוג האקנה',
        'תיאום ציפיות ובניית תכנית טיפול',
        'טיפול ראשוני והנחיות להמשך',
        'הדרכה לטיפול ביתי',
        'מעקב והתאמת הטיפול בהתאם לתוצאות'
      ],
      benefits: [
        'שיפור משמעותי במראה העור',
        'מניעת היווצרות צלקות',
        'חיזוק הביטחון העצמי',
        'מראה טבעי ובריא'
      ],
      problems: [
        'פצעי אקנה בכמות מוגברת',
        'צלקות כתוצאה מחטטת בעור',
        'דלקות שנשארו מהפצעים',
      ],
      youtubeId: 'Ih18O0xc_-I',
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
      youtubeId: 'i1SSwE4TpNE',
      mainImage: antiagingImage
    },
    {
      title: 'פרואייג׳ינג',
      targetAudience: 'נשים +45',
      description: 'טיפול מתקדם להתחדשות העור',
      stages: [
        'הערכת מצב העור',
        'טיפול בסימני גיל מתקדמים',
        'טיפול בכתמי פיגמנטציה',
        'שיפור מרקם העור',
        'הזנה אינטנסיבית',
        'תחזוקה והגנה'
      ],
      benefits: [
        'שיפור מרקם העור',
        'העלמת כתמי גיל',
        'הבהרת העור',
        'מראה רענן וחיוני',
        'עור בריא ומטופח'
      ],
      problems: [
        'קמטים עמוקים',
        'צניחת העור',
        'כתמי גיל'
      ],
      youtubeId: 'xhHbLpDKkm0',
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
                <YouTubeShort 
                  embedId={treatment.youtubeId}
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