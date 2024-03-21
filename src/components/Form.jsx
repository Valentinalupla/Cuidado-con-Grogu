function Form({ name, onChangeSetName }) {
  const handleChangeName = (event) => {
    const valueName = event.target.value;
    onChangeSetName(valueName);
  };

  return (
    <form action="">
      <label htmlFor="name">Introduce tu nombre para jugar</label>
      <input type="text" id="name" value={name} onChange={handleChangeName} />
    </form>
  );
}

export default Form;
