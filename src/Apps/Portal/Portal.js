





// C:\Users\user\Desktop\projects\project-manager\src\Apps\Portal\Portal.js

import React from 'react';
//import MainMenu from '../../components/MainMenu/MainMenu'; 
import './Portal.css'; 
import img0 from './img00.jpg'; 
//import img1 from './img1.jpg'; 


const Portal = () => {
    return (
        <div className="appContainer">
            <div className="section">
                    <div className="imgField" id="imgField0">
                        <img src={img0} alt="img0" />
                        <div className="deathTitle">DEATH</div>
                    </div>

                    <div className="imgField" id="imgField00">
                        <img src={img0} alt="img00" />
                    </div>

                    <div className="titleField">
                        The quest to the dephths of the soul
                    </div>

            </div>
        </div>
    );
};

export default Portal;


