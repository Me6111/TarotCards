import React, { useState } from 'react';
import './BatPasswordComponent.css';
import BatSign from './BatSign.jpg';

import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { setBatAccess } from '../REDUXstore.js'; // Import action creator

const BatPasswordComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function


  const handleBlurUsername = () => {
    if (username === 'Javier Ocampo') {
      console.log('UsernameOk:', true);
      return true;
    } else {
      setUsername('');
      return false;
    }
  };

  const handleBlurPassword = () => {
    if (password === 'a') {
      console.log('PasswordOk:', true);
      return true;
    } else {
      setPassword('');
      return false;
    }  
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.blur();
      console.log('enter pressed');
      
      const button = document.querySelector('.BatLoginButton');
      if (button) {
        button.click();
      }
    }
  };

  const handleClickBatLogInButton = (event) => {
    event.preventDefault();
    event.target.blur();
    console.log('Login button clicked');

    if (handleBlurUsername() && handleBlurPassword()) {
      console.log('username and password are correct');
      dispatch(setBatAccess(true));
    }
  };

  return (
    <div className="BatPasswordComponent">
      <img src={BatSign} alt="Batsign" id="BatSignImg" />

      <div className="BatLoginInputs">

        <div className="BatInputField0">
          <input
            placeholder="User"
            className="BatInputField"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleBlurUsername}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="BatInputField0">
          <input
            placeholder="Password"
            className="BatInputField"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handleBlurPassword}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="BatLoginButton0">
          <div className="BatLoginButtonBackground"></div>
            <button className="BatLoginButton"
              onClick={handleClickBatLogInButton}
            >LogIn
            </button>
          
        </div>

        
      </div>
    </div>
  );
};

export default BatPasswordComponent;