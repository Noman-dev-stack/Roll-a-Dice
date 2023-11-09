import React, { useState } from 'react';
import './App.css';

function App() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Dice Roller</h1>
      <div className="dice-container">
     <div className="dice">{diceValue}</div>
        <button className="roll-button" onClick={rollDice}>
          Roll the Dice
        </button>
      </div>
    </div>
  );
}

export default App;
