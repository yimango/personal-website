import React from 'react';
import styles from './Contact.module.css'; // Import your CSS file for styling (create this file if it doesn't exist)
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
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
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFileLines} className={styles["resume-icon"]} />
          &nbsp;
          Resume
        </a>
      </div>
    </footer>
  );
}

export default Footer;
