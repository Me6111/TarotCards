import React, { useState, useEffect, useRef } from 'react';
import './ImagesSlider.css';

import hogwartsWindow from './hogwarts window/window4-3.png';
import clouds from './hogwarts window/clouds2.gif';

const ImagesSlider = () => {
  const [items, setItems] = useState(['a', 'b']);
  const [translateX, setTranslateX] = useState(0);
  const itemWidth = 100;

  const sliderRef = useRef(null);
  const elementRefs = useRef({}); // Store refs in an object

  useEffect(() => {
    console.log(items);
    console.log("Current 2nd element of the list:", items[1]);
  }, [items]);

  const nextSlide = () => {
    setItems((prevItems) => {
      const newItem = prevItems.shift();
      return [...prevItems, newItem];
    });

    setTranslateX((prevTranslateX) => prevTranslateX - itemWidth);
  };

  const prevSlide = () => {
    setItems((prevItems) => {
      const newItem = prevItems.pop();
      return [newItem, ...prevItems];
    });

    setTranslateX((prevTranslateX) => prevTranslateX + itemWidth);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translateX}%)`;
      sliderRef.current.style.transition = `transform 2s ease`;
    }
  }, [translateX]);

  useEffect(() => {
    
    const newLeft = (translateX * -1) + itemWidth;
    console.log('New left value for 2nd element:', newLeft);
    elementRefs.current[items[1]].style.left = `${newLeft}%`; 
    elementRefs.current[items[0]].style.left = `${newLeft-100}%`; 
    
  }, [translateX, items]);


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

        <div className="tp_slider_fields">
          <div className="tp_slider_fields_1" ref={sliderRef}>
            {items.map((item, index) => (
              <div
                key={item}
                className="tp_sliderField_0"
                id={item}
                ref={handleRef(item)} // Use the ref callback
                style={{ left: `${index * itemWidth}%` }}
              >
                <div className="tp_sliderField_0_background_0">
                  <img src={hogwartsWindow} alt={`Hogwarts Window ${item}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesSlider;