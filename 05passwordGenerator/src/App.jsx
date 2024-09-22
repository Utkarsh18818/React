import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // useref hook

  const passwordRef = useRef(null) 
  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQURTUVWXYZabcdefghijklmnopqrstuvwxyz "
    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="`~!@#$%^&*(){}[]?/+-_"

    for(let i=1; i<=length; i++){

      let char =Math.floor( Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setpassword(pass)

  },[length,setpassword,numberAllowed,charAllowed])


  const copypasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },
[password])

  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,
    charAllowed,passwordGenerator])
  return (
    <>
      <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-700 ' >
        <div className = 'flex shadow rounded-lg overflow-hiden mb-4'>password Generator
          <input type = "text"
          value = {password} 
          className = 'outline-none w-full py-1 px-3'
          placeholder = 'password'
          readOnly
          ref = {passwordRef}
          />
          <button
          onClick={copypasswordToclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setlength(e.target.value)}}
                 />
              <label>Length:{length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setcharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
