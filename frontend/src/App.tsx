import React from 'react';
import './App.css';

function App() {

  // Fetch data from the API
  const url = process.env.REACT_APP_API_URL;
  const get_observations = `${url}/api/observations/`;
  React.useEffect(() => {
    const fetchObservations = async () => {
      const response = await fetch(get_observations);
      const data = await response.json();
      console.log(data);
    };
    fetchObservations();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
    </div>
  );
}

export default App;
