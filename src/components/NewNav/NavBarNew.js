import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from "react-scroll";
import styles from './NavBarNew.module.css';
import logo from "../../images/ילנה אמין לוגו.png"
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    const phoneNumber = "+972529408733";
    const message = "היי ילנה הגעתי מהדף, אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const menuItems = ['הטיפולים שלי','שאלות תשובות', 'מי אני'];

  return (
    <nav className={styles.navbar}>
      {windowWidth <= 850 && (
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}
      {windowWidth <= 850 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      {(isMenuOpen || isClosing) && windowWidth <= 850 && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <ScrollLink 
                key={index} 
                to={item} 
                smooth={true} 
                offset={-100}
                duration={700} 
                onClick={toggleMenu}
                className={styles.mobileMenuItem}
              >
                {item}
              </ScrollLink>
            ))}
            <div className={styles.center}>
              <img className={styles.image} src={logo} alt="ילנה אמין לוגו"/>
            </div>
          </div>
        </div>
      )}
      {windowWidth > 850 && (
        <div className={styles.menuItems}>
          {menuItems.map((item, index) => (
            <ScrollLink 
              key={index} 
              offset={-100}
              to={item} 
              smooth={true} 
              duration={500}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
      {windowWidth > 1050 && (
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      )}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/yelena_amin_cosmetics/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a onClick={handleClick}><FaWhatsapp /></a>
      </div>
    </nav>
  );
};

export default NavBarNew;