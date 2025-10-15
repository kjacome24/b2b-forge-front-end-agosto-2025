import { useState } from "react";

const ExtractDataGitHub = ({setUserGithub})=> {
    const [username,setUsername] = useState('')

    const getdataGithub = async ()=> {
        const URL = `https://api.github.com/users/${username}`
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUserGithub(data)

    }

    return(
        <div>
            <input type="text" name="username" id="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <button onClick={getdataGithub} >Mostrar Persona</button>
        </div>
    )

}

export default ExtractDataGitHub;