import styles from "./Recommends.module.css"
import result1 from "../../images/ילנה לפני אחרי 1.png"
import result2 from "../../images/ילנה לפני אחרי 2.png"
import result3 from "../../images/ילנה לפני אחרי 3.png"
import result4 from "../../images/ילנה לפני אחרי 4.png"
import result5 from "../../images/ילנה לפני אחרי 5.png"
import result6 from "../../images/ילנה לפני אחרי 6.png"
import result7 from "../../images/ילנה לפני אחרי 7.png"
import result8 from "../../images/ילנה לפני אחרי 8.png"

import result10 from "../../images/ילנה לפני אחרי 10.png"
import result11 from  "../../images/ילנה לפני אחרי 11.png"
import result12 from  "../../images/ילנה לפני אחרי 12.png"
import result13 from  "../../images/ילנה לפני אחרי 13.png"
import result14 from  "../../images/ילנה לפני אחרי 14.png"
import result15 from  "../../images/ילנה לפני אחרי 15.png"
import result16 from  "../../images/ילנה אמין לפני אחרי 6.png"
import result17 from  "../../images/ילנה אמין לפני אחרי 7.png"
import result18 from  "../../images/ילנה אמין לפני אחרי 8.png"
import result19 from  "../../images/ילנה אמין לפני אחרי 10.png"
import result20 from  "../../images/ילנה אמין לפני אחרי 12.png"
import result21 from  "../../images/ילנה אמין לפני אחרי 13.png"
import result22 from  "../../images/ילנה אמין לפני אחרי 15.png"
import result23 from  "../../images/ילנה אמין לפני אחרי 16.png"
import result24 from  "../../images/ילנה אמין לפני אחרי 17.png"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BeforeAfter=()=>{
    const sliderSettings = {
     
        infinite: true,
        speed: 700,
        autoplaySpeed: 2500,
        infinite: true,
   
        dots:false,
        
        slidesToShow: window.innerWidth < 450 ? 1 :
                 
                      window.innerWidth <= 1050 ? 2 : 4,
        slidesToScroll:1,
                     
      };
      const content = [
        {
          type: 'image',
          src: result1,
        },
        {
          type: 'image',
          src: result11,
        },
        {
          type: 'image',
          src: result12,
        },
        {
          type: 'image',
          src: result23,
        },
        {
          type: 'image',
          src: result24,
        },
        {
          type: 'image',
          src: result16,
        },
        {
          type: 'image',
          src: result17,
        },
        {
          type: 'image',
          src: result13,
        },
        {
          type: 'image',
          src: result14,
        },
        {
          type: 'image',
          src: result19,
        },
        {
          type: 'image',
          src: result15,
        },
        {
          type: 'image',
          src: result18,
        },
        {
          type: 'image',
          src: result8,
        },
        {
          type: 'image',
          src: result10,
        },
      
        {
          type: 'image',
          src: result20,
        },
        {
          type: 'image',
          src: result21,
        },
        {
          type: 'image',
          src: result22,
        },
        {
          type: 'image',
          src: result2,
        },
        {
          type: 'image',
          src: result3,
        },
        {
          type: 'image',
          src: result4,
        }, 
        
        {
          type: 'image',
          src: result5,
        },
          {
            type: 'image',
            src: result6,
          },
          {
            type: 'image',
            src: result7,
          },
        ];  
return <>
<div className={styles.title} id="לקוחות ממליצות">ואיך אפשר בלי קצת תוצאות</div>
<div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} >
              {item.type === 'image' && (
                <img src={item.src} className={styles.image1} alt={`ילנה אמין לקוחה ממליצה מספר ${index + 1}`} />
              )}
              {item.type === 'video' && (
                <video
                  style={{ width: "100%",display:"flex",objectFit:"cover", margin: "auto", height: "100%" }}
                  muted
                  controls
             
                >
                  <source src={item.src} type="video/mp4" />
             
                </video>
         
              )}
           <meta itemprop="datePublished" content={new Date().toISOString()} />
            </div>
            
          ))}
        </Slider>
      </div>


</>


}
export default BeforeAfter