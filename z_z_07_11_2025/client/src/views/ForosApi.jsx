import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Link } from "react-router-dom";
import styles from './../css/ForosApi.module.css'

const ForosApi = ({setlistaForos, setLogin, setMe,listaForos,logOut, login})=> {
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
        <div className={styles.table_main} style={{borderCollapse: "collapse"} }>
            <table >
                <thead>
                    <tr>
                        <th className={styles.title} >
                            Titulo
                        </th>
                        <th className={styles.extra}>
                            Detalle
                        </th>
                        <th className={styles.extra}>
                            Modificar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listaForos.map((foro,index)=> (
                        <tr key={index} >
                            <td className={styles.title}>{foro.title}</td>
                            <td className={styles.extra}> <Link to={`/foros/${foro._id}`}>Ver</Link></td>
                            <td className={styles.extra}> <Link to={`/foros/editar/${foro._id}`}>Editar</Link></td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    )
}

export default ForosApi;