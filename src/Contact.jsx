import React from 'react';
import './Contact.css'; // Import your CSS file for styling (create this file if it doesn't exist)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <p className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:yiwu.wang@gmail.com" className="contact-link">yiwu.wang@gmail.com</a>
          </p>
          <p className="contact-item">
            <span className="contact-label">Phone:</span>
            <span>+1 (647) 806-2338</span>
          </p>
          <p className="contact-item">
            <span className="contact-label">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/yi-wang9" target="_blank" rel="noopener noreferrer" className="contact-link">Yi Wang's LinkedIn Profile</a>
          </p>
        </div>
        <div className="resume-link">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <img src="/path-to-your-icon.svg" alt="Resume Icon" className="resume-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
