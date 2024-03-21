import '../scss/components/Header.scss';
import Form from './Form';

const Header = ({ name, onChangeSetName }) => {
  return (
    <header className="title">
      <h1>¡Cuidado con Grogu {name}!</h1>
      <Form onChangeSetName={onChangeSetName} />
    </header>
  );
};

export default Header;
