import React from 'react';
import { RealtimeData } from './realtimeData/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div>
          <h1>Jogo Queno</h1>
          <h2>Ranking</h2>
          <RealtimeData />
        </div>
      </div>
    </div>
  );
}

export default App;
