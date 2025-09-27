import Card from './components/Card'
import './App.css'
import Card2 from './components/Card2'
import Cardinputs from './components/Card3'
import CardinputsProps from './components/Card4'
import CardinputsStylos from './components/card5/CardinputsStylos'

function App() {
  let people = [ {name : "Kevin", edad : 35}, {name: "Iris", edad: 23}, {name: "Camila", edad: 18}]


  return (
    <>
      {/* < Card />
      < Card />
      < Card />
      < Card2 />
      < Card2 /> */}
      {/* < Cardinputs nombre="Kevin" edad={35} />
      < Cardinputs nombre="Caro" edad={18} />
      < Cardinputs nombre="Anush" edad={21} />
      < Cardinputs nombre="rodrigo" edad={35} /> */}
      {/* < CardinputsProps nombre="Stefania" edad={19}/>  */}
      {/* < CardinputsStylos  nombre="Stefania" edad={19}/>  */}
      {people.map(
        person => {return < CardinputsStylos nombre={person.name} edad={person.edad} />}
      )}
      <button className='btn btn-danger'>Button bootstrap</button>
    </>

  )
}

export default App
