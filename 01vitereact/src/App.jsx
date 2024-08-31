import Chai from "./chai"
function App() {   // if there is something html in returning then we named file as .jsx
  // whenever you decalare a function then just make sure you name it in capitalised order.
  // cause it also give and error.
  // here we see how to access variables in function .
  const username = "Yuvraj";
  return (
    <>            
    <Chai/>                      
    <h1>Chai aur raect with {username}</h1> 
    <p>Test para</p>
    </>
  )
}

export default App
