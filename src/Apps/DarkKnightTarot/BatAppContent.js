import React, { useState, useEffect } from 'react';
import BatPasswordComponent from './BatPasswordComponent/BatPasswordComponent';

const BatAppContent = () => {
  const [passwordOk, setPasswordOk] = useState(false);

  useEffect(() => {
    if (passwordOk) {
      console.log('x');
      // Remove the component from the DOM
      document.getElementById('BatPasswordComponent').remove();
    }
  }, [passwordOk]);

  return (
    <div className="BatAppContent">
      <BatPasswordComponent passwordOk={passwordOk} />
    </div>
  );
};

export default BatAppContent;