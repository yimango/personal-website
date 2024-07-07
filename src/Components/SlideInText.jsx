// Components/SlideInText.jsx
import React, { useEffect, useState } from 'react';
import './SlideInText.css';

const SlideInText = ({ text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 500);
  }, []);

  return <p className={`slide-in-text ${visible ? 'visible' : ''}`}>{text}</p>;
};

export default SlideInText;
