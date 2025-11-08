import { useState } from 'react'
import {Routes, Route, Link, NavLink, useNavigate} from 'react-router-dom'
import './App.css'
import SongsApi from './components/SongsApi'
import ListaCanciones from './views/ListaCanciones'
import OneSong from './views/OneSong'
import NotFound from './components/NotFound'
import FormSongs from './views/FormSongs'
import UpdateSongsForm from './views/UpdateSongsForm'
import Login from './views/Login'
import Register from './views/Register'

function App() {
  const [listaSongs, setListasSongs] = useState([])
  const [login, setLogin] = useState(false)
  const [me,setMe] = useState({})
  const navigate = useNavigate();
  const logOut = ()=>{
    localStorage.removeItem("token")
    setLogin(false)
    navigate('/login')
  }

  return (
    <>
      <h1>This is our first MERN Stack app</h1>

      <hr />
      {login && <button onClick={logOut}>Log out</button>}
      {login && <h2>Hola {me.firstName} {me.lastName}: </h2>}
      <hr />

      {(login)? <>
        < Link to={'/canciones'}>Listado Completo</Link> | < Link to={'/canciones/new'}>Agregar cancion </Link>
      </> : <>
        < Link to={'/login'}>Login</Link> | < Link to={'/register'}>Registro </Link>
      </>}
      


      < SongsApi setListasSongs={setListasSongs} login={login} setLogin={setLogin} setMe={setMe}/> 

      < Routes>
        <Route path='/' element={<div><p>This is the home</p></div>}/>
        <Route path='/canciones' element={< ListaCanciones listaSongs={listaSongs} />}/>
        <Route path='/canciones/:id' element={<OneSong listaSongs={listaSongs}  setListasSongs={setListasSongs} logOut={logOut}/> }/>
        <Route path='/canciones/new' element={< FormSongs listaSongs={listaSongs}  setListasSongs={setListasSongs} logOut={logOut} login={login}/>}/>
        <Route path='/canciones/update/:id' element={< UpdateSongsForm listaSongs={listaSongs} setListasSongs={setListasSongs} logOut={logOut}/>}/>
        < Route path='/login' element={< Login setLogin={setLogin} />}/>
        <Route path='/register' element={ < Register setLogin={setLogin} />}/>
        <Route path='*' element={< NotFound/>}/>
      </Routes>



    </>
  )
}

export default App
