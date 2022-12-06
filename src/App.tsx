import React from 'react';
import bear from './bear.svg';
import './App.css';
import DarkMode from './DarkMode';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={bear} className="App-logo" alt="logo" />
        <p>
          Toggling light and dark mode on bear SVG
        </p>
      </header>
    </div>
  );
}

export default App;
