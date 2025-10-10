import { useLocation, useNavigate, useParams } from "react-router-dom";

const Pokemons = ()=>{
    const location = useLocation();
    const {name, type} = location.state;
    return (
        <div>
        <p>Name: {name}</p>
        <p>Type: {type} </p>
    </div>
    )
}
 export default Pokemons;