import { useReducer, useState } from 'react'
import './App.css'
import AppContext from './context/AppContext'
import Hijo from './components/Hijo';
import FormMessage from './components/formMessage';

function App() {
  const [message,setMessage] = useState("Hola estamos usando el contexto")

  const valuesForContext = {
    message,
    setMessage
  };

  return (
    <>
        <AppContext.Provider value={valuesForContext}>
          <Hijo /> 
          < FormMessage/>
        </AppContext.Provider>
    </>
  )
}

export default App
