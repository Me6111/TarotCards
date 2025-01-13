import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Leprosy_COVER from './2.Leprosy.jpg';
//import LevelInfoFieldSlider from './LevelInfoFieldSlider';
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

    if (curtainRef.current) {
      const levelInfoField = curtainRef.current.parentElement;
      if (selectedLevel) {
        levelInfoField.classList.add('selected');
      } else {
        levelInfoField.classList.remove('selected');
      }
    }
  }, [dispatch, selectedLevel]);


  return (
    <div className={`LevelInfoField ${selectedLevel ? 'selected' : ''}`}>
        <div className="LevelInfoField-curtain" ref={curtainRef}></div>

        <div className="LevelInfoField-content">
            <div className="LevelInfoField-content-imgsHeader">
                <img src={Leprosy_COVER} alt="leprosy_cover" id="curtainIMG1"/>
                <img src={Leprosy_COVER} alt="leprosy_cover" id="curtainIMG2"/>
            </div>

            <div className="LevelInfoField-describtion">
                I entered a place that looked like a deep ravine or a canyon.
                Long and surrounded on all sides.
                Thick, foul air.
                I felt as if I was walking on the bottom of a deep festering wound.
            </div>


            <div className="LevelInfoField-describtion">
                High atop the city walls could be seen.
                Here in the bottom there are only crumbling, makeshift huts and shacks built from rubbish.
            </div>


            <div className="LevelInfoField-describtion">
                High atop the city walls could be seen.
                Here in the bottom there are only crumbling, makeshift huts and shacks built from rubbish.
            </div>


        </div>
    </div>
);
};

export default LevelInfoField;