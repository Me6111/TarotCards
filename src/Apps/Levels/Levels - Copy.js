// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js


// src/Apps/Levels/Levels.js




// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js

import React from 'react';
import { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from '../../REDUXstore/REDUXstore.js';

import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import ImagesSlider from '../../components/ImagesSlider/ImagesSlider';
import LevelInfoField from './LevelInfoField/LevelInfoField';

import './Levels.css';





import AlbumCover_1 from './albums covers/1.Scream bloody gore.jpg';
import AlbumCover_2 from './albums covers/2.Leprosy.jpg';
import AlbumCover_3 from './albums covers/3.Spiritual healing.jpg';
import AlbumCover_4 from './albums covers/4.Human.jpg';
import AlbumCover_Thumbnail_5 from './albums covers/inner1-5.Individual thought patterns.jpg';
import AlbumCover_5 from './albums covers/5.Individual thought patterns.jpg';
import AlbumCover_6 from './albums covers/6.Symbolic.jpg';
import AlbumCover_7 from './albums covers/7.The sound of perseverance.jpg';


const albumsCovers = [
  { imgPath: AlbumCover_1, title: "Scream bloody gore" },
  { imgPath: AlbumCover_2, title: "Leprosy" },
  { imgPath: AlbumCover_3, title: "Spiritual healing" },
  { imgPath: AlbumCover_4, title: "Human" },
  { imgPath: AlbumCover_5, title: "Individual thought patterns" },
  { imgPath: AlbumCover_6, title: "Symbolic" },
  { imgPath: AlbumCover_7, title: "The sound of perseverance" },
];

const Levels = () => {
  const [scrollProps, setScrollProps]  = useState({ scrollTop: 0, scrollLeft: 0 })
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = (event) => {
    setScrollProps({
      scrollTop: event.target.scrollTop,
      scrollLeft: event.target.scrollLeft,      
    });
  };
  return (
    <Provider store={store}>
      <div id="appContainer_Levels" onScroll={handleScroll}>
        <MainMenuSet />
        <ImagesSlider 
          slidesData={albumsCovers}
          
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex} 
          
          scrollProps={scrollProps} 

        />
        <LevelInfoField />
      </div>
    </Provider>
  );
};

export default Levels;