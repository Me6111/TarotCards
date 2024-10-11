

// C:\Users\user\Desktop\projects\project-manager\src\components\MainMenuSet\MainMenu/MainMenu.js


// C:\Users\user\Desktop\projects\project-manager\src\components\MainMenuSet\MainMenu/MainMenu.js

import React from 'react';
import './MainMenu.css';

import logo from './logo.jpg'; // Adjust the path if necessary

import { useNavigate } from 'react-router-dom';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className='MainMenuContainer'>
      
      <button className="MainMenu-icon-container" onClick={() => navigate('/')}>
        <img src={logo} alt="Logo" id="MainMenu-logo"/>
      </button>





      <div className="main-menu-options">
        <button className="main-menu-option" onClick={() => navigate('/plot')}>
          <div className="sign">Plot</div>
        </button>

        <button className="main-menu-option" onClick={() => navigate('/levels')}>
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