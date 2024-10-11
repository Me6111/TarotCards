



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


import { useNavigate } from 'react-router-dom';

const LevelsSlider = () => {

  return (

    <div class="slider">

      <div class="field-top"></div>

      <div class="slider-fields">

        
        <div class="slider-field">

          <div class="slider-field-inner1">
            <img src={AlbumCover_1} id="inner1-Scream_bloody_gore"/>
          </div>

          <div class="slider-field-inner2">
            <img src={AlbumCover_1} />
            <div class="slider-field-title">Scream bloody gore</div>
          </div>

        </div>



        <div class="slider-field">

            <div class="slider-field-inner1">
              <img src={AlbumCover_2} id="inner1-Leprosy"/>
                
            </div>

            <div class="slider-field-inner2">
              <img src={AlbumCover_2} />
              <div class="slider-field-title">Leprosy</div>
            </div>

        </div>


        <div class="slider-field">

          <div class="slider-field-inner1">
            <img src={AlbumCover_3} id="inner1-Spiritual_healing"/>
          </div>

          <div class="slider-field-inner2">
            <img src={AlbumCover_3} />
            <div class="slider-field-title">Spiritual healing</div>
          </div>

        </div>



        <div class="slider-field">
            
            <div class="slider-field-inner1">
              <img src={AlbumCover_4} id="inner1-Human"/>
            </div>

            <div class="slider-field-inner2">
              <img src={AlbumCover_4} />
                <div class="slider-field-title">Human</div>
            </div>

        </div>


        <div class="slider-field">
            
            <div class="slider-field-inner1">
              <img src={AlbumCover_Thumbnail_5} id="inner1-Individual_thought_patterns"/>
            </div>

            <div class="slider-field-inner2">
              <img src={AlbumCover_5} />
                <div class="slider-field-title">Individual thought patterns</div>
            </div>

        </div>


        <div class="slider-field">
            
            <div class="slider-field-inner1">
              <img src={AlbumCover_6} id="inner1-Symbolic"/>
            </div>

            <div class="slider-field-inner2">
              <img src={AlbumCover_6} />
                <div class="slider-field-title">Symbolic</div>
            </div>

        </div>



        <div class="slider-field">
            
            <div class="slider-field-inner1">
              <img src={AlbumCover_7} id="inner1-The_sound_of_perseverance"/>
            </div>

            <div class="slider-field-inner2">
              <img src={AlbumCover_7} />
                <div class="slider-field-title">The sound of perseverance</div>
            </div>

        </div>


      </div>
      <div class="field-bottom"></div>


    </div>

  );
};

export default LevelsSlider;