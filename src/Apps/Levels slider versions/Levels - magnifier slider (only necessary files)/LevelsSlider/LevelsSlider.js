import React, { useState } from 'react';
import './LevelsSlider.css';

// Import all album covers
import AlbumCover_1 from './albums covers/1.Scream bloody gore.jpg';
import AlbumCover_2 from './albums covers/2.Leprosy.jpg';
import AlbumCover_3 from './albums covers/3.Spiritual healing.jpg';
import AlbumCover_4 from './albums covers/4.Human.jpg';
import AlbumCover_5 from './albums covers/5.Individual thought patterns.jpg';
import AlbumCover_6 from './albums covers/6.Symbolic.jpg';
import AlbumCover_7 from './albums covers/7.The sound of perseverance.jpg';

const LevelsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const albumCovers = [
    AlbumCover_1,
    AlbumCover_2,
    AlbumCover_3,
    AlbumCover_4,
    AlbumCover_5,
    AlbumCover_6,
    AlbumCover_7
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumCovers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + albumCovers.length) % albumCovers.length);
  };

  return (
    <div className="sliders">
      <div className="slider">
        <div className="slider-fields" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {albumCovers.map((cover, index) => (
            <div key={index} className="slider-field">
              <img src={cover} alt={`Album Cover ${index + 1}`} />
            </div>
          ))}
        </div>





        

        <div className="buttons">
          <span className="next" onClick={nextSlide}>&#10095;</span>
          <span className="prev" onClick={prevSlide}>&#10094;</span>
        </div>

      </div>   

 



      <div className="slider1">
        <div className="slider-fields" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {albumCovers.map((cover, index) => (
            <div key={index} className="slider-field">
              <img src={cover} alt={`Album Cover ${index + 1}`} />
            </div>
          ))}
        </div>
      </div> 


    </div>
  );
};

export default LevelsSlider;