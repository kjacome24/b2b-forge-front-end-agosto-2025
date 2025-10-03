import { useState } from 'react'

import './App.css'
import SuperHeroe from './components/SuperHeroe'
import FormSups from './components/FormSups'

function App() {



  const SuperHeores = [
    {name: "Flash", description: "I am super fast", linkImg: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRudnBoOWFsNjJ4NTNmenJkNGkxYng2OWxuanc1NzJsb3pvd2cyciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUOxeZUc8UFwMgH2MM/giphy.gif"},
    {name: "Batman", description: "Villians should suffer", linkImg: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzd1NWFrZ3Q1N2xmM2c4NXd6d3VoMjJxenRoc2t3a3RpdjViem5iZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lTLV2erK8vf1MIz4Rk/giphy.gif"},
    {name: "Aquaman", description: "I am the kind of atlantis", linkImg: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTg2N201cDFwdTl3YzY2MHBheTQzdmtwY3lodHlqODZobWdxbzhxMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/V4X14bU1vlHfa/giphy.gif"}
  ]

  const [listaSups, setListaSups] = useState(SuperHeores)

  const agregarSupsAppjsx = (name, description, linkImg) => {
    setListaSups([...listaSups, {name, description, linkImg }])
  }

  return (
    <>
      <div>
        <h1>BD SUperHeroes</h1>
      </div>
      <div className='tarjetasHeroes'>
        {listaSups.map( (superh, index) => < SuperHeroe name={superh.name} description={superh.description} linkImg={superh.linkImg} key={index} /> )}
      </div>
      <div>
        {/* <button className='btn btn-danger' onClick={()=>setListaSups([...listaSups, {name: "Incognito", description: "I am no one", linkImg: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5uMHVwbmk5cDB1OXBkcTltZjh3ZDhhNHg4NzJuNmowNnNzYXZqaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rs2QPsshsFI9zeT4Kn/giphy.gif"}])}>Agregar</button> */}
        {/* <button className='btn btn-danger' onClick={()=>agregarSupsAppjsx("Incognito","I am no one", "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5uMHVwbmk5cDB1OXBkcTltZjh3ZDhhNHg4NzJuNmowNnNzYXZqaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rs2QPsshsFI9zeT4Kn/giphy.gif")}>Agregar</button> */}
      </div>
      <div>
        < FormSups agregarSupsAppjsx={agregarSupsAppjsx} />
      </div>
    </>
  )
}

export default App
