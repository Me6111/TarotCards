import React from 'react';
import './BatSliderField.css';

const BatSliderField = ({ imgPath, title }) => {
  return (
    <div className="BatSliderField">
      <div className="BatSliderField1">
        <div className="tarot-card">
          <div className="card-content">
            <div className="card-image">
              <img src={imgPath} alt={title} />
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