import React from 'react';
import logo from './logo.svg';
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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
