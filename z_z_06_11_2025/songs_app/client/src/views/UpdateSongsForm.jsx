import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const UpdateSongsForm = ({listaSongs, setListasSongs, logOut})=> {
    const emptyDefault = {title: "", artist: "", yearOfRealease: "", genre: ""}
    const navigate = useNavigate();
    const {id} = useParams();

    const index = listaSongs.findIndex((song)=> song._id==id)

    const [data, setData] = useState({...emptyDefault})
    const [errors, setErrors] = useState({})

    const updadatState = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const updateSong = (e)=> {
        e.preventDefault();


        const URL = `http://localhost:8000/api/canciones/${id}`
        // xxxxx Espacio para validations xxxx
        axios.put(URL,data,{headers : {token_user : localStorage.getItem("token")}}).then(
            response => {
                const copyListaSong = [...listaSongs]
                copyListaSong[index] = response.data;
                setListasSongs(copyListaSong)

                navigate(`/canciones/${id}`)
                
            }
        ).catch(
            e=> {
                if(e.status == 406){
                    logOut()
                }
                setErrors(e.response.data.errors)
            } 
        )

    }


    useEffect(()=>{
        const newArray = listaSongs.find((song)=> song._id==id)
        setData(newArray ? {...newArray} : {...emptyDefault})
    },[listaSongs,id])

    return(
        <form onSubmit={e=> updateSong(e)}>
            <div>
                <label htmlFor="title" >Titulo:</label>
                <input type="text" name="title" id="title" value={data.title} onChange={(e)=>{ updadatState(e)}} />
                {errors?.title  && <p style={{color : "red"}}>{errors.title}</p>}
            </div>
            <div>
                <label htmlFor="artist" >Artista:</label>
                <input type="text" name="artist" id="artist" value={data.artist}  onChange={(e)=>{ updadatState(e)}}/>
                {errors?.artist  && <p style={{color : "red"}}>{errors.artist}</p>}
            </div>
            <div>
                <label htmlFor="yearOfRealease" >Lanzamiento:</label>
                <input type="text" name="yearOfRealease" id="yearOfRealease" value={data.yearOfRealease}  onChange={(e)=>{ updadatState(e)}}/>
                {errors?.yearOfRealease  && <p style={{color : "red"}}>{errors.yearOfRealease}</p>}
            </div>
            <div>
                <label htmlFor="genre" >Genero:</label>
                <input type="text" name="genre" id="genre"  value={data.genre}  onChange={(e)=>{ updadatState(e)}}/>
                {errors?.genre  && <p style={{color : "red"}}>{errors.genre}</p>}
            </div>
            <button>Enviar</button>
        </form>
    )
}


export default UpdateSongsForm;