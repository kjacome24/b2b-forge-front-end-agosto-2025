import { useState } from 'react'

import './App.css'
import SongsApi from './components/SongsApi'

function App() {
  const [listaSongs, setListasSongs] = useState([])

  return (
    <>
      <h1>This is our first MERN Stack app</h1>
      < SongsApi setListasSongs={setListasSongs}/> 
      <ol>
      {listaSongs.map(
        song => <li>{song.title}</li>
      )}
      </ol>

    </>
  )
}

export default App
