import { useState } from "react";
import axios from 'axios'

const ExtractDataGitHub = ({setUserGithub})=> {
    const [username,setUsername] = useState('')

    const getdataGithub =  ()=> {
        const URL = `https://api.github.com/users/${username}`
        axios(URL).then(
            response => setUserGithub(response.data)
        )

    }

    return(
        <div>
            <input type="text" name="username" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <button onClick={getdataGithub} >Mostrar Persona</button>
        </div>
    )

}

export default ExtractDataGitHub;