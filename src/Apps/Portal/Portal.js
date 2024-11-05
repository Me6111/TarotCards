import React, { useRef } from 'react';
import './Portal.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import AppContent from './AppContent';

const Portal = () => {
  const ElementToRef = useRef(null);

  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
      <AppContent />
    </div>
  );
};

export default Portal;