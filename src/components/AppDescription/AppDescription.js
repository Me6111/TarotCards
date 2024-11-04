import React, { useState, useEffect } from 'react';

function App() {
  const [formattedText, setFormattedText] = useState('');

  useEffect(() => {
    // Fetch your text data here
    const fetchData = async () => {
      const response = await fetch('your-api-endpoint');
      const data = await response.text();
      setFormattedText(data);
    };
    fetchData();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
}

export default App;