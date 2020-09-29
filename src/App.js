import React from 'react';
import Forecast from './components/Forecast/Forecast';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Forecast />
      </div>
      <footer>
        Page created by{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/BenjaminHardwick"
        >
          Benjamin Hardwick
        </a>
      </footer>
      <span role="img" aria-labelledby="emoji group">
        📱 ☀️ 😱  ☔️{' '}
      </span>
    </div>
  );
}

export default App;
