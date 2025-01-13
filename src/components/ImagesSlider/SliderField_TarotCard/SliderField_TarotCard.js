import React from 'react';
import './SliderField_TarotCard.css';

const SliderField_TarotCard = ({ imgPath, number, title }) => {
  return (
        <div className="SliderField_TarotCard">
          <div className="card-content">
            
            <div className="card-image-container">
              <div className="card-number0">
                <div className="card-number">{number}</div>
              </div>
                
              <div className="card-image">
                <img src={imgPath} alt={title} />
              </div>
            </div>

            <div className="card-title">
              <div className="card-title-text">
                {title}
              </div>
            </div>
          </div>
        </div>
  );
};

export default SliderField_TarotCard;


