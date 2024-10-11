// C:\Users\user\Desktop\projects\project-manager\src\Apps\Levels\LevelsSlider\LevelsSlider.js

import React from 'react';
import './LevelsSlider.css';
import './LevelsSlider2.css';
import './slider-field-inner-img.css';

import AlbumCover_1 from './albums covers/1.Scream bloody gore.jpg';
import AlbumCover_2 from './albums covers/2.Leprosy.jpg';
import AlbumCover_3 from './albums covers/3.Spiritual healing.jpg';
import AlbumCover_4 from './albums covers/4.Human.jpg';
import AlbumCover_Thumbnail_5 from './albums covers/inner1-5.Individual thought patterns.jpg';
import AlbumCover_5 from './albums covers/5.Individual thought patterns.jpg';
import AlbumCover_6 from './albums covers/6.Symbolic.jpg';
import AlbumCover_7 from './albums covers/7.The sound of perseverance.jpg';

const LevelsSlider = () => {
  return (
    <div className="slider">
      <div className="field-top"></div>
      <div className="slider-fields">
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_1} alt="Scream Bloody Gore album cover" id="inner1-Scream_bloody_gore" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_1} alt="Scream Bloody Gore album cover" />
            <div className="slider-field-title">Scream bloody gore</div>
          </div>
        </div>
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_2} alt="Leprosy album cover" id="inner1-Leprosy" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_2} alt="Leprosy album cover" />
            <div className="slider-field-title">Leprosy</div>
          </div>
        </div>
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_3} alt="Spiritual Healing album cover" id="inner1-Spiritual_healing" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_3} alt="Spiritual Healing album cover" />
            <div className="slider-field-title">Spiritual healing</div>
          </div>
        </div>
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_4} alt="Human album cover" id="inner1-Human" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_4} alt="Human album cover" />
            <div className="slider-field-title">Human</div>
          </div>
        </div>
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_Thumbnail_5} alt="Individual Thought Patterns thumbnail" id="inner1-Individual_thought_patterns" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_5} alt="Individual Thought Patterns album cover" />
            <div className="slider-field-title">Individual thought patterns</div>
          </div>
        </div>
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_6} alt="Symbolic album cover" id="inner1-Symbolic" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_6} alt="Symbolic album cover" />
            <div className="slider-field-title">Symbolic</div>
          </div>
        </div>
        <div className="slider-field">
          <div className="slider-field-inner1">
            <img src={AlbumCover_7} alt="The Sound of Perseverance album cover" id="inner1-The_sound_of_perseverance" />
          </div>
          <div className="slider-field-inner2">
            <img src={AlbumCover_7} alt="The Sound of Perseverance album cover" />
            <div className="slider-field-title">The sound of perseverance</div>
          </div>
        </div>
      </div>
      <div className="field-bottom"></div>
    </div>
  );
};

export default LevelsSlider;