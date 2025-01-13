import React from 'react';
import './AccessMessage_Denied.css';

const AccessMessage_Denied = () => {
  const handleClick = () => {
    // Delete 'AccessMessage_Denied_Title' element
    const AccessMessage_Denied = document.querySelector('.AccessMessage_Denied');
    
    if (AccessMessage_Denied) {
      AccessMessage_Denied.addEventListener('click', function() {
        while (this.firstChild) {
          this.removeChild(this.firstChild);
        }
        
        // Check if there are no more childs inside 
        if (this.children.length === 0) {
          // Remove the entire AccessMessage_Denied element
          this.remove();
          // and update zIndex of AccessMessage 
          const AccessMessage = document.querySelector('.AccessMessage');
          AccessMessage.style.zIndex = '0';
        }
      });
    }

    // Create HTML content as string
    const AccessMessage_Denied_Hint = `
      <div class="AccessMessage_Denied_Hint">
        Hint: The hint
      </div>
    `;

    // Append new hint element using innerHTML
    document.querySelector('.AccessMessage_Denied').innerHTML = AccessMessage_Denied_Hint;
  };

  return (
    <div className="AccessMessage_Denied">
      <div className="AccessMessage_Denied_Title" onClick={handleClick}>
        ACCESS DENIED
      </div>
    </div>
  );
};

export default AccessMessage_Denied;