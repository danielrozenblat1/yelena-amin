import React, { useRef, useState } from 'react';
import styles from './FormScreen.module.css';

const FormScreen = () => {
  // State for validation errors
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    reason: ''
  });

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs for form fields
  const fullNameRef = useRef(null);
  const phoneRef = useRef(null);
  const mailRef = useRef(null);
  const reasonRef = useRef(null);

  // Server settings
  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "yelenaa0911@gmail.com";

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = fullNameRef.current.value;
    const phone = phoneRef.current.value;
    const email = mailRef.current.value;
    const reason = reasonRef.current.value;
    
    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Validate full name
    if (!name.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      valid = false;
    } else if (name.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      valid = false;
    }

    // Validate phone number (Israeli format)
    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      valid = false;
    } else if (!phoneRegex.test(phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'נא להזין כתובת אימייל';
      valid = false;
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
      valid = false;
    }

    // Validate reason
    if (!reason.trim()) {
      newErrors.reason = 'נא להזין סיבת פנייה';
      valid = false;
    } else if (reason.trim().length < 5) {
      newErrors.reason = 'סיבת הפנייה חייבת להכיל לפחות 5 תווים';
      valid = false;
    }

    setErrors(newErrors);
    
    if (!valid) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Server data object
    const serverData = {
      name: name,
      phone: phone,
      email: email,
      reason: reason,
      reciver: reciver
    };

    try {
      // Send to server
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          fullNameRef.current.value = "";
          phoneRef.current.value = "";
          mailRef.current.value = "";
          reasonRef.current.value = "";
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formScreenContainer} id="טופס">
      <div className={styles.titleContainer}>
        <div className={styles.title}>צרו איתי קשר</div>
      </div>
      
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="fullName">שם מלא</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
              placeholder="השם המלא שלך"
              disabled={isSubmitting || submitted}
              ref={fullNameRef}
              autoComplete="off"
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">מספר טלפון</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
              placeholder="050-0000000"
              disabled={isSubmitting || submitted}
              ref={phoneRef}
              autoComplete="off"
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">כתובת אימייל</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="your@email.com"
              disabled={isSubmitting || submitted}
              ref={mailRef}
              autoComplete="off"
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="reason">סיבת הפנייה</label>
            <textarea
              id="reason"
              name="reason"
              className={`${styles.textarea} ${errors.reason ? styles.inputError : ''}`}
              placeholder="ספרו לי במה אוכל לעזור לכם"
              rows={4}
              disabled={isSubmitting || submitted}
              ref={reasonRef}
              autoComplete="off"
            />
            {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
            disabled={isSubmitting || submitted}
          >
            {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'ילנה, בואי נדבר!'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormScreen;