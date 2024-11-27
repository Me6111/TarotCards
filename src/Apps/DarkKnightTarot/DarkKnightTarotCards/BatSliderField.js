import React from 'react';
import './BatSliderField.css';

const BatSliderField = ({ imgPath, number, title }) => {
  return (
    <div className="BatSliderField">
      <div className="BatSliderField1">
        <div className="tarot-card">
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
      </div>
    </div>
  );
};

export default BatSliderField;