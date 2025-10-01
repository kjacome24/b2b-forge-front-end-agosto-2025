import { useState } from 'react'
import './App.css'
import SupCard from './components/SupCard';

function App() {
   const supersData = [
  {
    name: "Flash",
    description: "Hi, I am Flash and there is no one as fast as me",
    likes: 0,
    color: "warning",
  },
  {
    name: "Batman",
    description: "I am Batman. Prep time solves everything.",
    likes: 3,
    color: "dark",
  },
  {
    name: "Wonder Woman",
    description: "Truth, compassion, and a very shiny lasso.",
    likes: 5,
    color: "primary",
  },
  {
    name: "Superman",
    description: "Up, up, and away.",
    likes: 2,
    color: "info",
  },
];

const [listaSups, setListaSups] = useState(supersData)
  const agrgarSup = (name, description, likes, color) => {
    setListaSups([...listaSups, {name, description, likes, color}])
  }
  return (
    <>
      {/* < SupCard name="batman" description="I am Batman. Prep time solves everything" color="danger" />  */}
      <div className='listaSups'>
        {listaSups.map( (superx, index)=> < SupCard name={superx.name} description={superx.description} likes={superx.likes} color={superx.color}  index={index}/> )}
      </div>
      <div>
        <button className='btn btn-success' onClick={()=> agrgarSup("Ms. Incognito", "I am no one", 10, "dark")}>Agregar</button>
      </div>
    </>
  )
}

export default App
