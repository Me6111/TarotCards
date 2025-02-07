


// C:\Users\user\Desktop\projects\Death\project-manager\src\components\ImagesSlider\ImagesSlider.js

import React, { useState } from 'react';
import './ImagesSlider.css';


import hogwartsWindow from './hogwarts window/window4-3.png'
import clouds from './hogwarts window/clouds2.gif'

const slidesData = [
  {imgPath: hogwartsWindow, title: "hogwartsWindow"},
  {imgPath: hogwartsWindow, title: "hogwartsWindow"},
  {imgPath: hogwartsWindow, title: "hogwartsWindow"},

]


const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const imgPaths = slidesData.map(item => item.imgPath);

  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgPaths.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgPaths.length) % imgPaths.length);
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
          <img src={clouds} />
        </div>

        <div className="tp_slider_fields" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>


          {slidesData.map((item) => (
            <div className="tp_sliderField_0">
              <div className="tp_sliderField_0_background_0">
                <img src={item.imgPath} alt={`Background for ${item.title}`} />
              </div>
            </div>
          ))}
        </div>




      </div> 

    </div>
  );
};

export default ImagesSlider;




