// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\LevelsSlider\LevelsSlider.js



// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\LevelsSlider\LevelsSlider.js

import React from 'react';
import { connect } from 'react-redux';

import './LevelsSlider.css';
import './LevelsSlider2.css';
import './slider-field-inner-img.css';
import SliderField from './SliderField';

import AlbumCover_1 from './albums covers/1.Scream bloody gore.jpg';
import AlbumCover_2 from './albums covers/2.Leprosy.jpg';
import AlbumCover_3 from './albums covers/3.Spiritual healing.jpg';
import AlbumCover_4 from './albums covers/4.Human.jpg';
import AlbumCover_Thumbnail_5 from './albums covers/inner1-5.Individual thought patterns.jpg';
import AlbumCover_5 from './albums covers/5.Individual thought patterns.jpg';
import AlbumCover_6 from './albums covers/6.Symbolic.jpg';
import AlbumCover_7 from './albums covers/7.The sound of perseverance.jpg';

const LevelsSlider = ({ selectedLevel, selectLevel }) => {
  const albums = [
    { imgInner1: AlbumCover_1, imgInner2: AlbumCover_1, title: "Scream bloody gore" },
    { imgInner1: AlbumCover_2, imgInner2: AlbumCover_2, title: "Leprosy" },
    { imgInner1: AlbumCover_3, imgInner2: AlbumCover_3, title: "Spiritual healing" },
    { imgInner1: AlbumCover_4, imgInner2: AlbumCover_4, title: "Human" },
    { imgInner1: AlbumCover_Thumbnail_5, imgInner2: AlbumCover_5, title: "Individual thought patterns" },
    { imgInner1: AlbumCover_6, imgInner2: AlbumCover_6, title: "Symbolic" },
    { imgInner1: AlbumCover_7, imgInner2: AlbumCover_7, title: "The sound of perseverance" },
  ];

  const handleLevelClick = (levelIndex) => {
    console.log(`Clicked SliderField ID: ${levelIndex}`);
    selectLevel(levelIndex);
  };

  return (
    <div className="slider">
      <div className="field-top"></div>
      <div className="slider-fields">
        {albums.map((album, index) => (
          <SliderField
            key={index}
            imgInner1={album.imgInner1}
            imgInner2={album.imgInner2}
            title={album.title}
            onClick={() => handleLevelClick(index)}
          />
        ))}
      </div>
      <div className="field-bottom"></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedLevel: state.selectedLevel,
});

const mapDispatchToProps = (dispatch) => ({
  selectLevel: (levelIndex) => dispatch({ type: 'SELECT_LEVEL', payload: levelIndex }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelsSlider);