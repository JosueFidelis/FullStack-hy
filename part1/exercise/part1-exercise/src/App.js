import { useState } from 'react';

function Header(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <br />
    </>
  );
}

function Button({ reaction, text }) {
  return <button onClick={reaction}>{text}</button>
}

function Buttons(props) {
  return (
    <>
      <Button reaction={props.goodFeedback} text="Good" />
      <Button reaction={props.neutralFeedback} text="Neutral" />
      <Button reaction={props.badFeedback} text="Bad" />
      <br />
    </>
  );
}

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}

function Statistics({ goodFeedbacks, neutralFeedbacks, badFeedbacks }) {
  let allFeedbacks = badFeedbacks + neutralFeedbacks + goodFeedbacks;
  if (allFeedbacks === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={goodFeedbacks}/>
        <StatisticLine text="Neutral" value={neutralFeedbacks}/>
        <StatisticLine text="Bad" value={badFeedbacks}/>
        <StatisticLine text="All" value={allFeedbacks}/>
        <StatisticLine text="Average" value={(badFeedbacks*-1 + goodFeedbacks)/allFeedbacks}/>
        <StatisticLine text="positive" value={(goodFeedbacks*100/allFeedbacks).toString() + '%'}/>
      </tbody>
    </table>
  );
}


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const giveGoodFeedback = () => 
    setGood(good + 1);

  const giveNeutralFeedback = () => 
    setNeutral(neutral + 1);

  const giveBadFeedback = () => 
    setBad(bad + 1);

  
  return (
    <>
      <Header title="Give feedback"/>
      <Buttons 
        goodFeedback={giveGoodFeedback} 
        neutralFeedback={giveNeutralFeedback}
        badFeedback={giveBadFeedback}
      />
      <Header title="statistics"/>
      <Statistics 
        goodFeedbacks={good}
        neutralFeedbacks={neutral}
        badFeedbacks={bad}
      />
    </>
  );
}

export default App;
