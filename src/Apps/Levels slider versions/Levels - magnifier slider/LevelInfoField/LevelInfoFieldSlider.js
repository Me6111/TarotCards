import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './LevelInfoFieldSlider.css';

const LevelInfoFieldSlider = ({ photoSources }) => {
    const selectedLevel = useSelector(state => state.selectedLevel);
    const dispatch = useDispatch();
    const curtainRef = useRef(null);

    return (
        <div className="LevelInfoFieldSlider">
            <div className="LevelInfoFieldSlider-slider-fields">
                {photoSources.map((src, index) => (
                    <div key={index} className="LevelInfoFieldSlider-slider-field">
                        <div className="LevelInfoFieldSlider-slider-field-inner1">
                            <img src={src}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LevelInfoFieldSlider;