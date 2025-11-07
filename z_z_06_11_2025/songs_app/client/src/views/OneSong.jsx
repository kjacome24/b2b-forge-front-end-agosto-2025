import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";


const OneSong = ({listaSongs, setListasSongs, logOut})=> {
    const [person, setPerson] = useState({})
    const [error, setError] = useState('')
    const {id} = useParams();
    const URL = `http://localhost:8000/api/canciones/${id}`
    const navigate = useNavigate();
    const getData = ()=>{
        axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then(response => 
            setPerson(response.data)
        ).catch(
            e=> {
                setError(e)
                if(e.status == 406){
                    logOut()
                }
            }
        )
    }

    useEffect(()=>{
        getData()
    },[])

    if(error){
        return <NotFound/>
    }


    const deleteOne =()=>{
        axios.delete(URL, {headers : {token_user : localStorage.getItem("token")}}).then(
            response => {

                setListasSongs(listaSongs.filter(song => song._id != id ))
                navigate('/canciones')
            } 
        ).catch(
            e => {
                console.log(e)
                if(e.status == 406){
                    logOut()
                }
            }
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