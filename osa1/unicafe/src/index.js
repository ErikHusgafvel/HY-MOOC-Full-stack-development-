import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ handle, text }) => (
  <button onClick={handle}>{text}</button>
)
  

const Display = ({ value, text }) => (
  <tr>
    <td>{text}</td>
    <td> {value}</td>
  </tr>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td> {value}</td>
  </tr>
)

const Statistics = ({good, bad, all }) => {
  let average = isNaN((good-bad)/all) ? 0 : (good-bad)/all
  let positive = isNaN(good/all) ? 0 : good/all*100 + " %"
  return (
    <>
      <StatisticLine text="average" value=  {average} />
      <StatisticLine text="positive" value={positive} />
    </>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  const handleGood = (valueGood, valueAll) => {
    setAll(valueAll + 1)
    setGood(valueGood + 1)
  }
  const handleNeutral = (valueNeutral, valueAll) => {
    setAll(valueAll + 1)
    setNeutral(valueNeutral + 1)
  }
  const handleBad = (valueBad, valueAll) => {
    setAll(valueAll + 1)
    setBad(valueBad + 1)
  }

  if(all === 0) {
    return (
      <div>
        <Header text="give feedback" />
        <Button handle={() => handleGood(good, all)} text="good"/>
        <Button handle={() => handleNeutral(neutral, all)} text="neutral"/>
        <Button handle={() => handleBad(bad, all)} text="bad"/>
        <Header text="statistics" />
        <p>No feedback given</p>
      </div>
    )
  } else {  
    return (
      <div>
        <Header text="give feedback" />
        <Button handle={() => handleGood(good, all)} text="good"/>
        <Button handle={() => handleNeutral(neutral, all)} text="neutral"/>
        <Button handle={() => handleBad(bad, all)} text="bad"/>
        <Header text="statistics" />
        <table>
          <tbody>
            <Display value={good} text="good"/>   
            <Display value={neutral} text="neutral"/>
            <Display value={bad} text="bad"/>
            <Display value={all} text="all" />
            <Statistics good={good} bad={bad} all={all} />
          </tbody>
        </table>
        
        
        
        
        
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);