import NewBox from "../components/newBox/NewBox"
import Treatments from "../components/treatments/Treatments"
import styles from "./ForthScreen.module.css"

const ForthScreen=()=>{
  return <>
      <div className={styles.title} id="הטיפולים שלי">הטיפולים שלי</div>
      <div className={styles.description}>כדי לתת לך את הטיפולים הכי מקצועיים שמספקים הכי הרבה תוצאות אני מתמקדת בשלושה תחומים עיקריים: </div>
    <Treatments/>
  
  </>
}

export default ForthScreen