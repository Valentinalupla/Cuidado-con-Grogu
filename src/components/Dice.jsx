import PropTypes from 'prop-types';

function Dice({ handleDice }) {
  const handleClick = () => {
    handleDice();
    console.log('hemos hecho click en dado');
  };
  return (
    <div className="dice" onClick={handleClick}>
      🎲
    </div>
  );
}

Dice.propTypes = {
  handleDice: PropTypes.func.isRequired,
  resultRandomNumber: PropTypes.number,
};

export default Dice;
