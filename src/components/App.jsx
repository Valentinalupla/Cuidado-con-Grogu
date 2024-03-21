import '../scss/App.scss';
import { useState } from 'react';
import Header from './Header';
import GameStatus from './GameStatus';
import Board from './Board';
import Dice from './Dice';

function App() {
  const [name, setName] = useState('');
  const [positionGrogu, setGrogu] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [diceResult, setDiceResult] = useState('');
  const [stateGame, setStateGame] = useState('');

  const onChangeSetName = (value) => {
    setName(value);
  };

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    if (randomNumber === 4) {
      setGrogu(positionGrogu + 1);
      setDiceResult('Grogu ha avanzado una casilla');
    } else if (randomNumber === 1) {
      if (cookies !== 0) {
        setCookies(cookies.splice(0, 1));
        setDiceResult('Has ayudado a Mando a descargar una galleta');
      } else {
        setCookies('');
        setDiceResult('No quedan más galletas');
      }
    } else if (randomNumber === 2) {
      if (eggs !== 0) {
        setEggs(eggs.splice(0, 1));
        setDiceResult('Has ayudado a Mando a descargar un huevo');
      } else {
        setEggs('');
        setDiceResult('No quedan más huevos');
      }
    } else {
      if (frogs !== 0) {
        setFrogs(frogs.splice(0, 1));
        setDiceResult('Has ayudado a Mando a descargar una rana');
      } else {
        setFrogs('');
        setDiceResult('No quedan más ranas');
      }
    }

    if (positionGrogu === 7) {
      setStateGame('Has perdido');
    }
    if (positionGrogu !== 0 || cookies.length !== 3 || eggs.length !== 3 || frogs.length !== 3) {
      setStateGame('En curso');
    }
    if (cookies === '' && eggs === '' && frogs === '') {
      setStateGame('Has ganado');
    }
  };
  return (
    <div>
      <Header name={name} onChangeSetName={onChangeSetName} />
      <main className="page">
        <GameStatus />
        <Board positionGrogu={positionGrogu} />
        <div className="game-status">{diceResult}</div>
        <Dice handleDice={rollDice} />
        <section>
          <div className="game-status">{stateGame}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">{cookies}</div>
          {/* <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div> */}
        </section>
        <section className="goods-container">
          <div className="goods-item">{eggs}</div>
          {/* <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div> */}
        </section>
        <section className="goods-container">
          <div className="goods-item">{frogs}</div>
          {/* <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div> */}
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
