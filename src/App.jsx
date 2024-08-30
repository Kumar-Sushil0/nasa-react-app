import React, { useState, useEffect } from 'react';
import Main from './component/Main';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleDisplayModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from Cache Today");
        return;
      }
      localStorage.clear();

      try {
        setLoading(true);
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        console.log("Fetched From API Today");
        setData(apiData);
        setLoading(false);
        console.log('DATA\n', apiData);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadingState">
          <i className="fa-solid fa-spinner"></i>
        </div>
      ) : (
        data && <Main data={data} />
      )}

      {showModal && (
        <Sidebar
          handleDisplayModal={handleDisplayModal}
          data={data}
        />
      )}

      {data && (
        <Footer
          handleDisplayModal={handleDisplayModal}
          data={data}
        />
      )}
    </>
  );
}

export default App;
