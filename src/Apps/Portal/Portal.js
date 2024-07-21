import React from 'react';
import './Portal.css'; 
import img0 from './img00.jpg'; 

const Portal = () => {
    return (
        <div className="appContainer" id="titleSection">
            <div className="section">
                <div className="img0scontainer">
                    <div className="imgField" id="imgField0back">
                        <img src={img0} alt="back" />
                        <div className="subTitle">The journey to the end of the death</div>
                    </div>
                    <div className="imgField" id="imgField0front">
                        <img src={img0} alt="front" />
                        <div className="deathTitle">DEATH</div>
                    </div>
                </div>
            </div>
            <div className="section" id="plotSection">
                <div className="titleField">
                    The first metal video game
                </div>
            </div>
        </div>
    );
};

export default Portal;