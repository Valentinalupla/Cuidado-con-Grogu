import '../scss/App.scss';
import { useState, useEffect } from 'react';
import Header from './Header';
import GameStatus from './GameStatus';
import Board from './Board';
import Dice from './Dice';

function App() {
  const [name, setName] = useState('');
  const [positionGrogu, setGroguPosition] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [diceResult, setDiceResult] = useState('');
  const [stateGame, setStateGame] = useState('Inicio');

  const onChangeSetName = (value) => {
    setName(value);
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    if (randomNumber === 4) {
      setGroguPosition(positionGrogu + 1);
      setDiceResult('Resultado: 4, Grogu ha avanzado una casilla');
    }
    if (randomNumber === 1) {
      setCookies(cookies.slice(1));
      setDiceResult('Resultado: 1, has ayudado a Mando a descargar una galleta');
    }

    if (randomNumber === 2) {
      setEggs(eggs.slice(1));
      setDiceResult('Resultado: 2, has ayudado a Mando a descargar un huevo');
    }

    if (randomNumber === 3) {
      setFrogs(frogs.slice(1));
      setDiceResult('Resultado: 3, has ayudado a Mando a descargar una rana');
    }
  };

  useEffect(() => {
    if (positionGrogu === 7) {
      setStateGame('Has perdido');
    }
  });

  useEffect(() => {
    if (positionGrogu !== 0 || cookies.length !== 3 || eggs.length !== 3 || frogs.length !== 3) {
      setStateGame('En curso');
    }
  });

  useEffect(() => {
    if (cookies.length === 0 && eggs.length === 0 && frogs.length === 0) {
      setStateGame('Has perdido');
    }
  });

  return (
    <div>
      <Header name={name} onChangeSetName={onChangeSetName} />
      <main className="page">
        <Board positionGrogu={positionGrogu} />
        <div className="game-status">{diceResult}</div>
        <Dice handleDice={rollDice} />
        <GameStatus stateGame={stateGame} />

        <section className="goods-container">
          <div className="goods-item">{cookies}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{eggs}</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">{frogs}</div>
        </section>

        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
