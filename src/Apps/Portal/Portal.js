import React, { useState, useEffect, useRef } from 'react';
import './Portal.css';
import MainMenuSet from '../../components/MainMenuSet/MainMenuSet';
import AppContent from './AppContent';

const Portal = () => {
  const [state, setState] = useState(null);
  const ElementToRef = useRef(null);

  useEffect(() => {
    // Initialize ElementToRef.current value here if needed
    ElementToRef.current = null;
  }, []);

  return (
    <div ref={ElementToRef} className="appContainer">
      <MainMenuSet />
      <AppContent />
    </div>
  );
};

export default Portal;