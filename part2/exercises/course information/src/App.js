function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Part(props) {
  console.log(props);
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
}

function Content({ parts }) {
  return (
    <>
      {parts.map(part => <Part part={part}></Part>)}
    </>
  );
}

function Total({ parts }) {
  return (
    <>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </>
  );
}

function Course({ course }) {
  return (
    <>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
    </>
  );
}


function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Course course={course}/>
    </>
  );
}

export default App;
