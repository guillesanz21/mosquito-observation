import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';

function App() {
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
