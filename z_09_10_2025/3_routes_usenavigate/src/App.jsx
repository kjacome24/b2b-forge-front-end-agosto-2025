import './App.css'
import Card from './components/Card'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Pokemons from './components/Pokemons'
import NotFound from './components/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals
import Lista from './components/Lista'


function App() {


  return (
    <>
      <header>
        <h1>This is using UseNavigate % UseLocate</h1>
        <Link to="/welcome">Welcome</Link> |  < Link to="/">Raiz</Link>
        <hr />
        <NavLink to="/welcome" className={({isActive})=> (isActive? 'active' : '')}>Welcome</NavLink>| <NavLink to="/" className={({isActive})=> (isActive? 'active' : '')}>Raiz</NavLink>
      </header>

      <main>
        < Routes>
          <Route path='/' element={<h2>Esta es la pagina raiz</h2>}></Route>
          <Route path='/welcome' element={<h2 style={{color: "red"}}>Hola bienvenido a tu segunda ruta de react</h2>}></Route>
          <Route path='/pokemons' element={ <Lista/>}>
            
          </Route>
          <Route path='/uno' element={ <Pokemons/>}></Route>
          <Route path='*' element={< NotFound/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
