import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './REDUXstore';
// import BatPasswordComponent from './BatPasswordComponent/BatPasswordComponent';
import DarkKnightTarotCards from './DarkKnightTarotCards/DarkKnightTarotCards';
import ReactDOM from 'react-dom'; // Import ReactDOM

const BatAppContent = () => {
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      if (store.getState().BatAccess) {
        const element = document.querySelector('.BatAppContent');
        if (element) {
          element.innerHTML = '';
          ReactDOM.render(<DarkKnightTarotCards />, element);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <div className="BatAppContent">
        <DarkKnightTarotCards />
      </div>
    </Provider>
  );
};

export default BatAppContent;