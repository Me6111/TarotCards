import React, { useRef, useState } from 'react';

import './Portal.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';



const Portal = () => {
  const ElementToRef = useRef(null);


  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
    
      <div className="TitleField">
        TAROT CARDS
      </div>




    </div>
  );
};

export default Portal;