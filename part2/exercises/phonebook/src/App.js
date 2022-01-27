import { useState, useEffect } from 'react';
import personsService from './services/persons';

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

const Person = ({ person, deletePerson}) => {
  return (
     <>
      <li>{person.name}  {person.number}</li>
      <button onClick={() => deletePerson(person)}>delete</button>
     </>
  );
};

const Persons = ({ persons, searchName, handleDelete }) => {
  const personsToShow = (searchName === '') 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));

  return (
    <>
      <ul>
        {personsToShow.map(person => <Person key={person.name} person={person} deletePerson={handleDelete}/>)}
      </ul>
    </>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]); 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons);
      });
  }, []);

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewSearchName = (event) => {
    setSearchName(event.target.value);
  };

  const handleDelete = (personToDelete) => {
    if (!window.confirm(`Delete ${personToDelete.name}?`))
      return;

    personsService
      .deletePerson(personToDelete.id)
      .then(() => {
        setPersons(persons.filter((person) => person.id !== personToDelete.id));
      });
  };

  const addNumber = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    }
    const personObject = { name: newName, number: newNumber };
    personsService
      .create(personObject)
      .then((returnedPerson) => setPersons(persons.concat(returnedPerson)));

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
      <Persons persons={persons} searchName={searchName} handleDelete={handleDelete}/>
    </>
  )
};

export default App
