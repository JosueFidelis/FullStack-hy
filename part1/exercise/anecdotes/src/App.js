import { useState } from 'react';

function Header(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <br />
    </>
  );
}

function Buttons(props) {
  return (
    <>
      <button onClick={props.voteCallBack}>vote</button>
      <button onClick={props.randomAnecdoteCallBack}>next anecdote</button>
    </>
  );
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState({'anecdote': anecdotes[0], 'votes': 0});

  const selectRandomAnecdote = () => {
    let nextAnecdoteNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextAnecdoteNumber);
  };

  const updateMostVotedAnecdote = () => {
    if (mostVotedAnecdote.votes >= votes[selected]) 
      return;
    
    const mostVotedAnecdoteCopy = {...mostVotedAnecdote}

    mostVotedAnecdoteCopy.anecdote = anecdotes[selected];
    mostVotedAnecdoteCopy.votes = votes[selected];
    setMostVotedAnecdote(mostVotedAnecdoteCopy);
  }

  const vote = () => {
    const votesCopy = [...votes];
    votesCopy[selected]++;
    setVotes(votesCopy);
    updateMostVotedAnecdote(votesCopy[selected]);
  };

  return (
    <>
      <Header title="Anecdote of the day"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Buttons voteCallBack={vote} randomAnecdoteCallBack={selectRandomAnecdote}/>
      <Header title="Anecdote with most votes"/>
      <p>{mostVotedAnecdote.anecdote}</p>
    </>
  );
}

export default App;
