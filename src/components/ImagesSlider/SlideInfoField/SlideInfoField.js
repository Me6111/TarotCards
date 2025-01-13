import './SlideInfoField.css';

const SlideInfoField = ({ cards, quotes, descriptions, currentIndex, scrollProps }) => {
  const imgPath = cards[currentIndex].imgPath;
  const number = cards[currentIndex].number;
  const title = cards[currentIndex].title;
  const character = cards[currentIndex].character;
  const quote = quotes[currentIndex];
  const description = descriptions[currentIndex];


  return (
    <div className="SlideInfoField_0">
      <div className={scrollProps.scrollTop > 0 ? "SlideInfoField_1 expanded" : "SlideInfoField_1"}>
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
  );
};

export default SlideInfoField;