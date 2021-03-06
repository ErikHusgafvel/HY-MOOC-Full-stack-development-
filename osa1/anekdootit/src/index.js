import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button> 
)

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const max = anecdotes.length
  const [array, setArray] = useState(Array(max).fill(0))

  function getRandomNumber(maximum) {
    return Math.floor(Math.random()*maximum)
  }  

  const setVote = () => {
    const copy = [...array]
    copy[selected] += 1
    setArray(copy)
  }

  const handleClick = () => {
    setSelected(getRandomNumber(max))
  }

  const mostVotes = [...array].sort((a,b) => b-a)[0]
  const mostPopular = array.indexOf(mostVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {array[selected]} votes</p>
      <Button handleClick={setVote} text="vote"/>
      <Button handleClick={handleClick} text="next anecdote"/>      
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[mostPopular]}</p>
      <p>has {array[mostPopular]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
