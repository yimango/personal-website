// Components/SlideInText.jsx
import React, { useEffect, useState } from 'react';
import styles from './SlideInText.module.css';

const SlideInText = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return <p className={[styles['slide-in-text'], ...(visible ? [styles.visible] : [])]}>{text}</p>;
};

export default SlideInText;
