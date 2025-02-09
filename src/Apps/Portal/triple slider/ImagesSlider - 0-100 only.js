import React, { useRef, useState } from 'react';
import './ImagesSlider.css';

import hogwartsWindow from './hogwarts window/window4-3.png';
import clouds from './hogwarts window/clouds2.gif';

const ImagesSlider = () => {
  const tp_slider_fields = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState('2s'); // Initial duration

  const handleNext = () => {
    setTransitionDuration('0s'); // Instant transition
    setTranslateX(100);

    setTimeout(() => {
      setTransitionDuration('2s'); // Smooth transition back to 0
      setTranslateX(0);
    }, 0); // Immediately after setting translateX
  };

  const handlePrev = () => {
    setTransitionDuration('0s'); // Instant transition
    setTranslateX(-100);

    setTimeout(() => {
      setTransitionDuration('2s'); // Smooth transition back to 0
      setTranslateX(0);
    }, 0); // Immediately after setting translateX
  };

  return (
    <div className="TripleImagesSlider">
      <div className="tp_slider_0">
        <div className="NextPrevButtons">
          <span className="next" onClick={handleNext}>&#10095;</span>
          <span className="prev" onClick={handlePrev}>&#10094;</span>
        </div>
      </div>
      <div className="tp_slider_1">
        <div className="tp_slider_fieldsBackground">
          <img src={clouds} alt="Background" />
        </div>
        <div
          className="tp_slider_fields"
          ref={tp_slider_fields}
          style={{
            transform: `translateX(${translateX}%)`,
            transition: `transform ${transitionDuration} ease-in-out`, // Dynamic transition
          }}
        >
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