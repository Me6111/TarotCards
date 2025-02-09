import React, { useState, useEffect, useRef } from 'react';
import './ImagesSlider.css';

import hogwartsWindow from './hogwarts window/window4-3.png';
import clouds from './hogwarts window/clouds2.gif';

const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(21);
  const [items] = useState(['a', 'b']);
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(null);
  const fullWidth = 100;

  const sliderRef = useRef(null);
  const elementRefs = useRef({});

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
      sliderRef.current.style.transition = 'transform 0.5s ease';
    }
  }, [translateX]);

  useEffect(() => {
    if (direction) { // Only update positions if direction is set
      const newLeft = (translateX * -1) ;

      elementRefs.current[items[1]].style.left = `${newLeft}%`;
      if (direction === 'prev') {
        elementRefs.current[items[0]].style.left = `${newLeft + fullWidth}%`;
      } else if (direction === 'next') {
        elementRefs.current[items[0]].style.left = `${newLeft - fullWidth}%`;
      }

      setDirection(null); // Reset direction after updating positions
    }
  }, [translateX, items, direction]); // Add direction to the dependency array

  const handleRef = (id) => (el) => {
    if (el) {
      elementRefs.current[id] = el;
    }
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
        <div className="tp_slider_fields" ref={sliderRef}>
            {items.map((item, index) => (
              <div
                key={item}
                className="tp_sliderField_0"
                id={item}
                ref={handleRef(item)}
                style={{ left: `${index * fullWidth}%` }} // Initial positions
              >
                <div className="tp_sliderField_0_background_0">
                  <img src={hogwartsWindow} alt="Hogwarts Window" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesSlider;