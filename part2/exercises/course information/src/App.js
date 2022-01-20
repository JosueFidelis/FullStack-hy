function Header(props) {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

function Part({ part }) {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
}

function Content({ parts }) {
  return (
    <>
      {parts.map(part => <Part key={part.id} part={part}></Part>)}
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
      <Total parts={course.parts}
        ></Total>
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
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
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
