import { useState } from 'react'
import './App.css'
import ExtractDataRickMorty from './components/ExtractDataRickMorty'
import ExtractDataPokemon from './components/ExtractDataPokemon'
import ExtractDataGitHub from './components/ExtractDataGitHub'

function App() {
  const [list,setList] = useState([])
  const [pokemondongo,setPokemondongo] = useState('')
  const [userGithub,setUserGithub] = useState('')

  return (
    <>

      <h1>APIs & Fetch </h1>
      <p>API Rick & Mrty</p>
      < ExtractDataRickMorty setList={setList} /> 
      {list.map((character,index)=> <img src={character.image} alt={character.name}/>)}
      <hr />
      <p>Api pokemon</p>
      < ExtractDataPokemon setPokemondongo={setPokemondongo}/> 
      <img src={pokemondongo} alt={pokemondongo} />
      <hr />
      <p>Github API</p>
      < ExtractDataGitHub setUserGithub={setUserGithub} /> 
      <img src={userGithub.avatar_url} alt={userGithub} />
    </>
  )
}

export default App
