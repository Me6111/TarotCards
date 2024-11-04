

// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\LevelsSlider\SliderField.js


import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SliderField = ({ imgInner1, imgInner2, title }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const selectedLevel = useSelector(state => state.selectedLevel);

  const handleSliderFieldClick = () => {
    setIsActive(!isActive);
    dispatch({ type: 'SELECT_LEVEL', payload: title });
  };

  useEffect(() => {
    const levelsSlider = document.querySelector('.LevelsSlider');
    const handleLevelsSliderClick = (event) => {
      if (!event.target.closest(`#slider-field-${title.split(' ').join('_')}`)) {
        setIsActive(false);
      }
    };
    
    levelsSlider.addEventListener('click', handleLevelsSliderClick);
    return () => {
      levelsSlider.removeEventListener('click', handleLevelsSliderClick);
    };
  }, [title]);

  useEffect(() => {
    const levelInfoFieldCurtain = document.querySelector('.LevelInfoField-curtain');
  
    const handleLevelInfoFieldCurtainClick = (event) => {
      if (event.target === levelInfoFieldCurtain) {
        setIsActive(false);
        dispatch({ type: 'SELECT_LEVEL', payload: null });
      }
    };
  
    levelInfoFieldCurtain.addEventListener('click', handleLevelInfoFieldCurtainClick);
  
    return () => {
      levelInfoFieldCurtain.removeEventListener('click', handleLevelInfoFieldCurtainClick);
    };
  }, [dispatch]);

  useEffect(() => {
    if (!isActive && !selectedLevel) {
      const sliderFieldElement = document.getElementById(`slider-field-${title.split(' ').join('_')}`);
      if (sliderFieldElement) {
        sliderFieldElement.classList.remove('active');
        sliderFieldElement.classList.remove('selected');
      }
    }
  }, [isActive, selectedLevel, title]); // Add 'title' to the dependency array

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