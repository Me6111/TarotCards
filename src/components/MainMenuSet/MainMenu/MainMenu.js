import React from 'react';
import './MainMenu.css';

import logo from './logo.jpg'; // Adjust the path if necessary


const MainMenu = () => {
  return (
    <div className='MainMenuContainer'>

      

      <div className="MainMenu-icon-container">
        <img src={logo} alt="Logo" id="MainMenu-logo"/>
      </div>

      <div className="main-menu-options">
        <div className="main-menu-option">
          <div className="sign">Plot</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Levels</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Characters</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Enemies</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Final Boss</div>
        </div>
        <div className="main-menu-option">
          <div className="sign">Founders</div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;