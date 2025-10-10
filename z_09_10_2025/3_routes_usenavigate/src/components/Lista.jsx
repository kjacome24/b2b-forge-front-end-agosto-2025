import { useNavigate } from "react-router-dom"

const Lista = ()=> {
    const navigate = useNavigate()
    const irAPokemon = (input,input2)=> {
        navigate('/uno', {state: {name: input, type: input2}})
    }

    return (
        <div>
            <ol>
                <li>Charizard - <button className="btn btn-warning" onClick={()=>irAPokemon("Charizard","Fire") }>Go</button> </li>
                <li>Pikachu - <button className="btn btn-warning" onClick={()=>irAPokemon("Pikachu","Electric") }>Go</button> </li>
            </ol>
        </div>
    )
}

export default Lista