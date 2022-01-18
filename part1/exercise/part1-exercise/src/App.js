function Header(props) {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Part(props) {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
}

function Content(props) {
  return (
    <>
      <Part part={props.part1}></Part>
      <Part part={props.part2}></Part>
      <Part part={props.part3}></Part>
    </>
  );
}

function Total(props) {
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  );
}


function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course}></Header>
      <Content part1={part1}
        part2={part2}
        part3={part3}
        ></Content>
      <Total exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
        ></Total>
    </>
  )
}

export default App;
