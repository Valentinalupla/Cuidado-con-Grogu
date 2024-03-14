import { useState } from 'react';
import '../scss/App.scss';

function App() {
  const [positionGrogu, setGrogu] = useState('one');
  const [food, setFood] = useState([]);
  const [diceResult, setDiceResult] = useState('');
  const [stateGame, setStateGame] = useState('');

  return (
    <div>
      <header className="title">
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <section className="board">
          <div className="cell">
            <div className="grogu">👣</div>
          </div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

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
