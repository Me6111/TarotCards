import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LevelInfoField.css';

const LevelInfoField = () => {
    const selectedLevel = useSelector(state => state.selectedLevel);
    const sliderFieldisActive = useSelector(state => state.sliderFieldisActive);
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
            <div className="LevelInfoField1">
                {selectedLevel}
            </div>
            <div className="LevelInfoField-curtain" ref={curtainRef}></div>
        </div>
    );
};

export default LevelInfoField;