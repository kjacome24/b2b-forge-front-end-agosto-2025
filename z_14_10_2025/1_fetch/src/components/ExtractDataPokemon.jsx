import { useState } from "react";

const ExtractDataPokemon = ({setPokemondongo})=> {
    const [pokename,setpokename] = useState('')

    const getPokeData = async ()=> {
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokename}`
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data.sprites)
        setPokemondongo(data.sprites.other.home.front_default)
    }

    return(
        <div>
            <input type="text" name="pokename" id="pokename" value={pokename} onChange={(e)=> setpokename(e.target.value)}/>
            <button onClick={getPokeData} >Mostrar Pokemon</button>
        </div>
    )

}

export default ExtractDataPokemon;