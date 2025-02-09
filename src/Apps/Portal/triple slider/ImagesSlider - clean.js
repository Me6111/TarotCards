import React from 'react';
import './ImagesSlider.css';

import hogwartsWindow from './hogwarts window/window4-3.png';
import clouds from './hogwarts window/clouds2.gif';

const ImagesSlider = () => {


  return (
    <div className="TripleImagesSlider">
      <div className="tp_slider_0">
        <div className="NextPrevButtons">
          <span className="next" >&#10095;</span>
          <span className="prev" >&#10094;</span>
        </div>
      </div>
      <div className="tp_slider_1">
        <div className="tp_slider_fieldsBackground">
          <img src={clouds} alt="Background" />
        </div>
        <div className="tp_slider_fields">

            <div className="tp_sliderField_0" id="a">
              <div className="tp_sliderField_0_background_0">
                <img src={hogwartsWindow} alt="Hogwarts Window" />
              </div>
            </div>

            <div className="tp_sliderField_0" id="b">
              <div className="tp_sliderField_0_background_0">
                <img src={hogwartsWindow} alt="Hogwarts Window" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSlider;