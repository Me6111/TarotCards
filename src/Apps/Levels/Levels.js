// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js


// src/Apps/Levels/Levels.js




import React, { useEffect, useRef } from 'react';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import LevelsSlider from './LevelsSlider/LevelsSlider';

import './appContainer_Levels.css';


const Levels = () => {
  const ElementToRef = useRef(null); // Create a ref for the appContainer 

  useEffect(() => {


  }, []);

  return (
    <div ref={ElementToRef} id="appContainer_Levels">
      <MainMenuSet />
      <div className="LevelsSlider">
        <LevelsSlider />
      </div>


    </div>
  );
};

export default Levels;