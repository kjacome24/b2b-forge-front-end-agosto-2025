import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [count2, setCount2] = useState(0);

  const supersData = [{name: "Flash", description: "I am the fastest man alive"}, {name: "Batman", description:"I love solitude"}]
  const [listaSups,setListaSups] = useState(supersData)

  const agregarSup = (name, description) =>{
    setListaSups([...listaSups, {name, description}, {name, description}, {name, description}, {name, description}
    ])
  }


  const contar2 = () => {
    setCount2(previous=> previous +1)
    setCount2(previous=> previous +1)
  }

  return (
    <>
      <h1>Contador:</h1>
      <p>{count}</p>
      <button onClick={()=>setCount(count + 1)}>Contar </button>

      <hr />
      <h1>Mensaje:</h1>
      <p>{mensaje}</p>
      <button onClick={()=> setMensaje("Hola")}>Mensaje</button>
      <hr />
      {listaSups.map((superx, index)=> <div className={`card bg-warning}`} key={index} > <p>{superx.name}</p> <p>{superx.description}</p></div>
      )}
      {/* <button onClick={()=> setListaSups([...listaSups, {name: "incognito", description: "I am an ramdom sup"}])} >Agregar sup</button> */}
      <button onClick={()=>agregarSup("Kevin", "I am your teacher")} >Agregar sup</button>



      <h1>Problematica asincronica del hook</h1>
      <h1>Contador:</h1>
      <p>{count2}</p>
      <button onClick={()=>contar2()}>Contar </button>
    </>
  )
}

export default App
