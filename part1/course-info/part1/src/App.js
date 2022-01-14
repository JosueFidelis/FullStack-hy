const Hello = (props) => {
  return (
    <>
      <p>Hello {props.name}, you have {props.age} years</p>
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
