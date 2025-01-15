import React, { useState, useEffect } from 'react';
import './SlideInfoField.css';

const SlideInfoField = ({ cards, quotes, descriptions, currentIndex, scrollProps }) => {
  const imgPath = cards[currentIndex].imgPath;
  const number = cards[currentIndex].number;
  const title = cards[currentIndex].title;
  const character = cards[currentIndex].character;
  const quote = quotes[currentIndex];
  const description = descriptions[currentIndex];

  // State to manage the expanded state of SlideInfoField_0001
  const [isExpanded, setIsExpanded] = useState(false);

  // Effect to trigger expansion after 3 seconds if both conditions are met
  useEffect(() => {
    if (scrollProps.scrollTop > 0) { 
      const timeoutId = setTimeout(() => {
        setIsExpanded(true); 
      }, 2000); 

      return () => clearTimeout(timeoutId); 
    } else {
      // Reset isExpanded to false when scrollProps.scrollTop is 0
      setIsExpanded(false); 
    }
  }, [scrollProps.scrollTop]); 

  return (
    <div className="SlideInfoField_0">
      <div className={scrollProps.scrollTop > 0 ? "SlideInfoField_1 expanded" : "SlideInfoField_1"}>
        <div 
          className={
            (scrollProps.scrollTop > 0 && isExpanded) 
              ? "SlideInfoField_0001 expanded" 
              : "SlideInfoField_0001"
          }
        >
        <div className="SlideInfoField_01">
          <div className="SlideInfoField_011">
            <img src={imgPath} />
          </div>
          <div className="SlideInfoField_012">
            <img src={imgPath} />
          </div>
        </div>
        <div className="SlideInfoField_02">
          <div className="Card_Title">
            <div className="Card_Title_0">{number}</div>
            <div className="Card_Title_1">{title}{character && ': '}{character}</div>         
          </div>
          {quote && (
            <div className="CardMeaning">
              <div className="CardMeaning_Quote">{quote}</div>
            </div>
          )}
          {description && (
            <div className="CardMeaning">
              <div className="CardMeaning_Description">{description}</div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default SlideInfoField;