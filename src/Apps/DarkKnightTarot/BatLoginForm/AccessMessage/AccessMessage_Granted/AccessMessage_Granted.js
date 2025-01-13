









// AccessMessage_Granted.js




import React, { useState, useEffect } from 'react';
import './AccessMessage_Granted.css';

const AccessMessage_Granted = ({ onDelete }) => {
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('Welcome Master Ocampo');
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    if (showHint) {
      const intervalId = setInterval(() => {
        setLetterIndex(prevIndex => prevIndex + 1);
      }, 200);

      return () => clearInterval(intervalId);
    }
  }, [showHint]);

  const handleClick = () => {
    onDelete();
  };

  const handleTitleClick = () => {
    setShowHint(true);
  };

  return (
    <div className="AccessMessage_Granted">
      {showHint ? (
        <div className="AccessMessage_Granted_Hint" onClick={handleClick}>
          {hintText.substring(0, letterIndex)}
          <span className="cursor">|</span>
        </div>
      ) : (
        <div className="AccessMessage_Granted_Title" onClick={handleTitleClick}>ACCESS GRANTED</div>
      )}
    </div>
  );
};

export default AccessMessage_Granted;