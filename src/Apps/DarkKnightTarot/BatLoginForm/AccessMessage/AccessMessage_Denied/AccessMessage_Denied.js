// AccessMessage_Denied.js

import React, { useState, useEffect } from 'react';
import './AccessMessage_Denied.css';

const AccessMessage_Denied = ({ onDelete }) => {
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('Hint: madness');
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
    <div className="AccessMessage_Denied">
      {showHint ? (
        <div className="AccessMessage_Denied_Hint" onClick={handleClick}>
          {hintText.substring(0, letterIndex)}
          <span className="cursor">|</span>
        </div>
      ) : (
        <div className="AccessMessage_Denied_Title" onClick={handleTitleClick}>ACCESS DENIED</div>
      )}
    </div>
  );
};

export default AccessMessage_Denied;