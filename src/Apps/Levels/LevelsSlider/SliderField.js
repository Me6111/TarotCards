

// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\LevelsSlider\SliderField.js


import React, { useState, useEffect } from 'react';

const SliderField = ({ imgInner1, imgInner2, title }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSliderFieldClick = () => {
    setIsActive(true);
  };

  const handleLevelsSliderClick = (event) => {
    if (!event.target.closest(`#slider-field-${title.split(' ').join('_')}`)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    const levelsSlider = document.querySelector('.LevelsSlider');
    levelsSlider.addEventListener('click', handleLevelsSliderClick);
    return () => {
      levelsSlider.removeEventListener('click', handleLevelsSliderClick);
    };
  }, []);

  return (
    <div
      className={`slider-field ${isActive ? 'active' : ''}`}
      id={`slider-field-${title.split(' ').join('_')}`}
      onClick={handleSliderFieldClick}
    >
      <div className="slider-field-inner1">
        <img src={imgInner1} alt={title} id={`inner1-${title.split(' ').join('_')}`} />
      </div>
      <div className="slider-field-inner2">
        <img src={imgInner2} alt={title} />
        <div className="slider-field-title">{title}</div>
      </div>
    </div>
  );
};

export default SliderField;





/*

import React from 'react';

const SliderField = ({ imgInner1, imgInner2, title }) => {
  return (
    <div className="slider-field" id={`slider-field-${title.split(' ').join('_')}`}>
      <div className="slider-field-inner1" >
      <img src={imgInner1} alt={title} id={`inner1-${title.split(' ').join('_')}`} />
      </div>
      <div className="slider-field-inner2">
        <img src={imgInner2} alt={title} />
        <div className="slider-field-title">{title}</div>
      </div>
    </div>
  );
};

export default SliderField;

*/