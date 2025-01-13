 
import { useEffect, useState } from 'react';


// import React, { useEffect } from 'react';
import './ImagesSlider_with_SlideInfoField.css';

import ImagesSlider from '../ImagesSlider';
//import SliderField_TarotCard from '../SliderField_TarotCard/SliderField_TarotCard';
import SlideInfoField from '../SlideInfoField/SlideInfoField';




const ImagesSlider_with_SlideInfoField = ({ SliderField, cards, quotes = [], descriptions = [] }) => {
  const [scrollProps, setScrollProps] = useState({ scrollTop: 0, scrollLeft: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    setScrollProps({
      scrollTop: event.target.scrollTop,
      scrollLeft: event.target.scrollLeft,
    });
  };

  return (
    <div className="ImagesSlider_with_SlideInfoField" onScroll={handleScroll}>
      <ImagesSlider
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        slidesData={cards}
        SliderField={SliderField}
        scrollProps={scrollProps}
      />

      <SlideInfoField
        cards={cards}
        quotes={quotes}
        descriptions={descriptions}
        currentIndex={currentIndex}
        scrollProps={scrollProps}
      />
    </div>
  );
};

export default ImagesSlider_with_SlideInfoField;



