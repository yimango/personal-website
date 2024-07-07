import React from 'react';
import styles from './Contact.module.css'; // Import your CSS file for styling (create this file if it doesn't exist)

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["container-info"]}>
          <p className={styles["contact-item"]}>
            <span className={styles["contact-label"]}>Email:</span>
            <a href="mailto:yiwu.wang@gmail.com" className={styles["contact-link"]}>yiwu.wang@gmail.com</a>
          </p>
          <p className={styles["contact-item"]}>
            <span className={styles["contact-label"]}>Phone:</span>
            <span>+1 (647) 806-2338</span>
          </p>
          <p className={styles["contact-item"]}>
            <span className={styles["contact-label"]}>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/yi-wang9" target="_blank" rel="noopener noreferrer" className={styles["contact-link"]}>Yi Wang's LinkedIn Profile</a>
          </p>
        </div>
        <div className={styles["resume-link"]}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-icon.svg" alt="Resume Icon" className={styles["resume-icon"]} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
