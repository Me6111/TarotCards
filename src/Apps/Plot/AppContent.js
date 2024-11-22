import React, { useEffect } from 'react';
import axios from 'axios';

const AppContent = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = 'https://express-death.up.railway.app/execute_qq';
        const response = await axios.post(endpoint, { query: 'SELECT * FROM Songs' });
        console.log('Connected to execute_qq endpoint:', endpoint, 'response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message || error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="AppContent">
      <div className="AppContent_Field"></div>
    </div>
  );
};

export default AppContent;