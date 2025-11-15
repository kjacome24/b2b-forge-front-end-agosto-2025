import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppReducer from './reducer/AppReducer'
import FormNew from './components/FormNew'

function App() {
  const defaultUsers =  []

  const stateReducer ={
    users : defaultUsers,
    counter : 0
  }
  const [state, dispatcher] = useReducer(AppReducer,stateReducer)

  const addUserToArray = (input)=>{
    dispatcher({type: "add_user", payload : input})
  }

  return (
    <>

        <button onClick={() => dispatcher({type : "update_counter"})}>
          count is {state.counter}
        </button>
        < FormNew addUserToArray={addUserToArray}/> 
        <hr />
        <ul>
          {state.users.map((user,index)=> <li key={index}> {user.name}</li> )}
        </ul>

    </>
  )
}

export default App
