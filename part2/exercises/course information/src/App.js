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
  let sumOfExercises = parts.reduce((a, b) => a + b.exercises, 0);
  return (
    <>
      <strong>Number of exercises {sumOfExercises}</strong>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {courses.map(course => <Course key={course.id} course={course}/>)}
    </>
  );
}

export default App;
