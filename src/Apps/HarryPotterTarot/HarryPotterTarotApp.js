
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import ImagesSlider_with_SlideInfoField from '../../components/ImagesSlider/ImagesSlider_with_SlideInfoField/ImagesSlider_with_SlideInfoField'
import BatCard from '../../components/ImagesSlider/SliderField_TarotCard/SliderField_TarotCard'


import card0 from './Slider/Images/0.gif';
import card1 from './Slider/Images/1.gif';
import card2 from './Slider/Images/2.gif';
import card3 from './Slider/Images/3.gif';
import card4 from './Slider/Images/4.gif';
import card5 from './Slider/Images/5.gif';
import card6 from './Slider/Images/6.gif';
import card7 from './Slider/Images/7.gif';
import card8 from './Slider/Images/8.gif';
import card9 from './Slider/Images/9.gif';
import card10 from './Slider/Images/10.gif';
import card11 from './Slider/Images/11.gif';
import card12 from './Slider/Images/12.gif';
import card13 from './Slider/Images/13.gif';
import card14 from './Slider/Images/14.gif';
import card15 from './Slider/Images/15.gif';
import card16 from './Slider/Images/16.gif';
import card17 from './Slider/Images/17.gif';
import card18 from './Slider/Images/18.gif';
import card19 from './Slider/Images/19.gif';
import card20 from './Slider/Images/20.gif';
import card21 from './Slider/Images/21.gif';


import SliderField from './Slider/SliderField/SliderField';

import quotes from './Slider/quotes/quotes.json'; 
import descriptions from './Slider/descriptions/descriptions.json'; 

import './SliderInfoField.css';

const Images = [
  card0, card1, card2, card3, card4, card5, 
  card6, card7, card8, card9, card10, card11, 
  card12, card13, card14, card15, card16, card17, 
  card18, card19, card20, card21
];




const cards = [
  {number: 'O', title: 'The Fool', character: 'James Potter and the Marauders', imgPath: card0},
  {number: 'I', title: 'The Magician', character: 'Albus Dumbledore', imgPath: card1},
  {number: 'II', title: 'The High Priestess', character: 'Hermione Granger', imgPath: card2},
  {number: 'III', title: 'The Empress', character: 'Minerva McGonagall', imgPath: card3},
  {number: 'IV', title: 'The Emperor', character: 'Barty Crouch Sr.', imgPath: card4},
  {number: 'V', title: 'The Hierophant', character: 'Arthur Weasley', imgPath: card5, },
  {number: 'VI', title: 'The Lovers', character: 'Lupin and Tonks', imgPath: card6, },
  {number: 'VII', title: 'The Chariot', character: 'Nimbus 2000 Broomstick', imgPath: card7, },
  {number: 'VIII', title: 'Strength', character: 'Neville Longbottom', imgPath: card8, },
  {number: 'IX', title: 'Hermit', character: 'Young Tom Marvolo Riddle', imgPath: card9, },
  {number: 'X', title: 'Wheel of fortune', character: 'The Prophecy', imgPath: card10, },
  {number: 'XI', title: 'Justice', character: 'Alastor Moody', imgPath: card11, },
  {number: 'XII', title: 'The Hanged Man', character: 'Severus Snape', imgPath: card12, },
  {number: 'XIII', title: 'Death', character: 'Lord Voldemort', imgPath: card13, },
  {number: 'XIV', title: 'Temperance', character: 'Ronald Weasley', imgPath: card14, },
  {number: 'XV', title: 'The Devil', character: "Gellert Grindenwald", imgPath: card15, },
  {number: 'XVI', title: 'The Tower', character: "Dolores Umbridge", imgPath: card16, },
  {number: 'XVII', title: 'The Star', character: 'Silver Doe', imgPath: card17, },
  {number: 'XVIII', title: 'The Moon', character: 'Remus Lupin', imgPath: card18, },
  {number: 'XIX', title: 'The Sun', character: "Golden Snitch", imgPath: card19, },
  {number: 'XX', title: 'Judgement', character: "Draco Malfoy", imgPath: card20, },
  {number: 'XXI', title: 'The World', character: 'Quidditch World Cup', imgPath: card21, },
];


const cards1 = [
  {number: 'O', title: 'The Fool', character: 'Fred and George', imgPath: card0},
  {number: 'I', title: 'The Magician', character: 'Albus Dumbledore', imgPath: card1},
  {number: 'II', title: 'The High Priestess', character: 'Hermione Granger', imgPath: card2},
  {number: 'III', title: 'The Empress', character: 'Minerva McGonagall', imgPath: card3},

];

// <ImagesSlider slidesData={cards} SliderField={SliderField_TarotCard}/>


const HarryPotterTarotCards = () => {

  return (
    <div className="HarryPotterTarotCards">
      <MainMenuSet />

      <ImagesSlider_with_SlideInfoField 
        SliderField={SliderField}

        cards={cards} 
        quotes={quotes} 
        descriptions={descriptions} 
      />

    </div>
  );
};

export default HarryPotterTarotCards;


