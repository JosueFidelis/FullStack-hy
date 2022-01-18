const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>Hello {name}, you have {age} years</p>
      <p>So you were born in {bornYear()}</p>
    </>
  )
}


function App() {
  const name = 'peter';

  return (
    <>
      <p>Greetings</p>
      <Hello name="Gorge" age={20 + 14}></Hello>
      <Hello name={name} age="23"></Hello>
    </>
  );
}

export default App;
