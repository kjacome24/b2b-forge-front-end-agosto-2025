import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSongs = ({listaSongs, setListasSongs})=>{
    const [data, setData] = useState({
        title : "",
        artist : "",
        yearOfRealease : 0,
        genre : ""
    })
    const [errors, setErrors] = useState(
        {

        }
    )

    const navigate = useNavigate();

    const updadatState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }


    const addSong = (e) =>{
        e.preventDefault();
        const URL = 'http://localhost:8000/api/canciones'
            // xxxxx Espacio para validations xxxx

        axios.post(URL,data).then(
            response => {
                setListasSongs([...listaSongs, response.data])
                navigate('/canciones')
            }

        ).catch(
            e=> 
                setErrors(e.response.data.errors)

        )
    }

    return(
        <form onSubmit={(e) =>addSong(e) }>
            <div>
                <label htmlFor="title" >Titulo:</label>
                <input type="text" name="title" id="title" value={data.title} onChange={(e)=>{ updadatState(e)}} />
                {errors.title  && <p style={{color : "red"}}>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="artist" >Artista:</label>
                <input type="text" name="artist" id="artist" value={data.artist}  onChange={(e)=>{ updadatState(e)}}/>
                {errors.artist  && <p style={{color : "red"}}>{errors.artist}</p>}
            </div>
            <div>
                <label htmlFor="yearOfRealease" >Lanzamiento:</label>
                <input type="text" name="yearOfRealease" id="yearOfRealease" value={data.yearOfRealease}  onChange={(e)=>{ updadatState(e)}}/>
                {errors.yearOfRealease  && <p style={{color : "red"}}>{errors.yearOfRealease}</p>}
            </div>
            <div>
                <label htmlFor="genre" >Genero:</label>
                <input type="text" name="genre" id="genre"  value={data.genre}  onChange={(e)=>{ updadatState(e)}}/>
                {errors.genre  && <p style={{color : "red"}}>{errors.genre}</p>}
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default FormSongs;