import React, { useRef, useState } from 'react';

import './Portal.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import ImagesSlider from './ImagesSlider';



const Portal = () => {
  const ElementToRef = useRef(null);


  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
    
      <ImagesSlider/>




    </div>
  );
};

export default Portal;