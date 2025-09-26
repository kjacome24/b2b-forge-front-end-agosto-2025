import './App.css'
import DetalleLista from './components/DetalleLista'
import DetalleListaProps from './components/DetalleListaProps'

function App() {
  let persona = {
    nombre: "EMilia"
    , apellido : "Clrack",
    edad: 36
  }
  const {nombre, apellido, edad} = persona;



  let arrayTest = [1,4,5,6]
  return (
    <>
      <ul>
        < DetalleLista nombre={nombre} apellido={apellido}/>
        < DetalleListaProps nombre="Paulina" apellido="Ramirez"/>
        < DetalleListaProps nombre="Paulina" apellido="Ramirez" edad={50}/>
        < DetalleListaProps nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad}/>
      </ul>
      {/* <p>{persona}</p> */}
      <p>{arrayTest}</p>
      <ul>
        {arrayTest.map( numero => {
          return <li>{numero}</li>
        })}
      </ul>
    </>
  )
}

export default App
