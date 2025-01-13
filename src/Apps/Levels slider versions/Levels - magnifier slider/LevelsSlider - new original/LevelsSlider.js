import React, { useState, useEffect } from 'react';
import './LevelsSlider.css';

import AlbumCover_1 from './albums covers/1.Scream bloody gore.jpg';
import AlbumCover_2 from './albums covers/2.Leprosy.jpg';
import AlbumCover_3 from './albums covers/3.Spiritual healing.jpg';
import AlbumCover_4 from './albums covers/4.Human.jpg';
import AlbumCover_5 from './albums covers/5.Individual thought patterns.jpg';
import AlbumCover_6 from './albums covers/6.Symbolic.jpg';
import AlbumCover_7 from './albums covers/7.The sound of perseverance.jpg';



const LevelsSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    AlbumCover_1,
    AlbumCover_2,
    AlbumCover_3,
    AlbumCover_4,
    AlbumCover_5,
    AlbumCover_6,
    AlbumCover_7,
  ];

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const switchImage = (imageId) => {
    setCurrentImageIndex(imageId - 1);
  };

  return (
    <div className="slide-container">
      <div className="slides">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={currentImageIndex === index ? 'active' : ''}
            onClick={() => switchImage(index + 1)}
          />
        ))}
      </div>
      <div className="buttons">
        <span className="next" onClick={nextSlide}>&#10095;</span>
        <span className="prev" onClick={prevSlide}>&#10094;</span>
      </div>
      <div className="dotsContainer">
        {images.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${currentImageIndex === index ? 'active' : ''}`} 
            onClick={() => switchImage(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelsSlider;