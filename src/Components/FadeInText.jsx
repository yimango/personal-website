import React, { useEffect, useState } from 'react';
import './FadeInText.css';

const FadeInText = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return <p className={`fade-in-text ${visible ? 'visible' : ''}`}>{text}</p>;
};

export default FadeInText;
