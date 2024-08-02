


import React, { useEffect } from 'react';
import './OpacityScroll.css';

import chuck2 from './chuck2.jpg';
import chuck1 from './chuck1.jpg';
import chuck0 from './chuck0.jpg';

import cancer0 from './cancer0.jpg';
import cancer1 from './cancer1.jpg';
import cancer2 from './cancer2.jpg';
import cancer3 from './cancer3.jpg';
import cancer4 from './cancer4.jpg';

import dimensions1 from './dimensions1.jpg';
import dimensions2 from './dimensions2.jpg';
import dimensions3 from './dimensions3.jpg';

import brain1 from './brain1.jpg';
import brain2 from './brain2.jpg';

import death_eyes from './death_eyes.jpg';

const OpacityScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const signs = document.querySelectorAll('.sign-in-text');
      let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      signs.forEach((sign, index) => {
        const revealHeight = 8000 * index;
        const fadeHeight = 3000;
        const maxFadeOutHeight = revealHeight + fadeHeight * 2;

        // Calculate opacity for fade-in
        let opacity = Math.min(1, (scrollPosition - revealHeight) / fadeHeight);
        opacity = Math.max(0, opacity);

        // Calculate opacity for fade-out
        if (scrollPosition >= maxFadeOutHeight) {
          opacity = 1 - Math.min(1, (scrollPosition - maxFadeOutHeight) / fadeHeight);
        }

        // **Removed unused variable maxFontSize**
        const minFontSize = 12;
        let fontSize = minFontSize + (scrollPosition - revealHeight) / 100; // Adjust divisor for speed

        sign.style.opacity = opacity.toString();
        sign.style.fontSize = fontSize + 'px';
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sign-in-text-container">
  
        <div className="sign-in-text">Chuck Shuldiner</div>
        <div className="sign-in-text" id="chuck">
            <img src={chuck2} alt="chuck2" />
        </div>
        <div className="sign-in-text">1967-2001</div>
        <div className="sign-in-text" id="chuck">
            <img src={chuck1} alt="chuck1" />
        </div>
        <div className="sign-in-text">One of the most legendary metal musicians</div>
        <div className="sign-in-text">The inventor of death metal</div>
        <div className="sign-in-text">The founder of Death band</div>
        <div className="sign-in-text" id="chuck">
            <img src={chuck0} alt="chuck0" />
        </div> 
        <div className="sign-in-text">He has been exploring nature of life and death</div>
        <div className="sign-in-text">And he was a good man</div>
        <div className="sign-in-text">But his work cursed him...</div>
        <div className="sign-in-text" id="cancer">
            <img src={cancer0} alt="cancer0" />
        </div>    
        <div className="sign-in-text">He tried to enter the world of the death during his lifetime</div>
        
        <div className="sign-in-text" id="dimensions">
            <img src={dimensions1} alt="dimensions1" />
        </div> 

        <div className="sign-in-text">He was severely punished for that...</div>
        <div className="sign-in-text" id="cancer">
            <img src={cancer0} alt="cancer0" />
        </div>    
        <div className="sign-in-text" id="cancer">
            <img src={cancer1} alt="cancer1" />
        </div>    
        <div className="sign-in-text" id="cancer">
            <img src={cancer2} alt="cancer2" />
        </div>    
        <div className="sign-in-text" id="cancer">
            <img src={cancer3} alt="cancer3" />
        </div>    
        <div className="sign-in-text" id="cancer">
            <img src={cancer4} alt="cancer4" />
        </div>    
        <div className="sign-in-text">At the age of 34 he died from the brain cancer</div>
        <div className="sign-in-text">Nothing could save him from that...</div>
        <div className="sign-in-text">it was a one-way trip with no possibility of return</div>
        <div className="sign-in-text">You will go with Chuck on his last journey</div>
        <div className="sign-in-text" id="brain">
            <img src={brain1} alt="brain1" />
        </div>    
        <div className="sign-in-text">To the world of the death</div>
        <div className="sign-in-text" id="brain">
            <img src={brain2} alt="brain2" />
        </div>    
        <div className="sign-in-text">Pass through all Seven Dimensions of Death</div>

        <div className="sign-in-text" id="dimensions">
            <img src={dimensions2} alt="dimensions2" />
        </div>   

        <div className="sign-in-text">And face the last attempt:</div>

        <div className="sign-in-text" id="dimensions">
            <img src={dimensions3} alt="dimensions3" />
        </div> 

        <div className="sign-in-text">Death Itself</div>
        <div className="sign-in-text"></div>
        <div className="sign-in-text"></div>
        
        <div className="sign-in-text" id="death_eyes">
            <img src={death_eyes} alt="death_eyes" />
        </div>    
    </div>
  );
};

export default OpacityScroll;