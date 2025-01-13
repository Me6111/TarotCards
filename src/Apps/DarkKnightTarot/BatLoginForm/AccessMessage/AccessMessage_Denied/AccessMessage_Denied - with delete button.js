


// AccessMessage_Denied.js


import React from 'react';
import './AccessMessage_Denied.css';

const AccessMessage_Denied = ({ onDelete }) => {
  const handleClick = () => {
    onDelete();
  };

  return (
    <div className="AccessMessage_Denied">
      <div className="AccessMessage_Denied_DeleteButton" onClick={handleClick}>X</div>
      <div className="AccessMessage_Denied_Title">ACCESS DENIED</div>
    </div>
  );
};

export default AccessMessage_Denied;