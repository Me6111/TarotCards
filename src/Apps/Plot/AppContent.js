


import React, { useEffect, useRef } from 'react';
import './AppContent.css';


const AppContent = () => {
  const ElementToRef = useRef(null); 
  useEffect(() => {


  }, []);

  return (
    <div ref={ElementToRef} className="AppContent">
      <div className="AppContent_Field"></div>
      <div className="AppContent_Field"></div>
      <div className="AppContent_Field"></div>

    </div>
  );
};

export default AppContent;