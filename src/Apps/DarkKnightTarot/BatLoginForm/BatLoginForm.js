// BatLoginForm.js

import React, { useState } from 'react';
import './BatLoginForm.css';
import BatSign from './BatSign.jpg';
import { useDispatch } from 'react-redux'; 
import { setBatAccess } from '../REDUXstore.js'; 

const BatLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch(); // Get the dispatch function

  const handleBlurUsername = () => {
    if (username === 'a') {
      return true;
    } else {
      return false;
    }
  };

  const handleBlurPassword = () => {
    if (password === 'a') {
      return true;
    } else {
      return false;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.blur();

      const button = document.querySelector('.BatLoginButton');
      if (button) {
        button.click();
      }
    }
  };

  const ClickBatLogInButton = (event) => {
    event.preventDefault();
    event.target.blur();

    if (handleBlurUsername() && handleBlurPassword()) {
      dispatch(setBatAccess(true));
    } else {
      dispatch(setBatAccess(false));
    }
  };

  return (
    <div className="BatLoginForm">
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
            onClick={ClickBatLogInButton}
          >LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatLoginForm;