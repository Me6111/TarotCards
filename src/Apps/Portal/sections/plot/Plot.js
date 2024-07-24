


// C:\Users\user\Desktop\projects\project-manager\src\Apps\Portal\sections\plot\plot.js

import React from 'react';
import './plot.css';

import chuck0Image from './chuck0.jpg'; 

const Plot = () => {
  return (
    <div className="section" id="plot">

      <div className="plotImg" id="plotImgchuck0">
        <div className="chuck0textField">
          <div className="chuck0text">Chuck Shuldiner</div>
          <div className="chuck0text">1967-2001</div>
        </div>
        <div className="imgField" id="chuck0ImgField">
          <div className="imgField1">
            <img src={chuck0Image} alt="chuck0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plot;
