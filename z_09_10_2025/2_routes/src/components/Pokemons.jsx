import { useParams } from "react-router-dom";

const Pokemons = ()=>{
    const {name, type} = useParams();


    return <div>
        <p>Name: {name}</p>
        <p>Type: {type} </p>
    </div>
}
 export default Pokemons;