import React, { useEffect, useRef } from 'react';
import './Portal.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';


const Portal = () => {
  const portalRef = useRef(null); // Create a ref for the Portal container

  useEffect(() => {


  }, []);

  return (
    <div ref={portalRef} className="appContainer" id="titleSection">
      <MainMenuSet />
    </div>
  );
};

export default Portal;