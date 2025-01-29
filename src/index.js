



// C:\Users\user\Desktop\projects\project-manager\src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './Apps/Portal/Portal';
import DarkKnightTarotApp from './Apps/DarkKnightTarot/DarkKnightTarotApp';
import HarryPotterTarotApp from './Apps/HarryPotterTarot/HarryPotterTarotApp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/darkknight" element={<DarkKnightTarotApp />} />
      <Route path="/harrypotter" element={<HarryPotterTarotApp />} />

    </Routes>
  </Router>
);