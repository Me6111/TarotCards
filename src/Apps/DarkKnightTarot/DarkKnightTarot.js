// C:\Users\user\Desktop\projects\project-manager\src\Apps\DarkKnightTarot\DarkKnightTarot.js


// src/Apps/DarkKnightTarot/DarkKnightTarot.js




import React, { useEffect, useRef } from 'react';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import BatAppContent from './BatAppContent';
import './BatAppContent.css';


const DarkKnightTarot = () => {
  const ElementToRef = useRef(null); // Create a ref for the appContainer 

  useEffect(() => {


  }, []);

  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
      <BatAppContent />
    </div>
  );
};

export default DarkKnightTarot;