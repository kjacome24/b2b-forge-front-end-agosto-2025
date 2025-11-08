import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from './../css/OneForo.module.css'


const OneForo = ({setlistaForos, setLogin, logOut,listaForos}) => {
    const navigate = useNavigate()
    const {id} = useParams();
    const [foroData, setForoData] = useState({
        title : "",
        description : "",
        category : "",
        author : ""
    })
    const [error,setErrors] = useState('')


    const getData = ()=> {
        const URL = `http://localhost:8000/api/foros/${id}`
        axios(URL, {headers: {token_user : localStorage.getItem("token")}}).then(
            response => {
                setForoData(response.data)
                setLogin(true)
            }
        ).catch(
            e => {
                setErrors(e)
                if(e.status == 406){
                    logOut()
                }
            }
        )
    }




    useEffect(()=>{
        getData()
    },[])

    const deleteForo = () => {
        const URL = `http://localhost:8000/api/foros/destroy/${id}`
        axios.delete(URL, {headers: {token_user : localStorage.getItem("token")}}).then(
            response => {
                setlistaForos(listaForos.filter( foro => foro._id != id))
                setLogin(true)
                navigate('/foros')
            }
        ).catch(
            e => {
                if(e.status == 406) {
                    logOut()
                }
            }
        )
    }

    return(
        <>
            <h2>{foroData.title}</h2>
            <br />
            <div className={styles.card}>
                <p className={styles.titles}>Foro creado por:</p>
                <p>{foroData.author}</p>
                <p className={styles.titles}>Categoria / tema</p>
                <p>{foroData.category}</p>
                <p className={styles.titles}>Descripcion</p>
                <p>{foroData.description}</p>
            </div>
            <button className={styles.delete} onClick={deleteForo}>Eliminar</button>
        </>
    )
}

export default OneForo;
