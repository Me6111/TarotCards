


// C:\Users\user\Desktop\projects\project-manager\src\Apps\DarkKnightTarotCards\DarkKnightTarotCards\BatSlider.js

import React from 'react';
import './BatSlider.css';
import BatSliderField from './BatSliderField';

import card0 from './BatCardsImages/0_The Fool.jpg';
import card1 from './BatCardsImages/1_The Magician.jpg';
import card2 from './BatCardsImages/2_The High Priestess.jpg';
import card3 from './BatCardsImages/3_The Empress.jpg';
import card4 from './BatCardsImages/4_The Emperor.jpg';
import card5 from './BatCardsImages/5_The Hierophant.jpg';
import card6 from './BatCardsImages/6_The Lovers.jpg';
import card7 from './BatCardsImages/7_The Chariot.jpg';
import card8 from './BatCardsImages/8_Strength.jpg';
import card9 from './BatCardsImages/9_Hermit.jpg';
import card10 from './BatCardsImages/10_Wheel of fortune.jpg';
import card11 from './BatCardsImages/11_Justice.jpg';
import card12 from './BatCardsImages/12_The Hanged Man.jpg';
import card13 from './BatCardsImages/13_Death.jpg';
import card14 from './BatCardsImages/14_Temperance.jpg';
import card15 from './BatCardsImages/15_The Devil.jpg';
import card16 from './BatCardsImages/16_The Tower.jpg';
import card17 from './BatCardsImages/17_The Star.jpg';
import card18 from './BatCardsImages/18_The Moon.jpg';
import card19 from './BatCardsImages/19_The Sun.jpg';
import card20 from './BatCardsImages/20_Judgement.jpg';
import card21 from './BatCardsImages/21_The World.jpg';

const dictsList = [
  {imgPath: card0, number: 'O', title: 'The Fool'},
  {imgPath: card1, number: 'I', title: 'The Magician'},
  {imgPath: card2, number: 'II', title: 'The High Priestess'},
  {imgPath: card3, number: 'III', title: 'The Empress'},
  {imgPath: card4, number: 'IV', title: 'The Emperor'},
  {imgPath: card5, number: 'V', title: 'The Hierophant'},
  {imgPath: card6, number: 'VI', title: 'The Lovers'},
  {imgPath: card7, number: 'VII', title: 'The Chariot'},
  {imgPath: card8, number: 'VIII', title: 'Strength'},
  {imgPath: card9, number: 'IX', title: 'Hermit'},
  {imgPath: card10, number: 'X', title: 'Wheel of fortune'},
  {imgPath: card11, number: 'XI', title: 'Justice'},
  {imgPath: card12, number: 'XII', title: 'The Hanged Man'},
  {imgPath: card13, number: 'XIII', title: 'Death'},
  {imgPath: card14, number: 'XIV', title: 'Temperance'},
  {imgPath: card15, number: 'XV', title: 'The Devil'},
  {imgPath: card16, number: 'XVI', title: 'The Tower'},
  {imgPath: card17, number: 'XVII', title: 'The Star'},
  {imgPath: card18, number: 'XVIII', title: 'The Moon'},
  {imgPath: card19, number: 'XIX', title: 'The Sun'},
  {imgPath: card20, number: 'XX', title: 'Judgement'},
  {imgPath: card21, number: 'XXI', title: 'The World'},
];

const LevelsSlider = () => {
  return (
    <div className="BatSlider">
      <div className="BatSliderFields">
        {dictsList.map((item) => (
          <BatSliderField key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default LevelsSlider;