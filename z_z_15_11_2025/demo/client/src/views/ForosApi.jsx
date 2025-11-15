import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Link } from "react-router-dom";
import styles from './../css/ForosApi.module.css'

const ForosApi = ({setlistaForos, setLogin, setMe,listaForos,logOut, login,me})=> {
    const getData = ()=>{
        const URL = 'http://localhost:8000/api/foros'
        axios(URL, {headers : {token_user : localStorage.getItem("token")}}).then(
            response => {
                setlistaForos(response.data)
                setLogin(true)
                setMe(jwtDecode(localStorage.getItem("token")))
            }   
        ).catch(
            e=> {
                logOut()
            }
        )
    }

    useEffect(()=>{
        getData()
    }, [])

    return(
        <>

        <h2>Tabla de elmentos publicos: </h2>
        <div className={styles.table_main}>



                    {listaForos.filter((foro)=>foro.category == "publico").map((foro,index)=> (
                        <div className={styles.cards} key={index} >

                            <h3>{foro.title}</h3>
                            <img src="https://i.gifer.com/DOFB.gif" alt="foro" />
                            <div>
                                <button><Link to={`/foros/${foro._id}`}>Ver</Link></button>
                                {foro.author?.email == me.email? <button><Link to={`/foros/editar/${foro._id}`}>Editar</Link> </button>: "" }
                            </div>
                        </div>
                    ) )}
        </div>

        
        </>

    )
}

export default ForosApi;