import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";


const OneSong = ({listaSongs, setListasSongs})=> {
    const [person, setPerson] = useState({})
    const [error, setError] = useState('')
    const {id} = useParams();
    const URL = `http://localhost:8000/api/canciones/${id}`
    const navigate = useNavigate();
    const getData = ()=>{
        axios(URL).then(response => 
            setPerson(response.data)
        ).catch(
            e=> setError(e)
        )
    }

    useEffect(()=>{
        getData()
    },[])

    if(error){
        return <NotFound/>
    }


    const deleteOne =()=>{
        axios.delete(URL).then(
            response => {

                setListasSongs(listaSongs.filter(song => song._id != id ))
                navigate('/canciones')
            } 
        ).catch(
            e => console.log(e)
        )
    }

    const updateSong = ()=>{
        navigate(`/canciones/update/${id}`)
    }

    return(
        <div>
                <h2>Detalle de cancion</h2>
                <p>Title: {person.title}</p>
                <p>Artist: {person.artist}</p>
                <p>Lanzamiento: {person.yearOfRealease}</p>
                <p>Genero: {person.genre}</p>
                <button onClick={deleteOne}>Eliminar</button> | <button onClick={updateSong}>Editar</button>
        </div>
    )
}

export default OneSong;