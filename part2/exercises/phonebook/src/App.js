import { useState } from 'react'

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

  const personsToShow = (searchName === '') 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()));


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
      <div>filter shown with <input value={searchName} onChange={handleNewSearchName} /></div>
      <h2>Add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName}/><br />
          number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit" onClick={addNumber}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person => <li key={person.name}>{person.name}  {person.number}</li> )}
      </ul>
    </>
  )
}

export default App
