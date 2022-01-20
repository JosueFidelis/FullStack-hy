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

export default Course;