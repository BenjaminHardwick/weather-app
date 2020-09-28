import React from 'react';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ minWidth: '200%;' }}>
        <h1>Weather App made in React</h1>

        <Forecast />
      </div>
      <footer>Page created by Benjamin Hardwick</footer>
    </div>
  );
}

export default App;
