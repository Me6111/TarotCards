import React, { useEffect } from 'react';
import BatPasswordComponent from './BatPasswordComponent/BatPasswordComponent';

const BatAppContent = () => {
  useEffect(() => {
    // Remove the component from the DOM
    document.getElementById('BatPasswordComponent').remove();
  }, []);

  return (
    <div className="BatAppContent">
      <BatPasswordComponent />
    </div>
  );
};

export default BatAppContent;