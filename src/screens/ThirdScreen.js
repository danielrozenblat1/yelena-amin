import styles from "./ThirdScreen.module.css"
import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import ScrollReveal from "scrollreveal"
import confident from "../Icons/wired-lineal-633-female-standing-morph-success (3).json"
import calm from "../Icons/wired-lineal-628-yoga-female-hover-pinch (1).json"
import results from "../Icons/wired-lineal-2466-administration-approved-hover-pinch.json"
import spa from "../Icons/wired-lineal-1574-spa-flower-hover-pinch.json"
import yourself from "../Icons/wired-lineal-529-boy-girl-children-hover-pinch.json"
const ThirdScreen = () => {
    const playerRef1 = useRef()
    const playerRef2 = useRef()
    const playerRef3 = useRef()
    const playerRef4 = useRef()
    const playerRef5 = useRef()
    
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.title}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        ScrollReveal().reveal(`.${styles.section}`, {
            duration: 1000,
            distance: "30px",
            origin: "right",
            easing: "ease-in-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        ScrollReveal().reveal(`.${styles.stepHeader}`, {
            duration: 1000,
            distance: "30px",
            origin: "top",
            easing: "ease-in-out",
            reset: false,
            viewFactor: 0.2,
            interval: 300,
            delay: 200,
            scale: 1,
        });
        
        playerRef1.current?.playFromBeginning();
        playerRef2.current?.playFromBeginning();
        playerRef3.current?.playFromBeginning();
        playerRef4.current?.playFromBeginning();
        playerRef5.current?.playFromBeginning();
    }, [])

    return (
        <div className={styles.background} itemscope itemtype="https://schema.org/MedicalOrganization">
            <div className={styles.title} itemprop="name">ילנה, למה כדאי לי להתחיל טיפול קוסמטי?</div>
            <div className={styles.bigWrapper}>
                <div className={styles.step} itemscope itemtype="https://schema.org/MedicalProcedure">
                    <div className={styles.icons}>
                        <Player ref={playerRef1} size="100%" onComplete={() => playerRef1.current?.playFromBeginning()} icon={calm} />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemprop="name">ביטחון עצמי והרגשה טובה</div>
                        <div className={styles.section} itemprop="description">טיפול קוסמטי מקצועי מעניק לך הרבה יותר מאשר שיפור במראה החיצוני - הוא מחזק את הביטחון העצמי ומעניק תחושת רעננות והתחדשות. כשאת מרגישה טוב עם העור שלך, זה משפיע על כל תחומי החיים</div>
                    </div>
                </div>

                <div className={styles.step} itemscope itemtype="https://schema.org/MedicalProcedure">
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemprop="name">טיפול עדין ובטוח</div>
                        <div className={styles.section} itemprop="description">בניגוד לטיפולים תרופתיים שמשפיעים על כל הגוף, טיפול קוסמטי הוא נקודתי ועדין. אנחנו משתמשים בשיטות וחומרים שפועלים בדיוק במקום הנכון, בלי להשפיע על שאר מערכות הגוף</div>
                    </div>
                    <div className={styles.icons}>
                        <Player ref={playerRef2} delay={500} size="100%" onComplete={() => playerRef2.current?.playFromBeginning()} icon={spa} />
                    </div>
                </div>

                <div className={styles.step} itemscope itemtype="https://schema.org/MedicalProcedure">
                    <div className={styles.icons}>
                        <Player ref={playerRef3} size="100%" onComplete={() => playerRef3.current?.playFromBeginning()} icon={confident} />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemprop="name">זמן איכות לעצמך</div>
                        <div className={styles.section} itemprop="description">הטיפול הקוסמטי הוא הרבה יותר מאשר רק טיפוח - זו הזדמנות להקדיש זמן לעצמך, להירגע ולהתפנק. זה הזמן שלך לנוח, להתחדש ולצאת עם אנרגיות חדשות</div>
                    </div>
                </div>

                <div className={styles.step} itemscope itemtype="https://schema.org/MedicalProcedure">
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemprop="name">תוצאות מיידיות ומתמשכות</div>
                        <div className={styles.section} itemprop="description">טיפולים קוסמטיים מספקים שיפור שאת יכולה לראות כבר מהטיפול הראשון, מה שמעניק סיפוק מיידי. עם המשך הטיפולים, התוצאות משתפרות ומתייצבות, מה שתורם לתחושת ביטחון מתמשכת</div>
                    </div>
                    <div className={styles.icons}>
                        <Player ref={playerRef4} delay={500} size="100%" onComplete={() => playerRef4.current?.playFromBeginning()} icon={results} />
                    </div>
                </div>

                <div className={styles.step} itemscope itemtype="https://schema.org/MedicalProcedure">
                    <div className={styles.icons}>
                        <Player ref={playerRef5} size="100%" onComplete={() => playerRef5.current?.playFromBeginning()} icon={yourself} />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemprop="name">השקעה בעצמך</div>
                        <div className={styles.section} itemprop="description">להשקיע בטיפוח העור שלך זו דרך נהדרת להראות לעצמך שאת חשובה. זו לא רק השקעה במראה החיצוני, אלא גם בבריאות העור שלך ובתחושה הכללית שלך - השקעה שמשתלמת בטווח הארוך</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdScreen