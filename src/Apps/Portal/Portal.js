import React, { useEffect, useRef } from 'react';
import './Portal.css';
import img0 from './img00.jpg';
import OpacityScroll from './sections/OpacityScroll/OpacityScroll';

const Portal = () => {
  const portalRef = useRef(null); // Create a ref for the Portal container

  useEffect(() => {

    // Removed unused scrollToBottom function

  }, []);

  return (
    <div ref={portalRef} className="appContainer" id="titleSection">
      <div className="section">
        <div className="img0scontainer">
          <div className="imgField" id="imgField0back">
            <img src={img0} alt="back" />
            <div className="subTitle">The journey to the end of the death</div>
          </div>
          <div className="imgField" id="imgField0front">
            <img src={img0} alt="front" />
            <div className="deathTitle">DEATH</div>
          </div>
        </div>
      </div>
      <OpacityScroll />
    </div>
  );
};

export default Portal;