import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter, setCounter] = useState(5)

  // let counter = 5;
  const addValue = () => {
    setCounter(prevCounter=>{
      if(prevCounter < 20){
        return prevCounter+1;
      }
      return prevCounter;
    });
  }
  const reduceVal = () =>{
    setCounter(prevCounter=>{
      if(prevCounter > 0){
        return prevCounter - 1;
      }
      return prevCounter
    })
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
