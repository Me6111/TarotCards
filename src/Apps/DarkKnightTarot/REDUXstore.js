


// C:\Users\user\Desktop\projects\Death\project-manager\src\Apps\DarkKnightTarot\REDUXstore.js

import { createStore } from 'redux';

const initialState = {
  BatAccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BAT_ACCESS':
      return { ...state, BatAccess: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

// Add this function to set BatAccess
export const setBatAccess = (payload) => ({
  type: 'SET_BAT_ACCESS',
  payload,
});