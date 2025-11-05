import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SongsApi = ({setListasSongs, login, setLogin})=>{
    const navigate = useNavigate();
    const getDataSongs = ()=> {
        const URL = 'http://localhost:8000/api/canciones'
        axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then(response => {
            setListasSongs(response.data)
        }).catch((e=> 
        {
            navigate('login')
            setLogin(false)
        }
        ))
    }

    useEffect(()=> {
        getDataSongs()
    },[login])

    return (
        <></>
    )

}


export default SongsApi;