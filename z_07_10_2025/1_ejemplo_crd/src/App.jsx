import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'   // <-- import bootstrap here
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // optional, for JS components like modals

import './App.css'
import AddpokemonForm from './components/AddpokemonForm'
import FiltrarPokemon from './components/FiltrarPokemon'

function App() {
  const pokemons = [
    {name: "Pikachu", type: "Electric"},
    {name: "Charmander", type: "Fire"},
    {name: "Squirtle", type: "Water"}
  ]
  const [filter,setFilter] = useState('All')

  const [listaPokemon,setListaPokemon] = useState(pokemons)


  const elminarPokemon = (input)=> {
    // console.log(input);
    const newArrayPokemon = listaPokemon.filter( (pokemon,index) => index!=input)
    // console.log(newArrayPokemon)
    setListaPokemon(newArrayPokemon)
  }


  const PokeListaFiltrada = filter=="All"? listaPokemon : listaPokemon.filter((pokemon)=> pokemon.type===filter)

  return (
    <>
      <h1>PoKemon DB</h1>
      <div>
        < FiltrarPokemon filter={filter} setFilter={setFilter}/> 
      </div>
      <div className='pokemones'>
        {PokeListaFiltrada.map( (pokemon,index) => 
        <div className='card' key={index}> 
            <div className='card-header'>
                <p>{pokemon.name}</p>
            </div>
            <div className='card-body'>
                <p>Type: {pokemon.type}</p>
                {/* <button className='btn btn-danger' onClick={()=> elminarPokemon(pokemon.name)}>Elminar</button> */}
                <button className='btn btn-danger' onClick={()=> elminarPokemon(index)}>Elminar</button>
            </div>
        </div>
        )}
      </div>
      <div>
          < AddpokemonForm listaPokemon={listaPokemon} setListaPokemon={setListaPokemon}/> 
      </div>
    </>
  )
}

export default App
