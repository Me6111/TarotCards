


//C:\Users\user\Desktop\projects\project-manager\src\REDUXstore\REDUXstore.js


// REDUXstore.js
import { createStore } from 'redux';

const initialState = {
  selectedLevel: null,
  sliderFieldisActive: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_LEVEL':
      return { ...state, selectedLevel: action.payload };
    case 'TOGGLE_ACTIVE':
      return { ...state, sliderFieldisActive: !state.sliderFieldisActive };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;