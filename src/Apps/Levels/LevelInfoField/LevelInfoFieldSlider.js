






import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Leprosy_LOCATION_1 from './leprosy_location1.jpg';
import Leprosy_LOCATION_2 from './leprosy_location2.jpg';
import Leprosy_LOCATION_3 from './leprosy_location3.jpg';
import Leprosy_LOCATION_4 from './leprosy_location4.jpg';



import './LevelInfoFieldSlider.css';

    const LevelInfoFieldSlider = () => {
        const selectedLevel = useSelector(state => state.selectedLevel);
        const dispatch = useDispatch();
        const curtainRef = useRef(null);




    return (
        <div className="LevelInfoFieldSlider">

            <div class="LevelInfoFieldSlider-slider-fields">


                <div class="LevelInfoFieldSlider-slider-field">

                    <div class="LevelInfoFieldSlider-slider-field-inner1">
                        <img src={Leprosy_LOCATION_1} alt="leprosy_location" id="LevelInfoField2"/>
                    </div>

                </div>



                <div class="LevelInfoFieldSlider-slider-field">

                    <div class="LevelInfoFieldSlider-slider-field-inner1">
                        <img src={Leprosy_LOCATION_2} alt="leprosy_location" id="LevelInfoField2"/>                       
                    </div>

                </div>


                <div class="LevelInfoFieldSlider-slider-field">

                    <div class="LevelInfoFieldSlider-slider-field-inner1">
                        <img src={Leprosy_LOCATION_3} alt="leprosy_location" id="LevelInfoField2"/>                       
                    </div>

                </div>



                <div class="LevelInfoFieldSlider-slider-field">
                    
                    <div class="LevelInfoFieldSlider-slider-field-inner1">
                        <img src={Leprosy_LOCATION_4} alt="leprosy_location" id="LevelInfoField2"/>                       
                    </div>

                </div>

            </div>


        </div> 







);


};

export default LevelInfoFieldSlider;