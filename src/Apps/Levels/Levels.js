// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js


// src/Apps/Levels/Levels.js




// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\Levels.js

import React from 'react';

import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import ImagesSlider_with_SlideInfoField from '../../components/ImagesSlider/ImagesSlider_with_SlideInfoField/ImagesSlider_with_SlideInfoField'

import './Levels.css';





import AlbumCover_1 from './albums covers/1.Scream bloody gore.jpg';
import AlbumCover_2 from './albums covers/2.Leprosy.jpg';
import AlbumCover_3 from './albums covers/3.Spiritual healing.jpg';
import AlbumCover_4 from './albums covers/4.Human.jpg';
import AlbumCover_Thumbnail_5 from './albums covers/inner1-5.Individual thought patterns.jpg';
import AlbumCover_5 from './albums covers/5.Individual thought patterns.jpg';
import AlbumCover_6 from './albums covers/6.Symbolic.jpg';
import AlbumCover_7 from './albums covers/7.The sound of perseverance.jpg';



const albums = [
  {imgPath: AlbumCover_1, number: 'I', title: 'Scream bloody gore'},
  {imgPath: AlbumCover_2, number: 'II', title: 'Leprosy'},
  {imgPath: AlbumCover_3, number: 'III', title: 'Spiritual healing'},
  {imgPath: AlbumCover_4, number: 'IV', title: 'Human'},
  {imgPath: AlbumCover_5, number: 'V', title: 'Individual thought patterns'},
  {imgPath: AlbumCover_6, number: 'VI', title: 'Symbolic'},
  {imgPath: AlbumCover_7, number: 'VII', title: 'The sound of perseverance'},
]

const Levels = () => {

  return (
    <div className="appContainer_Levels">
      <MainMenuSet />
      <div className="DeathLevelsSlider">
        <ImagesSlider_with_SlideInfoField 
          cards={albums} 
        />
      </div>

    </div>
  );
};

export default Levels;