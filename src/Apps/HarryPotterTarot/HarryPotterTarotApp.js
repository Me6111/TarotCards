
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import ImagesSlider_with_SlideInfoField from '../../components/ImagesSlider/ImagesSlider_with_SlideInfoField/ImagesSlider_with_SlideInfoField'


import hogwartsWindow from './window4-3.png';


import SliderField from './Slider/SliderField/SliderField';

import quotes from './Slider/quotes/quotes.json'; 
import descriptions from './Slider/descriptions/descriptions.json'; 

import './SliderInfoField.css';

import images from './images.json';




const cards = [
  {number: 'O', title: 'The Fool', character: 'James Potter and the Marauders'},
  {number: 'I', title: 'The Magician', character: 'Albus Dumbledore'},
  {number: 'II', title: 'The High Priestess', character: 'Hermione Granger'},
  {number: 'III', title: 'The Empress', character: 'Minerva McGonagall'},
  {number: 'IV', title: 'The Emperor', character: 'Barty Crouch Sr.'},
  {number: 'V', title: 'The Hierophant', character: 'Arthur Weasley'},
  {number: 'VI', title: 'The Lovers', character: 'Lupin and Tonks'},
  {number: 'VII', title: 'The Chariot', character: 'Nimbus 2000 Broomstick'},
  {number: 'VIII', title: 'Strength', character: 'Neville Longbottom'},
  {number: 'IX', title: 'Hermit', character: 'Young Tom Marvolo Riddle'},
  {number: 'X', title: 'Wheel of fortune', character: 'The Prophecy'},
  {number: 'XI', title: 'Justice', character: 'Alastor Moody'},
  {number: 'XII', title: 'The Hanged Man', character: 'Severus Snape'},
  {number: 'XIII', title: 'Death', character: 'Lord Voldemort'},
  {number: 'XIV', title: 'Temperance', character: 'Ronald Weasley'},
  {number: 'XV', title: 'The Devil', character: 'Gellert Grindenwald'},
  {number: 'XVI', title: 'The Tower', character: 'Dolores Umbridge'},
  {number: 'XVII', title: 'The Star', character: 'Silver Doe'},
  {number: 'XVIII', title: 'The Moon', character: 'Remus Lupin'},
  {number: 'XIX', title: 'The Sun', character: 'Golden Snitch'},
  {number: 'XX', title: 'Judgement', character: 'Draco Malfoy'},
  {number: 'XXI', title: 'The World', character: 'Quidditch World Cup'},
];

for (let card of cards) {
  card.background = hogwartsWindow;
}
for (let i = 0; i < cards.length; i++) {  
  cards[i].imgPath = images[i.toString()]; 
}


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


