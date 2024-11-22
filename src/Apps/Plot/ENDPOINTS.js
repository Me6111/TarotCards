useEffect(() => {
    const getLyrics = async (Album, ID) => {
      try {
        // Create the query object
        const queryObject = {
          query: `
            SELECT Lyrics FROM Songs WHERE Album = ${Album} AND ID = ${ID}
          `
        };

        // Send POST request to execute_qq endpoint
        const response = await axios.post(`https://express-death.up.railway.app/execute_qq`, queryObject);
        console.log('Lyrics fetched:', response.data[0].Lyrics);

        // Escape special characters and wrap in <pre> tag
        const escapedLyrics = response.data[0].Lyrics.replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
        
        // Update AppContent_Field with the formatted lyrics
        document.querySelector('.AppContent_Field').innerHTML = `<pre>${escapedLyrics}</pre>`;

      } catch (error) {
        console.error(`Error fetching lyrics:`, error);
      }
    };

    //getLyrics(2, 1);
  }, []);

  useEffect(() => {
    const accessEndpoint = async (endpoint) => {
      try {
        const response = await axios.get(`https://express-death.up.railway.app/${endpoint}`);
        console.log(response.data);
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
      }
    };

    //accessEndpoint('printlistoffilesfromsongsfolder');
  }, []);


  useEffect(() => {
    const accessEndpoint = async (endpoint) => {
      try {
        const response = await axios.get(`https://express-death.up.railway.app/${endpoint}`);
        console.log(response.data);
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
      }
    };

    //accessEndpoint('printlistoffilesfromsongsfolder');
  }, []);



