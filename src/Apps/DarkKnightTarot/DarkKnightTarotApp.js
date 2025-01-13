import React, { useEffect, useState, useRef } from 'react';
import { Provider } from 'react-redux';
import store from './REDUXstore';

import BatLoginForm from './BatLoginForm/BatLoginForm';
import AccessMessage_Granted from './BatLoginForm/AccessMessage/AccessMessage_Granted/AccessMessage_Granted';
import AccessMessage_Denied from './BatLoginForm/AccessMessage/AccessMessage_Denied/AccessMessage_Denied';
import DarkKnightTarotCards from './DarkKnightTarotCards/DarkKnightTarotCards';

import ReactDOM from 'react-dom'; // Import ReactDOM


import './DarkKnightTarotApp.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';

const DarkKnightTarot = () => {
  const [accessMessage, setAccessMessage] = useState(null);
  const [zIndex, setZIndex] = useState(0);
  const darkKnightTarotRef = useRef(null);

  const handleDeleteAccessMessage = () => {
    setAccessMessage(null);
    setZIndex(0);
    console.log('AccessMessage - deleted');
  };

  const handleDeleteAll = () => {
    // Clear the DarkKnightTarot element
    darkKnightTarotRef.current.innerHTML = '';

    // Render DarkKnightTarotCards component
    ReactDOM.render(<DarkKnightTarotCards />, darkKnightTarotRef.current);
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      if (state.BatAccess === true) {
        setAccessMessage(
          <AccessMessage_Granted onDelete={handleDeleteAll} />
        );
        setZIndex(1);
      } else {
        setAccessMessage(
          <AccessMessage_Denied onDelete={handleDeleteAccessMessage} />
        );
        setZIndex(1);
      }
    });

    return () => unsubscribe();
  }, [store]);

  return (
    <Provider store={store}>
      <MainMenuSet />
      <div ref={darkKnightTarotRef} className="DarkKnightTarot">
        <DarkKnightTarotCards />
      </div>
    </Provider>
  );
};

export default DarkKnightTarot;



/*

        <BatLoginForm />
        <div className="AccessMessage" style={{ zIndex: zIndex }}>
          {accessMessage}
        </div>

*/