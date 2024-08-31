import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(5)

  // let counter = 5;
  const addValue = () => {
    counter+=1;
    setCounter(counter);
  }
  const reduceVal = () =>{
    counter-=1;
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value{counter}</button>
      <br/>
      <button
      onClick={reduceVal}>Decrease value{counter}</button>
    </>
  )
}

export default App
