import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount or re-render
    }
  }, [index, text, speed]); // Re-run effect if index, text, or speed changes

  return <span>{displayedText}</span>;
};

export default Typewriter;
