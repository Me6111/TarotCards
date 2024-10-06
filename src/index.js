import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Portal from './Apps/Portal/Portal';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Portal />
  </BrowserRouter>,
  document.getElementById('root')
);