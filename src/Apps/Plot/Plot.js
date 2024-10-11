// C:\Users\user\Desktop\projects\project-manager\src\Apps\Plot\Plot.js


// src/Apps/Plot/Plot.js




import React, { useEffect, useRef } from 'react';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import AppContent from './AppContent';
import './AppContent.css';


const Plot = () => {
  const ElementToRef = useRef(null); // Create a ref for the appContainer 

  useEffect(() => {


  }, []);

  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
      <AppContent />
    </div>
  );
};

export default Plot;