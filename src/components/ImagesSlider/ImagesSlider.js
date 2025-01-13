


// C:\Users\user\Desktop\projects\Death\project-manager\src\components\ImagesSlider\ImagesSlider.js

import React, { useState } from 'react';
import './ImagesSlider.css';




const ImagesSlider = ({ slidesData, SliderField, currentIndex, setCurrentIndex, scrollProps}) => {


  const imgPaths = slidesData.map(item => item.imgPath);

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgPaths.length) % imgPaths.length);
  };

  return (
    <div className="ImagesSlider">
      <div className="slider_0">

        <div className={scrollProps.scrollTop > 0 ? "slider_00 expanded" : "slider_00"}>

          <div className="slider_fields" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slidesData.map((item) => (
              <div className="sliderField_0" key={item.title}>
                {SliderField ? 
                  <SliderField {...item}/> : 
                  <img className="ImgFieldMain" src={item.imgPath} alt={item.title} 
                />}
              </div>
            ))}
          </div>

          <div className="NextPrevButtons">
            <span className="next" onClick={nextSlide}>&#10095;</span>
            <span className="prev" onClick={prevSlide}>&#10094;</span>
          </div>

        </div>
      </div>   


      <div className="slider_1">
        <div className="slider_fields" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slidesData.map((item) => (
            <div className="sliderField_0">
              <div className="sliderField_0_background_0">
                <img src={item.imgPath} alt={`Background for ${item.title}`} />
              </div>

              <div className={scrollProps.scrollTop > 0 ? "sliderField_0_background_1 expanded" : "sliderField_0_background_1"}>
                <img src={item.background || item.imgPath} alt={`Background for ${item.title}`} />
              </div>

            </div>
          ))}
        </div>
      </div> 

    </div>
  );
};

export default ImagesSlider;




