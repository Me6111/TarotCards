import './MainMenuButton.css';
import wftd_sign2 from './wftd_sign2.jpg';

const MainMenuButton = () => {
  return (
    <div className="main-menu-container">
      <button className="main-menu-button">
        <img src={wftd_sign2} alt="wftd_sign" />
      </button>
    </div>
  );
};

export default MainMenuButton;