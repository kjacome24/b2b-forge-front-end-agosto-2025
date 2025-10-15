import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
const ExtractDataPokemon = ({setPokemondongo})=> {
    const [pokename,setpokename] = useState('')
    const [state,setState] = useState('')
    const getPokeData =  ()=> {
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokename}`
        axios(URL).then( response => {
            setPokemondongo(response.data.sprites.other.home.front_default)
            setState('termino')

        }
        )
    }

    useEffect(()=>{
        console.log('El inpuit cambio')
    },[])

    return(
        <div>
            <input type="text" name="pokename" id="pokename" value={pokename} onChange={(e)=> setpokename(e.target.value)}/>
            <button onClick={getPokeData} >Mostrar Pokemon</button>
        </div>
    )

}

export default ExtractDataPokemon;