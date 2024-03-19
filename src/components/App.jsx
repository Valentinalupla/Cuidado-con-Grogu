import '../scss/App.scss';
import { useState } from 'react';
import Header from './Header';
import Board from './Board';
import Dice from './Dice';

function App() {
  const [positionGrogu, setGrogu] = useState(0);
  const [cookies, setCookies] = useState(['🍪', '🍪', '🍪']);
  const [eggs, setEggs] = useState(['🥚', '🥚', '🥚']);
  const [frogs, setFrogs] = useState(['🐸', '🐸', '🐸']);
  const [diceResult, setDiceResult] = useState('');
  // const [stateGame, setStateGame] = useState('');

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    console.log(randomNumber);
    if (randomNumber === 4) {
      setGrogu(positionGrogu + 1);
      // setGame((stateGame = 'Grogu ha avanzado una casilla'));
    } else if (randomNumber === 1) {
      setCookies(cookies.splice(0, 1));
      // stateGame = 'Grogu ha avanzado una casilla';
    } else if (randomNumber === 2) {
      setEggs(eggs.splice(0, 1));
      // stateGame = 'Grogu ha avanzado una casilla';
    } else setFrogs(frogs.splice(0, 1));
    // stateGame = 'Grogu ha avanzado una casilla';
  };
  return (
    <div>
      <Header />
      <main className="page">
        <Board positionGrogu= {positionGrogu} />
        {/* <p>{stateGame}</p> */}
        <Dice handleDice={rollDice} />
        <section>
          <button className="dice">Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
