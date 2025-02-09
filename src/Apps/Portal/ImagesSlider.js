import React, { useState, useEffect, useRef } from 'react';
import './ImagesSlider.css';

import Tp_slider_fields from './tp_slider_fields';

import hogwartsWindow from './hogwarts window/window4-3.png';
import cardFrame from './cardFrame.png';

import clouds from './hogwarts window/clouds2.gif';

const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 21; // No need to store this in state if it's constant
  const items = ['a', 'b']; // No need to store this in state if it's constant
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(null);
  const fullWidth = 100;

  const sliderRef = useRef(null);
  const elementRefs = useRef({});
  // const [sliderState, setSliderState] = useState({ currentIndex: 0, direction: null })

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prevIndex => prevIndex + 1);
      setDirection('next');
      setTranslateX(prevTranslateX => prevTranslateX - fullWidth);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
      setDirection('prev');
      setTranslateX(prevTranslateX => prevTranslateX + fullWidth);
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
      sliderRef.current.style.transition = 'transform 2s ease';
    }
  }, [translateX]);

  useEffect(() => {
    if (direction && elementRefs.current[items[0]] && elementRefs.current[items[1]]) {
      const newLeft = translateX * -1;

      elementRefs.current[items[1]].style.left = `${newLeft}%`;
      elementRefs.current[items[0]].style.left = `${newLeft + (direction === 'prev' ? fullWidth : -fullWidth)}%`;

      setDirection(null);
    }
  }, [translateX, direction, items]);

  const handleRef = (id) => (el) => {
    elementRefs.current[id] = el;
  };

  return (
    <div className="TripleImagesSlider">
      <div className="tp_slider_0">
        <div className="NextPrevButtons">
          <span className="next" onClick={nextSlide}>&#10095;</span>
          <span className="prev" onClick={prevSlide}>&#10094;</span>
        </div>
      </div>
      <div className="tp_slider_1">
        <div className="tp_slider_fieldsBackground">
          <img src={clouds} alt="Background" />
        </div>
        <Tp_slider_fields
          SliderId = "slider_cardFrame"
          imgPath={cardFrame}
          currentIndex={currentIndex}
          fullWidth={fullWidth}
          sliderRef={sliderRef}
          items={items}
          direction={direction}
          handleRef={handleRef}
        />

        <Tp_slider_fields
          SliderId = "slider_hogwartsWindow"
          imgPath={hogwartsWindow}
          currentIndex={currentIndex}
          fullWidth={fullWidth}
          sliderRef={sliderRef}
          items={items}
          direction={direction}
          handleRef={handleRef}
        />

      </div>
    </div>
  );
};

export default ImagesSlider;