import React, { useState, useRef } from 'react';
import Menu_Icon from './menu_icon.jpg';
import MainMenu from './MainMenu/MainMenu';
import './MainMenuSet.css';

const MainMenuSet = () => {
  const [isMainMenuVisible, setIsMainMenuVisible] = useState(false);
  const buttonRef = useRef(null);
  const curtainRef = useRef(null);

  const handleClick = () => {
    setIsMainMenuVisible(true);
    if (!isMainMenuVisible) {
      document.querySelector('.MainMenu').style.left = '0';
      document.querySelector('.mainMenuCurtain').style.left = '0';
    }
  };

  const handleCurtainClick = () => {
    setIsMainMenuVisible(false);
    curtainRef.current.style.left = '-50%';
    document.querySelector('.MainMenu').style.left = '-100%';
  };

  return (
    <div className='MainMenuSet'>
      <button ref={buttonRef} className="MainMenuButton" onClick={handleClick}>
        <div className="MainMenuButton-icon-container">
          <img src={Menu_Icon} alt="Menu Icon" id="MainMenuButton-icon"/>
        </div>
      </button>
      <div className='MainMenu' style={{ transition: 'left 1s ease', left: `${isMainMenuVisible ? '0' : '-100%'}` }}>
        <MainMenu />
      </div>
      <div ref={curtainRef} className='mainMenuCurtain' style={{ transition: 'left 1s ease', left: `${isMainMenuVisible ? '-800px' : '-200%'}` }} onClick={handleCurtainClick}>
      </div>
    </div>
  );
};

export default MainMenuSet;