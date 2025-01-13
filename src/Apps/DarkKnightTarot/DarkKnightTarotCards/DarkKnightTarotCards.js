

import ImagesSlider_with_SlideInfoField from '../../../components/ImagesSlider/ImagesSlider_with_SlideInfoField/ImagesSlider_with_SlideInfoField'
import SliderField_TarotCard from '../../../components/ImagesSlider/SliderField_TarotCard/SliderField_TarotCard';
import './DarkKnightTarotCards.css';

import card0 from './BAT_LevelsSlider/BatCardsImages/0.jpg';
import card1 from './BAT_LevelsSlider/BatCardsImages/1.jpg';
import card2 from './BAT_LevelsSlider/BatCardsImages/2.jpg';
import card3 from './BAT_LevelsSlider/BatCardsImages/3.jpg';
import card4 from './BAT_LevelsSlider/BatCardsImages/4.jpg';
import card5 from './BAT_LevelsSlider/BatCardsImages/5.jpg';
import card6 from './BAT_LevelsSlider/BatCardsImages/6.jpg';
import card7 from './BAT_LevelsSlider/BatCardsImages/7.jpg';
import card8 from './BAT_LevelsSlider/BatCardsImages/8.jpg';
import card9 from './BAT_LevelsSlider/BatCardsImages/9.jpg';
import card10 from './BAT_LevelsSlider/BatCardsImages/10.jpg';
import card11 from './BAT_LevelsSlider/BatCardsImages/11.jpg';
import card12 from './BAT_LevelsSlider/BatCardsImages/12.jpg';
import card13 from './BAT_LevelsSlider/BatCardsImages/13.jpg';
import card14 from './BAT_LevelsSlider/BatCardsImages/14.jpg';
import card15 from './BAT_LevelsSlider/BatCardsImages/15.jpg';
import card16 from './BAT_LevelsSlider/BatCardsImages/16.jpg';
import card17 from './BAT_LevelsSlider/BatCardsImages/17.jpg';
import card18 from './BAT_LevelsSlider/BatCardsImages/18.jpg';
import card19 from './BAT_LevelsSlider/BatCardsImages/19.jpg';
import card20 from './BAT_LevelsSlider/BatCardsImages/20.jpg';
import card21 from './BAT_LevelsSlider/BatCardsImages/21.jpg';

import card0_background from './BAT_LevelsSlider/BatCardsImages_backgrounds/0.gif';
import card1_background from './BAT_LevelsSlider/BatCardsImages_backgrounds/1.gif';
import card2_background from './BAT_LevelsSlider/BatCardsImages_backgrounds/2.gif';
import card3_background from './BAT_LevelsSlider/BatCardsImages_backgrounds/3.gif';
import card4_background from './BAT_LevelsSlider/BatCardsImages_backgrounds/4.gif';

import quotes from './BAT_LevelsSlider/quotes/quotes.json'; 
import descriptions from './BAT_LevelsSlider/descriptions/descriptions.json'; 



const cards = [
  {imgPath: card0, number: 'O', title: 'The Fool', character: 'Joker', background: card0_background},
  {imgPath: card1, number: 'I', title: 'The Magician', character: 'Batman', background: card1_background},
  {imgPath: card2, number: 'II', title: 'The High Priestess', character: 'Talia al Ghul', background: card2_background},
  {imgPath: card3, number: 'III', title: 'The Empress', character: 'Rachel Dawes', background: card3_background},
  {imgPath: card4, number: 'IV', title: 'The Emperor', character: 'James Gordon', background: card4_background},
  {imgPath: card5, number: 'V', title: 'The Hierophant', character: 'Alfred Pennyworth'},
  {imgPath: card6, number: 'VI', title: 'The Lovers', character: 'Harvey and Rachel'},
  {imgPath: card7, number: 'VII', title: 'The Chariot', character: 'Batmobile'},
  {imgPath: card8, number: 'VIII', title: 'Strength', character: 'Catwoman'},
  {imgPath: card9, number: 'IX', title: 'Hermit', character: 'Scarecrow'},
  {imgPath: card10, number: 'X', title: 'Wheel of fortune', character: 'Car chase'},
  {imgPath: card11, number: 'XI', title: 'Justice', character: 'The Dark Knight'},
  {imgPath: card12, number: 'XII', title: 'The Hanged Man', character: 'Two-Face'},
  {imgPath: card13, number: 'XIII', title: 'Death', character: 'I broke you'},
  {imgPath: card14, number: 'XIV', title: 'Temperance', character: 'Lucius Fox'},
  {imgPath: card15, number: 'XV', title: 'The Devil', character: "Ra's al Ghul"},
  {imgPath: card16, number: 'XVI', title: 'The Tower', character: "It's about sending message"},
  {imgPath: card17, number: 'XVII', title: 'The Star', character: 'Bat signal'},
  {imgPath: card18, number: 'XVIII', title: 'The Moon', character: 'Gotham City'},
  {imgPath: card19, number: 'XIX', title: 'The Sun', character: "Batman's sacrifice"},
  {imgPath: card20, number: 'XX', title: 'Judgement', character: "Deshi Basara"},
  {imgPath: card21, number: 'XXI', title: 'The World', character: 'I had this fantasy'},
];

// <ImagesSlider slidesData={cards} SliderField={SliderField_TarotCard}/>


const DarkKnightTarotCards = () => {

  return (
    <div className="DarkKnightTarotCards">
      <ImagesSlider_with_SlideInfoField 
        SliderField={SliderField_TarotCard}

        cards={cards} 
        quotes={quotes} 
        descriptions={descriptions} 
      />


    </div>
  );
};

export default DarkKnightTarotCards;



