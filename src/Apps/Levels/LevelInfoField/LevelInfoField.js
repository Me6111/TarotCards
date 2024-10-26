import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Leprosy_COVER from './2.Leprosy.jpg';
import Leprosy_LOCATION_1 from './leprosy_location1.jpg';
import Leprosy_LOCATION_2 from './leprosy_location2.jpg';

import LevelInfoFieldSlider from './LevelInfoFieldSlider';


import './LevelInfoField.css';

const LevelInfoField = () => {
    const selectedLevel = useSelector(state => state.selectedLevel);
    const dispatch = useDispatch();
    const curtainRef = useRef(null);

    useEffect(() => {
        if (curtainRef.current) {
            curtainRef.current.addEventListener('click', () => {
                const levelInfoField = curtainRef.current.parentElement;
                levelInfoField.classList.remove('selected');
                dispatch({ type: 'SET_SELECTED_LEVEL', payload: null });
                dispatch({ type: 'TOGGLE_ACTIVE', payload: false });
            });
        }
    }, [dispatch]);

    useEffect(() => {
        if (curtainRef.current) {
            const levelInfoField = curtainRef.current.parentElement;
            if (selectedLevel) {
                levelInfoField.classList.add('selected');
            } else {
                levelInfoField.classList.remove('selected');
            }
        }
    }, [selectedLevel]);

    return (
        <div className={`LevelInfoField ${selectedLevel ? 'selected' : ''}`}>

            <div className="LevelInfoField-curtain" ref={curtainRef}></div>




            <div className="LevelInfoField-content">


                <div className="LevelInfoField-content-imgsHeader">
                    <img src={Leprosy_COVER} alt="leprosy_cover" id="curtainIMG1"/>
                    <img src={Leprosy_COVER} alt="leprosy_cover" id="curtainIMG2"/>
                </div>


                <LevelInfoFieldSlider />

                <div className="LevelInfoField-describtion">
                    TEXT TEXT TEXT
                </div>

            </div>



        </div>  







    );
};

export default LevelInfoField;