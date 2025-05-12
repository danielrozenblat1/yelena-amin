import React from 'react';
import styles from './Me.module.css';
import yelena from "../../images/ילנה אמין תדמית.png"
import Button from '../button/Button';
import Recommends from '../recommends/Recommends';
import BeforeAfter from '../recommends/BeforeAfter';
import FormScreen from '../formScreen/FormScreen';
const AboutYelena = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={yelena} alt="ילנה אמין" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>ילנה אמין</h1>
          <div className={styles.subtitle}>"אני מאמינה שלכל אחת מגיע עור בריא ויפה"</div>
          <p className={styles.description}>
            ב-6 השנים האחרונות טיפלתי במאות לקוחות והובלתי אותן לשינוי אמיתי במראה העור שלהן. 
            אחת העבודות שלי בעבר הייתה לנהל סניף של מותג איפור מוביל, שם נחשפתי למגוון רחב של בעיות עור 
            והבנתי עד כמה חשוב הטיפול הנכון והמקצועי לעור הפנים שלנו.
          </p>
          <p className={styles.description}>
            אני יודעת כמה חשוב להרגיש ביטחון במראה שלך ולכן אני מקפידה על ליווי אישי וצמוד לכל אורך הדרך ולמעקב אחרי התוצאות. 
            אני תמיד כאן בשבילך - לייעץ, להקשיב, להדריך ולענות על כל שאלה שיש לך בדרך למטרה - עור פנים בריא.
       
           
          </p>
        </div>
      </div>
      <Recommends/>
      <BeforeAfter/>
     <FormScreen/>
    </>
  );
};

export default AboutYelena;