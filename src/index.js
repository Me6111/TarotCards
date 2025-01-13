



// C:\Users\user\Desktop\projects\project-manager\src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from './Apps/Portal/Portal';
import Plot from './Apps/Plot/Plot';
import Levels from './Apps/Levels/Levels';
import DarkKnightTarotApp from './Apps/DarkKnightTarot/DarkKnightTarotApp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/plot" element={<Plot />} />
      <Route path="/levels" element={<Levels />} />
      <Route path="/darkknighttarot" element={<DarkKnightTarotApp />} />

    </Routes>
  </Router>
);