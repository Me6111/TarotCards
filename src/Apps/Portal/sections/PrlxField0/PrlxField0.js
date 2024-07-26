import React from 'react';
import './PrlxField0.css';

import img0 from './0.jpg'; 


const PrlxField0 = () => {
  // Create a ref to the target element
  const txtRef = React.useRef(null);

  // Initialize the intersection observer
  const observer = React.useRef(
    new IntersectionObserver(
      ([entry]) => {
        // If the element is in view, add the --visible class
        if (entry.isIntersecting) {
          entry.target.classList.add('PrlxField0-txt--visible');
        } else {
          entry.target.classList.remove('PrlxField0-txt--visible');
        }
      },
      {
        threshold: 0.1, // Trigger the callback when 10% of the element is visible
      }
    )
  );

  // Use the ref and observer in a useEffect hook
  React.useEffect(() => {
    if (txtRef.current) {
      observer.current.observe(txtRef.current);
    }

    return () => {
      if (txtRef.current) {
        observer.current.unobserve(txtRef.current);
      }
    };
  }, []);

  return (
    <div className="PrlxField0">
        <img src={img0} alt="img0"/>
        <div ref={txtRef} className="PrlxField0-txt">He is one of the most legendary metal musicians</div>
    </div>
  );
};

export default PrlxField0;