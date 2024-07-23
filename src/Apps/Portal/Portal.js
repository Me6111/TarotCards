import React from 'react';
import './Portal.css';
import img0 from './img00.jpg';
import circleImg from './circles0.jpg';
import deathImg from './deathImg.jpg';
import Plot from './sections/plot/Plot'; // Import Plot component

const Portal = () => {
  return (
    <div className="appContainer" id="titleSection">
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

        <Plot /> 
    </div>
  );
};

export default Portal;



//<div className="imgField" id="circleImg">
//<img src={circleImg} alt="circleImg" />
//</div>