import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';

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
    <div className="main">
      <header>
        <Container>
          <h1>Mosquito Observation Identification System</h1>
        </Container>
      </header>

      <main>
        <Container>
          <Home />
        </Container>
      </main>
    </div>
  );
}

export default App;
