import React from 'react';
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
  // Create an array of album covers
  const albumCovers = [
    AlbumCover_1,
    AlbumCover_2,
    AlbumCover_3,
    AlbumCover_4,
    AlbumCover_5,
    AlbumCover_6,
    AlbumCover_7
  ];

  return (
    <div className="slider">
        <div className="slider-fields0">



            {albumCovers.map((cover) => (
                <div className="slider-field">
                    <div className="slider-field-inner1">
                        <img src={cover}/>
                    </div>

                </div>
                    
            ))}


        </div>


        <div class="buttons">
            <span class="next">&#10095;</span>
            <span class="prev">&#10094;</span>
        </div>



    </div>
  );
};

export default LevelsSlider;