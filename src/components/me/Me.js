import React from 'react';
import styles from './Me.module.css';
import yelena from "../../images/ילנה אמין תדמית.png"
import Button from '../button/Button';
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
            בעשור האחרון טיפלתי באלפי לקוחות והובלתי אותם לשינוי אמיתי במראה העור שלהם. 
            הדרך שלי החלה כשניהלתי סניף של מותג איפור מוביל, שם נחשפתי למגוון רחב של בעיות עור 
            והבנתי עד כמה חשוב הטיפול הנכון והמקצועי.
          </p>
          <p className={styles.description}>
            אני יודעת כמה חשוב להרגיש ביטחון במראה שלך, ולכן אני מקפידה על ליווי אישי וצמוד לכל אורך הדרך. 
            אני תמיד כאן בשבילך - לייעץ, להקשיב, להדריך ולענות על כל שאלה.
            העדיפות הראשונה שלי היא שתרגישי בנוח לשתף אותי בכל מה שעל ליבך, 
            ושתדעי שיש לך כתובת לכל התלבטות או חשש. יחד נבנה תכנית טיפול מותאמת אישית שתביא אותך לתוצאות שחלמת עליהן.
          </p>
        </div>
      </div>
      <Button text="ילנה, אני רוצה לתאם טיפול" message="היי ילנה הגעתי מהדף, אשמח לתאם איתך טיפול.."/>
    </>
  );
};

export default AboutYelena;