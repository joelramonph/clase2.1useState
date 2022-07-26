import { useState } from 'react'

import './App.css'

function App() {
  
const [typeInput, setTypeInput] = useState('password')

const handleTypeInput = () =>{
  if (typeInput === 'password') {
     setTypeInput('text')
  } else{
    setTypeInput('password')
  }
}

  return (
    <div className="App">
      
      <h1>Hola</h1>
      <label htmlFor="">Ingrese Password</label>
      <input type={typeInput} />
      <button onClick={handleTypeInput}>{typeInput ==='password' ? 'Show': 'Hide'} Password</button>
     
    </div>
  )
}

export default App
