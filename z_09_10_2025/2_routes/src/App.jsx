import './App.css'
import Card from './components/Card'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Pokemons from './components/Pokemons'
import NotFound from './components/NotFound'


function App() {


  return (
    <>
      <header>
        <h1>THis is my first page with react router</h1>
        {/* <a href="/welcome">welcome</a> */}
        <Link to="/welcome">Welcome</Link> |  < Link to="/">Raiz</Link>
        <hr />
        <NavLink to="/welcome" className={({isActive})=> (isActive? 'active' : '')}>Welcome</NavLink>| <NavLink to="/" className={({isActive})=> (isActive? 'active' : '')}>Raiz</NavLink>
      </header>
      <main>
        < Routes>
          <Route path='/' element={<h2>Esta es la pagina raiz</h2>}></Route>
          <Route path='/welcome' element={<h2 style={{color: "red"}}>Hola bienvenido a tu primera ruta de react</h2>}></Route>
          <Route path='/card' element={<Card/>}></Route>
          <Route path='/pokemons/' element={< Pokemons/> }> 
            <Route path=':name' element={< Pokemons/>}>
                <Route path=':type' element={< Pokemons/>}></Route>  
            </Route>

          </Route>
          {/* < Route path='/pokemons/:name/:type' element={< Pokemons/>}></Route> */}
          < Route path='*' element={< NotFound/>}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App
