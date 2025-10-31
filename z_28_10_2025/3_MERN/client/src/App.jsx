import { useState } from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import './App.css'
import SongsApi from './components/SongsApi'
import ListaCanciones from './views/ListaCanciones'
import OneSong from './views/OneSong'
import NotFound from './components/NotFound'
import FormSongs from './views/FormSongs'
import UpdateSongsForm from './views/UpdateSongsForm'

function App() {
  const [listaSongs, setListasSongs] = useState([])

  return (
    <>
      <h1>This is our first MERN Stack app</h1>
      < SongsApi setListasSongs={setListasSongs}/> 
      < NavLink to={'/canciones'}>Listado Completo</NavLink> | < NavLink to={'/canciones/new'}>Agregar cancion </NavLink>
      < Routes>
        <Route path='/' element={<div><p>This is the home</p></div>}/>
        <Route path='/canciones' element={< ListaCanciones listaSongs={listaSongs}/>}/>
        <Route path='/canciones/:id' element={<OneSong listaSongs={listaSongs}  setListasSongs={setListasSongs}/> }/>
        <Route path='/canciones/new' element={< FormSongs listaSongs={listaSongs}  setListasSongs={setListasSongs}/>}/>
        <Route path='/canciones/update/:id' element={< UpdateSongsForm listaSongs={listaSongs} setListasSongs={setListasSongs} />}/>
        <Route path='*' element={< NotFound/>}/>
      </Routes>



    </>
  )
}

export default App
