import React, { useEffect, useState } from 'react';
import styles from './FadeInText.module.css';

const FadeInText = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return <p className={[styles['fade-in-text'], ...(visible ? [styles.visible] : [])]}>{text}</p>;
};

export default FadeInText;
