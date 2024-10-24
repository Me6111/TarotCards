import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Leprosy_COVER from './2.Leprosy.jpg';


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

            <div className="LevelInfoField-curtain" ref={curtainRef}>
                <div className="LevelInfoField-curtainIMGs">
                    <img src={Leprosy_COVER} alt="leprosy_location" id="curtainIMG1"/>
                    <img src={Leprosy_COVER} alt="leprosy_location" id="curtainIMG2"/>
                </div>

            </div>



            <div className="LevelInfoField1">
                {selectedLevel}
            </div>


        </div>  







    );
};

export default LevelInfoField;