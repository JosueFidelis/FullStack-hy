import { useState } from 'react';

const Filter = ({ searchName, newSearchNameCallback }) => {
  return (
    <>
      <div>filter shown with <input value={searchName} onChange={newSearchNameCallback} /></div>
    </>
  );
};

const PersonForm = (props) => {
  return (
    <>
        <form>
          <div>
            name: <input value={props.newName} onChange={props.newNameCallback}/><br />
            number: <input value={props.newNumber} onChange={props.newNumberCallback}/>
          </div>
          <div>
            <button type="submit" onClick={props.addNumberCallback}>add</button>
          </div>
        </form>
    </>
  );
};

const Persons = ({ persons, searchName }) => {
  const personsToShow = (searchName === '') 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));

  return (
    <>
      <ul>
        {personsToShow.map(person => <li key={person.name}>{person.name}  {person.number}</li> )}
      </ul>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '2345678', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const addNumber = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
    setNewNumber('');
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} newSearchNameCallback={handleNewSearchName}/>
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName}
        newNameCallback={handleNewName} 
        newNumber={newNumber} 
        newNumberCallback={handleNewNumber} 
        addNumberCallback={addNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />
    </>
  )
};

export default App
