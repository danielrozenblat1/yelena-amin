import NewBox from "../components/newBox/NewBox"
import styles from "./SecondScreen.module.css"
import face from "../Icons/wired-outline-1599-powder-makeup-face-hover-pinch (8).json"
import Bonus from "../components/newBox/NewBox"
import acne from "../Icons/wired-outline-1276-acne-herpes-hover-pinch.json"
import drip from "../Icons/wired-outline-447-water-drop-hover-split.json"
const SecondScreen=()=>{
  return <>
      <div className={styles.description}>זה לא חלום!</div>
      <div className={styles.title}>היום זה כבר לגמרי אפשרי</div>
      <div className={styles.row}>
          <Bonus 
              title="להראות יפה וחלקה גם בלי איפור" 
              description="להסתובב ולצאת מהבית בהרגשה שאת מושלמת, זוהרת וטבעית!"
              icon={face}
          />
          <Bonus 
              title="לטפל באקנה ללא תרופות וללא צלקות"
              description="להסתובב עם פנים חלקות,ללא פצעים,סימנים וללא סבל ונזק מתרופות חיצוניות"
              icon={acne}
          />
          <Bonus 
              title="להיפטר מכתמי עור ולטשטש קמטים ישנים" 
              description="להסתובב עם פנים נקיות, טבעיות וחלקות בטיפול מותאם אישית שעוזר לך להפטר מסימני הגיל" 
              icon={drip}
          />
      </div>
  </>
}

export default SecondScreen