

// GeniusRequest.js


import React, { useEffect } from 'react';
import axios from 'axios';

const GeniusRequest = () => {
  useEffect(() => {
    const fetchSongInfo = async () => {
      try {
        const response = await axios.get('https://api.genius.com/search?q=Death%20Band&type=artist', {
          headers: {
            Authorization: `Bearer Y-Ej47QD4XdwbqPSrq4dcdbZxybZGBT-CauqWohpDW36IhhDttVKWle1GeA3hAq3`,
            'Accept': 'application/json'
          }
        });
        console.log('Song info:', response.data.response);
      } catch (error) {
        console.error('Error fetching song info:', error.message);
      }
    };

    fetchSongInfo();
  }, []);

  return null;
};

export default GeniusRequest;