// Components/TypeAnimation.jsx
import React, { useEffect, useState } from 'react';

const TypeAnimation = ({ message }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + message[index]);
        setIndex(index + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [index, message, displayedText]);

  return <p className="type-animation">{displayedText}</p>;
};

export default TypeAnimation;
