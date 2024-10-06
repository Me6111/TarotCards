

// C:\Users\user\Desktop\projects\project-manager\src\components\MainMenuSet\MainMenu/MainMenu.js


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
        <button className="main-menu-option">
          <div className="sign">Plot</div>
        </button>
        <button className="main-menu-option">
          <div className="sign">Levels</div>
        </button>
        <button className="main-menu-option">
          <div className="sign">Characters</div>
        </button>
        <button className="main-menu-option">
          <div className="sign">Enemies</div>
        </button>
        <button className="main-menu-option">
          <div className="sign">Final Boss</div>
        </button>
        <button className="main-menu-option">
          <div className="sign">Founders</div>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;