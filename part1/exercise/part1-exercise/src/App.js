import { useState } from 'react';

function Header(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <br />
    </>
  );
}

function FeedbackButtons(props) {
  return (
    <>
      <button onClick={props.goodFeedback}>Good</button>
      <button onClick={props.neutralFeedback}>Neutral</button>
      <button onClick={props.badFeedback}>Bad</button>
      <br />
    </>
  );
}

function Feedbacks({ goodFeedbacks, neutralFeedbacks, badFeedbacks }) {
  let allFeedbacks = badFeedbacks + neutralFeedbacks + goodFeedbacks;
  if (allFeedbacks === 0) {
    return <p>No feedback given</p>
  }
  return (
    <>
      <p>Good {goodFeedbacks}</p>
      <p>Neutral {neutralFeedbacks}</p>
      <p>Bad {badFeedbacks}</p>
      <p>All {allFeedbacks}</p>
      <p>Average {(badFeedbacks*-1 + goodFeedbacks)/allFeedbacks}</p>
      <p>positive {goodFeedbacks*100/allFeedbacks}%</p>
    </>
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
      <FeedbackButtons 
        goodFeedback={giveGoodFeedback} 
        neutralFeedback={giveNeutralFeedback}
        badFeedback={giveBadFeedback}
      />
      <Header title="statistics"/>
      <Feedbacks 
        goodFeedbacks={good}
        neutralFeedbacks={neutral}
        badFeedbacks={bad}
      />
    </>
  );
}

export default App;
